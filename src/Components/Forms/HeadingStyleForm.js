import React, { useState, useEffect } from 'react';
import { Checkbox, Box, Button, Spinner, Select, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import * as Html from '../../Services/Html';

const HeadingStyleForm = ({ activeIssue, handleActiveIssue, handleIssueSave, t }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [removeStyling, setRemoveStyling] = useState(false);
  const [textInputErrors, setTextInputErrors] = useState([]);
  const formErrors = [];
  
  const styleTags = ["STRONG", "B", "I", "EM", "MARK", "SMALL", "DEL", "INS", "SUB", "SUP"];

  useEffect(() => {
    const html = Html.getIssueHtml(activeIssue);
    let element = Html.toElement(html);
    const tagName = Html.getTagName(element);

    setSelectedValue(tagName.startsWith('H') ? tagName : '');
    setRemoveStyling(!hasStyling());
    setTextInputErrors([]);
  }, [activeIssue]);

  const handleCheckbox = () => {
    setRemoveStyling(!removeStyling);
    updateIssueHtml();
  };

  const handleSelect = (event) => {
    formErrors.length = 0;
    setSelectedValue(event.target.value);
    updateIssueHtml();
  };

  const handleSubmit = () => {
    formErrors.length = 0;

    if (!removeStyling) {
      checkSelectNotEmpty();
    }

    if (formErrors.length > 0) {
      setTextInputErrors(formErrors);
    } else {
      setTextInputErrors([]);
      handleIssueSave(activeIssue);
    }
  };

  const checkSelectNotEmpty = () => {
    if (selectedValue === '' && !removeStyling) {
      formErrors.push({ text: t('form.heading.msg.select_heading'), type: 'error' });
    }
  };

  const processHtml = () => {
    let newHeader;
    const html = Html.getIssueHtml(activeIssue);
    const element = Html.toElement(html);

    if (selectedValue) {
      newHeader = document.createElement(selectedValue);
      newHeader.innerHTML = element.innerHTML;
      for (let styleTag of styleTags) {
        newHeader = Html.removeTag(newHeader, styleTag);
      }
    } else {
      newHeader = Html.toElement(activeIssue.sourceHtml);
      if (removeStyling) {
        for (let styleTag of styleTags) {
          newHeader = Html.removeTag(newHeader, styleTag);
        }
      }
    }

    return Html.toString(newHeader);
  };

  const hasStyling = () => {
    const html = Html.getIssueHtml(activeIssue);
    const element = Html.toElement(html);
    for (const styleTag of styleTags) {
      if (Html.hasTag(element, styleTag)) {
        return true;
      }
    }
    return false;
  };

  const updateIssueHtml = () => {
    const updatedIssue = { ...activeIssue, newHtml: processHtml() };
    handleActiveIssue(updatedIssue);
  };

  // const options = t('form.heading.heading_level_options');

  const pending = activeIssue && activeIssue.pending === '1';
  const buttonLabel = pending ? 'form.processing' : 'form.submit';

  return (
    <Box padding="x-small">
      <Box margin="small 0">
        <Select
          placeholder={t('form.heading.heading_level')}
          value={selectedValue}
          onChange={handleSelect}
          width="100%"
        >
         {/*  <option value="">-- Choose --</option>
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))} */}
        </Select>
      </Box>

      <Box margin="small 0">
        <Checkbox
          onChange={handleCheckbox}
          isChecked={removeStyling}
        >
          {t('form.heading.remove_styling')}
        </Checkbox>
      </Box>

      <Box margin="small 0">
        <Button
          colorScheme="green"
          onClick={handleSubmit}
          isDisabled={pending || activeIssue.status === 2}
        >
          {pending && <Spinner size="xs" />}
          {t(buttonLabel)}
        </Button>

        {activeIssue.recentlyUpdated && (
          <Box margin="0 small">
            <Icon as={CheckCircleIcon} color="green.500" />
            <Box margin="0 x-small">{t('label.fixed')}</Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HeadingStyleForm;
