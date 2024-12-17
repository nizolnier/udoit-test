import React, { useState, useEffect } from "react";
import { Box, Button, Checkbox, Input, Spinner, Text } from "@chakra-ui/react";
import * as Html from "../../Services/Html";

const AnchorText = ({ activeIssue, handleIssueSave, handleActiveIssue, t }) => {
  const html = Html.getIssueHtml(activeIssue);

  const [textInputValue, setTextInputValue] = useState(Html.getInnerText(html));
  const [textInputErrors, setTextInputErrors] = useState([]);
  const [deleteLink, setDeleteLink] = useState(
    !activeIssue.newHtml && activeIssue.status === 1
  );

  const [pending, setPending] = useState(activeIssue?.pending === "1");
  const formErrors = [];

  useEffect(() => {
    const html = Html.getIssueHtml(activeIssue);
    setTextInputValue(Html.getInnerText(html));
    setTextInputErrors([]);
    setDeleteLink(!activeIssue.newHtml && activeIssue.status === 1);
  }, [activeIssue]);

  const handleInput = (event) => {
    const value = event.target.value;
    setTextInputValue(value);
    const updatedIssue = { ...activeIssue, newHtml: processHtml(value) };
    handleActiveIssue(updatedIssue);
  };

  const handleDeleteCheckbox = (event) => {
    const checked = event.target.checked;
    setDeleteLink(checked);
    const updatedIssue = {
      ...activeIssue,
      newHtml: processHtml(textInputValue),
    };
    handleActiveIssue(updatedIssue);
  };

  const handleSubmit = () => {
    formErrors.length = 0;

    if (!deleteLink) {
      checkTextNotEmpty();
      checkTextDescriptive();
    }

    if (formErrors.length > 0) {
      setTextInputErrors(formErrors);
    } else {
      const updatedIssue = {
        ...activeIssue,
        newHtml: processHtml(textInputValue),
      };
      handleIssueSave(updatedIssue);
    }
  };

  const checkTextDescriptive = () => {
    const text = textInputValue.trim().toLowerCase();
    const badOptions = ["click", "click here", "more", "here"];
    if (badOptions.includes(text)) {
      formErrors.push({
        text: t("form.anchor.msg.text_descriptive"),
        type: "error",
      });
    }
  };

  const checkTextNotEmpty = () => {
    const text = textInputValue.trim().toLowerCase();
    if (text === "") {
      formErrors.push({ text: t("form.anchor.msg.text_empty"), type: "error" });
    }
  };

  const processHtml = (newText) => {
    const updatedHtml = Html.getIssueHtml(activeIssue);
    if (deleteLink) {
      return "";
    }
    return Html.toString(Html.setInnerText(updatedHtml, newText));
  };

  const buttonLabel = pending ? "form.processing" : "form.submit";

  return (
    <Box padding="x-small">
      <Box>
        <Input
          placeholder={t("form.anchor.link_text")}
          width="100%"
          value={textInputValue}
          onChange={handleInput}
          id="textInputValue"
          isDisabled={deleteLink}
        />
        {textInputErrors.length > 0 && (
          <Box color="red.500" mt={2}>
            {textInputErrors.map((error, idx) => (
              <Text key={idx} fontSize="sm">
                {error.text}
              </Text>
            ))}
          </Box>
        )}
        <Box marginY={2}>
          <Checkbox
            label={t("form.anchor.delete_link")}
            isChecked={deleteLink}
            onChange={handleDeleteCheckbox}
          />
        </Box>
      </Box>

      <Box marginY={2}>
        <Button
          colorScheme="green"
          onClick={handleSubmit}
          isDisabled={pending || activeIssue.status === 2}
        >
          {pending && <Spinner size="sm" mr={2} />}
          {t(buttonLabel)}
        </Button>
        {activeIssue.recentlyUpdated && (
          <Box marginTop={2} display="flex" alignItems="center">
            <Text marginLeft={2} fontSize="sm" color="green.500">
              {t("label.fixed")}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AnchorText;
