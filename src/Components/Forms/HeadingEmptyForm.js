import React, { useState, useEffect } from 'react';
import { Checkbox, Box, Input, Button, Spinner, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import * as Html from '../../Services/Html';

const HeadingEmptyForm = ({ activeIssue, handleActiveIssue, handleIssueSave, t }) => {
  const [textInputValue, setTextInputValue] = useState('');
  const [deleteHeader, setDeleteHeader] = useState(false);
  const [textInputErrors, setTextInputErrors] = useState([]);
  
  const formErrors = [];

  useEffect(() => {
    let html = activeIssue.newHtml || activeIssue.sourceHtml;
    if (activeIssue.status === '1') {
      html = activeIssue.newHtml;
    }
    
    let element = Html.toElement(html);
    setTextInputValue(element ? element.innerText : '');
    setDeleteHeader(!element && activeIssue.status === '1');
    setTextInputErrors([]);
  }, [activeIssue]);

  const handleCheckbox = () => {
    setDeleteHeader(!deleteHeader);
    updateIssueHtml();
  };

  const handleTextInput = (event) => {
    setTextInputValue(event.target.value);
    updateIssueHtml();
  };

  const handleSubmit = () => {
    formErrors.length = 0;

    if (!deleteHeader) {
      checkTextNotEmpty();
    }

    if (formErrors.length > 0) {
      setTextInputErrors(formErrors);
    } else {
      setTextInputErrors([]);
      const updatedIssue = { ...activeIssue, newHtml: processHtml() };
      handleIssueSave(updatedIssue);
    }
  };

  const checkTextNotEmpty = () => {
    const text = textInputValue.trim().toLowerCase();
    if (text === '') {
      formErrors.push({ text: t('form.heading.msg.text_empty'), type: 'error' });
    }
  };

  const processHtml = () => {
    const html = activeIssue.newHtml || activeIssue.sourceHtml;
    if (deleteHeader) {
      return '';
    }
    return Html.toString(Html.setInnerText(html, textInputValue));
  };

  const updateIssueHtml = () => {
    const updatedIssue = { ...activeIssue, newHtml: processHtml() };
    handleActiveIssue(updatedIssue);
  };

  const pending = activeIssue && activeIssue.pending === '1';
  const buttonLabel = pending ? 'form.processing' : 'form.submit';

  return (
    <Box padding="x-small">
      <Box>
        <Input
          placeholder={t('form.heading.text')}
          value={textInputValue}
          onChange={handleTextInput}
          id="textInputValue"
          isInvalid={textInputErrors.length > 0}
          isDisabled={deleteHeader}
        />
      </Box>

      <Box margin="x-small 0">
        <Checkbox
          label={t('form.heading.remove_header')}
          onChange={handleCheckbox}
          isChecked={deleteHeader}
        />
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

export default HeadingEmptyForm;
