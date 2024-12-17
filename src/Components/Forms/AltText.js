import React, { useState, useEffect } from "react";
import * as Html from "../../Services/Html";
import { Textarea, Text, Button, Spinner, Checkbox } from "@chakra-ui/react";

const AltText = ({
  activeIssue = null,
  handleActiveIssue,
  handleIssueSave,
  t,
}) => {
  const maxLength = 150;

  const html = Html.getIssueHtml(activeIssue);

  let altText = Html.getAttribute(html, "alt");
  altText = typeof altText === "string" ? altText : "";

  const elementIsDecorative = (htmlString) => {
    const decorativeAttribute = Html.getAttribute(
      htmlString,
      "data-decorative"
    );
    const roleAttribute = Html.getAttribute(htmlString, "role");
    const classes = Html.getClasses(htmlString);

    if (Html.getTagName(htmlString) !== "IMG") {
      return false;
    }

    return (
      decorativeAttribute === "true" ||
      roleAttribute === "presentation" ||
      classes.includes("phpally-ignore")
    );
  };

  const [textInputValue, setTextInputValue] = useState(altText);
  const [isDecorative, setIsDecorative] = useState(elementIsDecorative(html));
  const [characterCount, setCharacterCount] = useState(altText.length);
  const [textInputErrors, setTextInputErrors] = useState([]);

  const formErrors = [];

  // Component did mount / update behavior
  useEffect(() => {
    const html = Html.getIssueHtml(activeIssue);
    let altText = Html.getAttribute(html, "alt");
    altText = typeof altText === "string" ? altText : "";

    setTextInputValue(altText);
    setIsDecorative(elementIsDecorative(html));
    setCharacterCount(altText.length);
    setTextInputErrors([]);
  }, [activeIssue]);

  const handleHtmlUpdate = () => {
    const html = Html.getIssueHtml(activeIssue);
    let element = Html.toElement(html);

    if (isDecorative) {
      element = Html.setAttribute(element, "role", "presentation");
      element = Html.addClass(element, "phpally-ignore");
      element = Html.setAttribute(element, "alt", "");
    } else {
      element = Html.removeAttribute(element, "role");
      element = Html.removeClass(element, "phpally-ignore");
      element = Html.setAttribute(element, "alt", textInputValue);
    }

    let issue = activeIssue;
    issue.newHtml = Html.toString(element);
    handleActiveIssue(issue);
  };

  const handleButton = () => {
    formErrors.length = 0; // Clear previous errors

    if (!isDecorative) {
      checkTextNotEmpty();
      checkTextLength();
      checkForFileExtensions();
      checkFileName();
    }

    if (formErrors.length > 0) {
      setTextInputErrors(formErrors);
    } else {
      handleIssueSave(activeIssue);
    }
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setTextInputValue(value);
    setCharacterCount(value.length);
    handleHtmlUpdate();
  };

  const handleCheckbox = () => {
    setIsDecorative((prev) => !prev);
    handleHtmlUpdate();
  };

  const checkTextNotEmpty = () => {
    const text = textInputValue.trim().toLowerCase();
    if (text === "") {
      formErrors.push({ text: t("form.alt.msg.text_empty"), type: "error" });
    }
  };

  const checkTextLength = () => {
    const text = textInputValue.trim().toLowerCase();
    if (text.length > maxLength) {
      formErrors.push({ text: t("form.alt.msg.text_too_long"), type: "error" });
    }
  };

  const checkForFileExtensions = () => {
    const fileRegex = /([a-zA-Z0-9\s_\\.\-\(\):])+(.png|.jpg|.jpeg|.gif)$/i;

    if (textInputValue.match(fileRegex) != null) {
      formErrors.push({
        text: t("form.alt.msg.text_has_file_extension"),
        type: "error",
      });
    }
  };

  const checkFileName = () => {
    const fileName = Html.getAttribute(activeIssue.sourceHtml, "src");

    if (textInputValue === fileName) {
      formErrors.push({
        text: t("form.alt.msg.text_matches_filename"),
        type: "error",
      });
    }
  };

  const pending = activeIssue && activeIssue.pending === "1";
  const buttonLabel = pending ? "form.processing" : "form.submit";

  return (
    <div as="div" padding="x-small">
      <div>
        <Text textStyle="sm" fontWeight="semibold">
          {t("form.alt.text")}
        </Text>
        <Textarea
          onChange={handleInput}
          value={textInputValue}
          id="textInputValue"
          disabled={isDecorative}
          messages={textInputErrors}
        />
      </div>
      <div as="div" textAlign="end" padding="x-small 0 0 0">
        <Text textStyle="sm">
          {characterCount} {t("form.alt.of")} {maxLength} {t("form.alt.chars")}
        </Text>
      </div>
      <div as="div" margin="0 0 small 0">
        <Checkbox isChecked={isDecorative} onChange={handleCheckbox}>
          {t("form.alt.mark_decorative")}
        </Checkbox>
      </div>

      <div as="div" margin="small 0">
        <Button
          colorScheme="green"
          onClick={handleButton}
          interaction={
            pending || activeIssue.status === 2 ? "disabled" : "enabled"
          }
        >
          {pending && <Spinner size="xs" />}
          {t(buttonLabel)}
        </Button>
        {activeIssue.recentlyUpdated && (
          <div margin="0 small">
            <div></div>
            <div margin="0 x-small">{t("label.fixed")}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AltText;
