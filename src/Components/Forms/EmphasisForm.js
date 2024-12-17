import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Spinner, Box, Text } from '@chakra-ui/react';
import * as Html from '../../Services/Html';
import * as Contrast from '../../Services/Contrast';

const EmphasisForm = ({ activeIssue, handleIssueSave, handleActiveIssue, t }) => {
  const isBold = () => {
    const issue = activeIssue;
    const metadata = issue.metadata ? JSON.parse(issue.metadata) : {};
    const html = Html.getIssueHtml(issue);
    const element = Html.toElement(html);
    return Html.hasTag(element, 'strong') || metadata.fontWeight === 'bold';
  };

  const isItalicized = () => {
    const issue = activeIssue;
    const metadata = issue.metadata ? JSON.parse(issue.metadata) : {};
    const html = Html.getIssueHtml(issue);
    const element = Html.toElement(html);
    return Html.hasTag(element, 'em') || metadata.fontStyle === 'italic';
  };
  
  const [useBold, setUseBold] = useState(isBold());
  const [useItalics, setUseItalics] = useState(isItalicized());
  const [checkboxErrors, setCheckboxErrors] = useState([]);
  const [pending, setPending] = useState(activeIssue?.pending === '1');
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    updatePreview();
  }, [useBold, useItalics]);

  useEffect(() => {
    if (activeIssue) {
      setUseBold(isBold());
      setUseItalics(isItalicized());
      setCheckboxErrors([]);
      setFormErrors([]);
      updatePreview();
    }
  }, [activeIssue]);

  const handleBoldToggle = () => {
    setUseBold((prev) => !prev);
  };

  const handleItalicsToggle = () => {
    setUseItalics((prev) => !prev);
  };

  const handleSubmit = () => {
    if (cssEmphasisIsValid(activeIssue)) {
      const updatedIssue = { ...activeIssue, newHtml: Contrast.convertHtmlRgb2Hex(activeIssue.newHtml) };
      handleIssueSave(updatedIssue);
    } else {
      const errors = [{ text: `${t('form.contrast.must_select')}`, type: 'error' }];
      setFormErrors(errors);
      setCheckboxErrors(errors);
    }
  };

  const updatePreview = () => {
    const html = Html.getIssueHtml(activeIssue);
    const updatedHtml = processHtml(html);
    const updatedIssue = { ...activeIssue, newHtml: updatedHtml };
    handleActiveIssue(updatedIssue);
  };

  const processHtml = (html) => {
    let element = Html.toElement(html);

    Html.removeTag(element, 'strong');
    Html.removeTag(element, 'em');

    if (useBold) {
      element.innerHTML = `<strong>${element.innerHTML}</strong>`;
    }
    if (useItalics) {
      element.innerHTML = `<em>${element.innerHTML}</em>`;
    }

    return Html.toString(element);
  };

  

  const cssEmphasisIsValid = (issue) => {
    if (issue.scanRuleId === 'CssTextStyleEmphasize') {
      return useBold || useItalics;
    }
    return true;
  };

  const buttonLabel = pending ? 'form.processing' : 'form.submit';

  return (
    <Box padding="2">
      <div id="flash-messages" role="alert" />

      <Box marginBottom="2">
        <Checkbox label={t('form.contrast.bolden_text')} isChecked={useBold} onChange={handleBoldToggle} />
      </Box>

      <Box marginBottom="2">
        <Checkbox
          label={t('form.contrast.italicize_text')}
          isChecked={useItalics}
          onChange={handleItalicsToggle}
          isInvalid={checkboxErrors.length > 0}
          error={checkboxErrors.map((err, idx) => (
            <Text key={idx} color="red.500" fontSize="sm">
              {err.text}
            </Text>
          ))}
        />
      </Box>

      <Box marginBottom="2">
        <Button
          colorScheme="green"
          onClick={handleSubmit}
          isDisabled={pending || activeIssue.status === 2}
        >
          {pending && <Spinner size="xs" />}
          {t(buttonLabel)}
        </Button>

        {activeIssue.recentlyUpdated && (
          <Box marginTop="2">
            <Text color="green.500" marginLeft="2">{t('label.fixed')}</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default EmphasisForm;
