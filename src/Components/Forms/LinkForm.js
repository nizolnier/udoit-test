import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Input, Spinner, Box, Text } from '@chakra-ui/react';
import * as Html from '../../Services/Html';

const LinkForm = ({ activeIssue, handleIssueSave, handleActiveIssue, t }) => {
  const [textInputValue, setTextInputValue] = useState('');
  const [textInputErrors, setTextInputErrors] = useState([]);
  const [deleteLink, setDeleteLink] = useState(false);
  const [pending, setPending] = useState(activeIssue?.pending === '1');
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    const redirectLink = activeIssue?.metadata ? JSON.parse(activeIssue.metadata)["redirect_url"] : '';
    const html = Html.getIssueHtml(activeIssue);
    setTextInputValue(redirectLink || Html.getInnerText(html));
    setDeleteLink(!activeIssue.newHtml && activeIssue.status === 1);
    setTextInputErrors([]);
  }, [activeIssue]);

  const handleSubmit = () => {
    const errors = [];
    if (!deleteLink) {
      checkLinkNotEmpty(errors);
    }

    if (errors.length > 0) {
      setTextInputErrors(errors);
    } else {
      const updatedIssue = { ...activeIssue, newHtml: processHtml() };
      handleIssueSave(updatedIssue);
    }
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setTextInputValue(value);
    const updatedIssue = { ...activeIssue, newHtml: processHtml() };
    handleActiveIssue(updatedIssue);
  };

  const handleDeleteCheckbox = (event) => {
    const checked = event.target.checked;
    setDeleteLink(checked);
    const updatedIssue = { ...activeIssue, newHtml: processHtml() };
    handleActiveIssue(updatedIssue);
  };

  const checkLinkNotEmpty = (errors) => {
    const text = textInputValue.trim().toLowerCase();
    if (text === '') {
      errors.push({ text: t('form.link.msg.link_empty'), type: 'error' });
    }
  };

  const processHtml = () => {
    const html = Html.getIssueHtml(activeIssue);
    if (deleteLink) {
      return '';
    }
    return Html.toString(Html.prepareLink(Html.setAttribute(html, "href", textInputValue)));
  };

  const buttonLabel = pending ? 'form.processing' : 'form.submit';

  return (
    <Box padding="2">
      <Box>
        <Input
          placeholder={t('form.link.new_link')}
          value={textInputValue}
          onChange={handleInput}
          isDisabled={deleteLink}
          isInvalid={textInputErrors.length > 0}
          errorBorderColor="red.500"
        />
        {textInputErrors.length > 0 && (
          <Box color="red.500" fontSize="sm">
            {textInputErrors.map((err, idx) => (
              <Text key={idx}>{err.text}</Text>
            ))}
          </Box>
        )}
      </Box>

      <Box marginTop="2">
        <Checkbox
          isChecked={deleteLink}
          onChange={handleDeleteCheckbox}
        >
          {t('form.anchor.delete_link')}
        </Checkbox>
      </Box>

      <Box marginTop="2">
        <Button
          colorScheme="green"
          onClick={handleSubmit}
          isDisabled={pending || activeIssue.status === 2}
        >
          {pending && <Spinner size="xs" />}
          {t(buttonLabel)}
        </Button>

        {activeIssue.recentlyUpdated && (
          <Box marginTop="2" display="flex" alignItems="center">
            <Text color="green.500" marginLeft="2">{t('label.fixed')}</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LinkForm;
