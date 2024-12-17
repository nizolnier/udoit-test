// WIP
/* import React, { useState, useEffect } from "react";
import { Modal } from "@instructure/ui-modal";
import { Heading } from "@instructure/ui-heading";
import { Pill } from "@instructure/ui-pill";

import ReactHtmlParser from "react-html-parser";
import MessageTray from "./MessageTray";
import Preview from "./Preview";

import { returnIssueForm } from "../Services/Ufixit";
import Api from "../Services/Api";
import * as Html from "../Services/Html";

import Pretty from "pretty";
import { Flex, Button, Text } from "@chakra-ui/react";

const UfixitModal = ({
  open,
  t,
  activeIssue,
  activeContentItem,
  filteredRows,
  settings,
  handleCloseButton,
  handleActiveIssue,
}) => {
  const [windowContents, setWindowContents] = useState("preview");
  const [expandExample, setExpandExample] = useState(false);
  const [modalMessages, setModalMessages] = useState([]);

  const pending = activeIssue && activeIssue.pending === "1";

  const findActiveIndex = () => {
    if (filteredRows && activeIssue) {
      for (const i in filteredRows) {
        let issue = filteredRows[i];
        if (issue.issue.id === activeIssue.id) {
          return Number(i);
        }
      }
    }
    return 0;
  };

  // Handler for the previous and next buttons on the modal
  const handleIssueChange = (newIndex) => {
    if (newIndex < 0) {
      newIndex = filteredRows.length - 1;
    }
    if (newIndex > filteredRows.length - 1) {
      newIndex = 0;
    }
    clearMessages();
    handleActiveIssue(filteredRows[newIndex].issue, newIndex);
  };

  const handleWindowToggle = (val) => {
    setWindowContents(val);
  };

  const handleOpenContent = () => {
    const contentItem = activeContentItem;
    window.open(contentItem.url, "_blank", "noopener,noreferrer");
  };

  const prepareCode = (activeIssue) => {
    let sourceCode = activeIssue.newHtml
      ? activeIssue.newHtml
      : activeIssue.sourceHtml;
    let code = sourceCode;

    if (sourceCode.length === 0 || sourceCode.length > 3000) {
      code = "<span>Not Available</span>";
    } else {
      let element = Html.toElement(sourceCode);
      if (element && element.tagName === "TH") {
        code = activeIssue.previewHtml;
      }
    }
    return Pretty(code);
  };

  const handleIssueResolve = () => {
    let issue = { ...activeIssue };
    if (issue.pending) return;

    if (issue.status) {
      issue.status = false;
      issue.newHtml = Html.toString(
        Html.removeClass(issue.sourceHtml, "phpally-ignore")
      );
    } else {
      issue.status = 2;
      issue.newHtml = Html.toString(
        Html.addClass(issue.sourceHtml, "phpally-ignore")
      );
    }

    let api = new Api(settings);
    api
      .resolveIssue(issue)
      .then((responseStr) => responseStr.json())
      .then((response) => {
        response.messages.forEach((msg) => addMessage(msg));

        if (response.data.issue) {
          const newIssue = { ...issue, ...response.data.issue };
          const newReport = response.data.report;

          newIssue.pending = false;
          newIssue.recentlyResolved = !!issue.status;
          newIssue.sourceHtml = newIssue.newHtml;
          newIssue.newHtml = "";

          api
            .scanContent(newIssue.contentItemId)
            .then((responseStr) => responseStr.json())
            .then((res) => {
              handleActiveIssue(newIssue);
              handleIssueSave(newIssue, res.data);
            });
        } else {
          issue.pending = false;
          handleActiveIssue(issue);
        }
      });

    issue.pending = 2;
    handleActiveIssue(issue);
  };

  const handleIssueSave = (issue) => {
    let api = new Api(settings);
    api
      .saveIssue(issue)
      .then((responseStr) => responseStr.json())
      .then((response) => {
        if (response.data.failed) {
          response.messages.forEach((msg) => addMessage(msg));

          if (Array.isArray(response.data.issues)) {
            response.data.issues.forEach((issue) => {
              addMessage({
                severity: "error",
                message: t(`form.error.${issue.ruleId}`),
              });
            });
          }

          if (Array.isArray(response.data.errors)) {
            response.data.errors.forEach((error) => {
              addMessage({
                severity: "error",
                message: error,
              });
            });
          }

          issue.pending = false;
          handleActiveIssue(issue);
        } else {
          response.messages.forEach((msg) => addMessage(msg));

          if (response.data.issue) {
            const newIssue = { ...issue, ...response.data.issue };
            newIssue.pending = false;
            newIssue.recentlyUpdated = true;

            api
              .scanContent(newIssue.contentItemId)
              .then((responseStr) => responseStr.json())
              .then((res) => {
                handleActiveIssue(newIssue);
                handleIssueSave(newIssue, res.data);
              });
          } else {
            issue.pending = false;
            handleActiveIssue(issue);
          }
        }
      });

    issue.pending = 1;
    handleActiveIssue(issue);
  };

  const handleManualScan = (issue) => {
    let api = new Api(settings);
    api
      .scanIssue(issue.id)
      .then((response) => response.json())
      .then((data) => {
        if (data.messages) {
          data.messages.forEach((msg) => {
            if (msg.visible) {
              addMessage(msg);
            }
          });
        }
        if (data.data.issue) {
          const newIssue = { ...issue, ...data.data.issue };
          newIssue.pending = false;
          newIssue.recentlyUpdated = true;

          handleIssueSave(newIssue, data.data.report);
          handleActiveIssue(newIssue);
        } else {
          issue.pending = false;
          handleActiveIssue(issue);
        }
      });

    issue.pending = 1;
    handleActiveIssue(issue);
  };

  const handleExampleToggle = () => {
    setExpandExample(!expandExample);
  };

  const addMessage = (msg) => {
    setModalMessages((prevMessages) => [...prevMessages, msg]);
  };

  const clearMessages = () => {
    setModalMessages([]);
  };

  const UfixitForm = returnIssueForm(activeIssue);
  const activeIndex = findActiveIndex();
  const showExample = !t(`rule.example.${activeIssue.scanRuleId}`).includes(
    "rule.example"
  );
  const code = prepareCode(activeIssue);

  return (
    <div>
      {open && (
        <Modal open={open} size="large" label={t("ufixit.modal.label")}>
          <Modal.Header padding="0 medium">
            <Flex>
              <div shouldGrow shouldShrink>
                <Heading>{t(`rule.label.${activeIssue.scanRuleId}`)}</Heading>
              </div>
              <div>
                <Button
                  placement="end"
                  offset="small"
                  screenReaderLabel="Close"
                  onClick={handleCloseButton}
                />
              </div>
            </Flex>
          </Modal.Header>
          <Modal.Body padding="small medium">
            <MessageTray
              messages={modalMessages}
              clearMessages={clearMessages}
              t={t}
              hasNewReport={true}
            />
            <div margin="small">
              <div margin="small 0">
                <Text lineHeight="default">
                  {ReactHtmlParser(t(`rule.desc.${activeIssue.scanRuleId}`), {
                    preprocessNodes: (nodes) =>
                      Html.processStaticHtml(nodes, settings),
                  })}
                </Text>
              </div>
              {showExample && (
                <ToggleDetails
                  summary={
                    expandExample
                      ? t("label.btn.hide_example")
                      : t("label.btn.show_example")
                  }
                  expanded={expandExample}
                  fluidWidth={true}
                  onToggle={handleExampleToggle}
                >
                  <div margin="small 0">
                    {ReactHtmlParser(
                      t(`rule.example.${activeIssue.scanRuleId}`),
                      {
                        preprocessNodes: (nodes) =>
                          Html.processStaticHtml(nodes, settings),
                      }
                    )}
                  </div>
                </ToggleDetails>
              )}
            </div>
            <Flex justifyItems="space-between" alignItems="start">
              <div width="46%" padding="0">
                <div as="div">
                  <UfixitForm
                    activeIssue={activeIssue}
                    t={t}
                    settings={settings}
                    handleIssueSave={handleIssueSave}
                    addMessage={addMessage}
                    handleActiveIssue={handleActiveIssue}
                    handleManualScan={handleManualScan}
                  />
                </div>
                {activeContentItem.contentType !== "module" && (
                  <div
                    as="div"
                    background="secondary"
                    padding="medium"
                    margin="small 0 0 x-small"
                  >
                    <Text as="div" weight="bold">
                      {t("label.manual_resolution")}
                    </Text>
                    <Text as="div" lineHeight="default">
                      {t("label.resolved_description")}
                    </Text>
                    <div as="div" padding="small 0 0 0">
                      {activeIssue.pending === "2" ? (
                        <Spinner
                          renderTitle={t("form.processing")}
                          size="x-small"
                        />
                      ) : (
                        <Checkbox
                          onChange={handleIssueResolve}
                          label={t("label.mark_resolved")}
                          checked={activeIssue.status === "2"}
                          disabled={activeIssue.status === "1"}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div width="50%" padding="0" overflowY="auto">
                <div as="div" padding="x-small">
                  <InlineList delimiter="pipe">
                    <InlineList.Item>
                      {windowContents === "preview" ? (
                        <Text weight="bold">{t("label.preview")}</Text>
                      ) : (
                        <Link
                          isWithinText={false}
                          onClick={() => handleWindowToggle("preview")}
                        >
                          {t("label.preview")}
                        </Link>
                      )}
                    </InlineList.Item>
                    <InlineList.Item>
                      {windowContents === "html" ? (
                        <Text weight="bold">{t("label.view_source")}</Text>
                      ) : (
                        <Link
                          isWithinText={false}
                          onClick={() => handleWindowToggle("html")}
                        >
                          {t("label.view_source")}
                        </Link>
                      )}
                    </InlineList.Item>
                  </InlineList>
                  <div
                    as="div"
                    shadow="resting"
                    padding="small"
                    margin="x-small 0 0 0"
                    height="200px"
                    overflowY="auto"
                  >
                    {windowContents === "preview" && (
                      <Preview activeIssue={activeIssue} settings={settings} />
                    )}
                    {windowContents === "html" && (
                      <CodeEditor
                        margin="x-small 0"
                        label={t("label.code_preview")}
                        language="html"
                        readOnly={true}
                        value={code}
                        options={{ lineNumbers: true }}
                      />
                    )}
                  </div>
                </div>
                <div as="div" padding="0 x-small">
                  {activeContentItem && (
                    <div as="div">
                      <Pill>{activeContentItem.contentType}</Pill>
                      <Link
                        onClick={handleOpenContent}
                        isWithinText={false}
                        margin="small"
                        renderIcon={<IconExternalLinkLine />}
                        iconPlacement="end"
                      >
                        {activeContentItem.title}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </Flex>
          </Modal.Body>
          <Modal.Footer>
            <div width="100%">
              <Flex
                as="div"
                justifyItems="space-between"
                shouldGrow
                shouldShrink
              >
                <div>
                  <InlineList delimiter="pipe">
                    <InlineList.Item>
                      {t("label.issue")} {activeIndex + 1} {t("label.of")}{" "}
                      {filteredRows.length}
                    </InlineList.Item>
                    {activeIssue.status && !activeIssue.pending && (
                      <InlineList.Item>
                        {activeIssue.status === "1" && (
                          <Pill color="success" margin="0 small">
                            <IconCheckMarkLine color="success" />
                            <div margin="0 x-small">{t("label.fixed")}</div>
                          </Pill>
                        )}
                        {activeIssue.status === "2" && (
                          <Pill color="info" margin="0 small">
                            <IconCheckMarkLine color="brand" />
                            <div margin="0 x-small">{t("label.resolved")}</div>
                          </Pill>
                        )}
                      </InlineList.Item>
                    )}
                  </InlineList>
                </div>
                <div>
                  <Button
                    margin="0 small"
                    interaction={!pending ? "enabled" : "disabled"}
                    onClick={handleCloseButton}
                  >
                    {t("label.close")}
                  </Button>
                  <Button
                    margin="0 0 0 x-small"
                    interaction={!pending ? "enabled" : "disabled"}
                    onClick={() => handleIssueChange(activeIndex - 1)}
                  >
                    {t("label.previous_issue")}
                  </Button>
                  <Button
                    margin="0 0 0 x-small"
                    interaction={!pending ? "enabled" : "disabled"}
                    onClick={() => handleIssueChange(activeIndex + 1)}
                  >
                    {t("label.next_issue")}
                  </Button>
                </div>
              </Flex>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default UfixitModal;
 */