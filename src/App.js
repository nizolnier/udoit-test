import AltText from "./Components/Forms/AltText";
import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  const obj = {
    id: 2,
    status: 0,
    contentItemId: 2,
    scanRuleId: "ImageHasAlt",
    type: "error",
    sourceHtml:
      '<img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg">',
    previewHtml:
      '<p><img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"></p>',
    metadata: "",
  };

  const objItem = {
    id: 1,
    title: "Nicole's UDOIT Course",
    contentType: "syllabus",
    lmsContentId: "371",
    updated: "2024-12-12T15:52:32+00:00",
    status: true,
    url: "https://canvas.dev.cdl.ucf.edu/courses/371/assignments/syllabus",
  };

  const handleActiveIssue = (e) => {
    console.log(e);
  };

  const handleIssueSave = (e) => {
    console.log(e);
  };

  const print = (string) => {
    return string;
  };

  const settings = {
    apiUrl: "http://127.0.0.1:8000/udoit3",
    clientToken: "b77671e3-44a2-41a0-9e66-d2c708b6163b",
    user: {
      id: 1,
      username: "https://canvas.instructure.com||1132",
      name: null,
      lmsUserId: "1132",
      roles: ["ROLE_USER"],
      lastLogin: "2024-12-12",
      created: "2024-11-07",
      hasApiKey: true,
    },
    course: {
      id: 1,
      title: "Nicole's UDOIT Course",
      lmsAccountId: "2",
      lmsCourseId: "371",
      lastUpdated: "2024-12-12T16:08:47+00:00",
      active: true,
      dirty: false,
    },
    institution: {
      id: 1,
      title: "UCF",
      lmsDomain: "canvas.dev.cdl.ucf.edu",
      lmsId: "canvas",
      created: {
        date: "2024-11-07 00:00:00.000000",
        timezone_type: 3,
        timezone: "UTC",
      },
      status: true,
      vanityUrl: "canvas.dev.cdl.ucf.edu",
    },
    roles: ["Administrator", "Instructor", "Student", "Learner", "User"],
    language: "en",
    labels: {
      lang: "English",
      "about.title": "Welcome to UDOIT",
      "about.description":
        "The Universal Design Online content Inspection Tool (UDOIT) will scan your course content, generate a list of accessibility issues and provide guidance on how to correct them.<br/><br/>UDOIT was created by the University of Central Florida, and is now a fully supported cloud solution from Cidi Labs.",
      "about.disclaimer":
        "This tool is meant to be used as a guide, not a certification. It only checks for common accessibility issues, and is not comprehensive; a clean report in UDOIT does not necessarily mean that your course is fully accessible. Likewise, the tool may indicate a possible accessibility issue where one does not exist.",
      "about.disclaimer_title": "Please Note:",
      "about.resources": "Other Resources:",
      "about.policies": "Third Party Policies",
      "about.skip_welcome": "Skip this welcome message in the future",
      "about.video_embed":
        "<iframe width='360' height='200' src='https://www.youtube.com/embed/gXA4vD7wuws' title='UDOIT overview video' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      "about.video_link":
        "<a href='https://youtu.be/gXA4vD7wuws' target='_blank' rel='noopener'>UDOIT Overview Video</a>",
      "about.user_guide_link":
        "<a href='https://cidilabs.instructure.com/courses/6621' target='_blank' rel='noopener'>UDOIT User Guide</a>",
      "about.youtube_terms":
        "<a href='https://www.youtube.com/t/terms' target='_blank' rel='noopener'>Youtube Terms of Service</a>",
      "about.google_privacy":
        "<a href='https://policies.google.com/privacy' target='_blank' rel='noopener'>Google Privacy Policy</a>",
      "content.plural.page": "Pages",
      "content.plural.assignment": "Assignments",
      "content.plural.announcement": "Announcements",
      "content.plural.discussion_topic": "Discussions",
      "content.plural.discussion_forum": "Discussion Forums",
      "content.plural.file": "HTML Files",
      "content.plural.quiz": "Quizzes",
      "content.plural.syllabus": "Syllabus",
      "content.plural.overview": "Overview",
      "content.plural.module": "Module Descriptions",
      "content.plural.quiz.instruction": "Quiz Instructions",
      "content.plural.quiz.description": "Quiz Descriptions",
      "content.plural.quiz.footer": "Quiz Footers",
      "content.plural.quiz.header": "Quiz Headers",
      "content.plural.survey": "Surveys",
      "content.plural.checklist": "Checklists",
      "content.plural.link": "Links",
      "content.plural.topic": "Topic Descriptions",
      "content.plural.dropbox": "Assignments",
      "content.plural.survey.description": "Survey Descriptions",
      "content.plural.survey.submission": "Survey Submissions",
      "content.plural.survey.footer": "Survey Footers",
      "label.plural.suggestion": "Suggestions",
      "label.plural.error": "Errors",
      "label.plural.issue": "Issues",
      "label.plural.resolution": "Resolutions",
      "content.page": "Page",
      "content.assignment": "Assignment",
      "content.announcement": "Announcement",
      "content.discussion_topic": "Discussion",
      "content.discussion_forum": "Discussion Forum",
      "content.file": "HTML File",
      "content.quiz": "Quiz",
      "content.syllabus": "Syllabus",
      "content.module_url": "Module URL",
      "content.overview": "Overview",
      "content.module": "Module",
      "content.quiz.instruction": "Quiz Instruction",
      "content.quiz.description": "Quiz Description",
      "content.quiz.footer": "Quiz Footer",
      "content.quiz.header": "Quiz Header",
      "content.survey": "Survey",
      "content.survey.description": "Survey Description",
      "content.survey.submission": "Survey Submission",
      "content.survey.footer": "Survey Footer",
      "content.checklist": "Checklist",
      "content.link": "Link",
      "content.topic": "Topic",
      "content.dropbox": "Assignment",
      "label.file": "File",
      "label.correct": "Correct",
      "label.incorrect": "Incorrect",
      "label.plural.file": "Files",
      "label.content": "Content",
      "label.summary": "Summary",
      "label.home": "Home",
      "label.ufixit": "UFIXIT",
      "label.review_files": "Review Files",
      "label.suggestion": "Suggestion",
      "label.error": "Error",
      "label.unscannable": "Unscannable Files",
      "label.plural.fixed": "Issues Fixed",
      "label.fixed": "Fixed",
      "label.review": "Review",
      "label.issue": "Issue",
      "label.status": "Status",
      "label.content_type": "Content Type",
      "label.content_item": "Content Item",
      "label.header.title": "Title",
      "label.header.type": "Type",
      "label.issue_type": "Issue Severity",
      "label.issue_status": "Issue Status",
      "label.issue_impact": "Issue Impact",
      "label.filter": "Filter",
      "label.plural.filter": "Filters",
      "label.close": "Close",
      "label.file_name": "File Name",
      "label.file_type": "File Type",
      "label.file_size": "File Size",
      "label.file_updated": "Last Updated",
      "label.mime.pdf": "PDF",
      "label.mime.doc": "MS Word",
      "label.mime.ppt": "MS PowerPoint",
      "label.mime.xls": "MS Excel",
      "label.review_issue": "Review Issue",
      "label.of": "of",
      "label.about": "About UDOIT",
      "label.reports": "Reports",
      "label.report_history": "History",
      "label.no_results_header": "No results found",
      "label.no_results_message":
        "Try changing the filters or searching with a different keyword",
      "label.report.total": "Total",
      "label.table_rows_select": "Rows per page",
      "label.version": "Version: ",
      "label.date": "Date",
      "label.content_fixed": "Content Fixed",
      "label.content_resolved": "Content Resolved",
      "button.start": "Get Started",
      "button.save_pdf": "Save PDF",
      "label.menu": "Additional menu items",
      "menu.main": "UDOIT menu",
      "menu.about": "About",
      "menu.settings": "Settings",
      "menu.reports": "Reports",
      "menu.admin": "Admin",
      "menu.download_pdf": "Download PDF",
      "menu.scan_course": "Rescan Course",
      "msg.no_permissions":
        "You do not have permission to access the specified course.",
      "msg.course_scanning": "Course scanning...",
      "msg.no_new_content": "Course scan complete. No new content found.",
      "msg.new_content": "Course scan complete. New content has been added.",
      "msg.sync.started": "Course scan started.",
      "msg.sync.failed": "Course scan failed. Course is missing.",
      "msg.sync.completed": "Course scan completed.",
      "msg.sync.course_inactive": "Course scan failed. Course is inactive.",
      "label.filter.active": "Active Issues",
      "label.filter.fixed": "Fixed Issues",
      "label.filter.resolved": "Resolved Issues",
      "label.filter.visual": "Visual Issues",
      "label.filter.auditory": "Auditory Issues",
      "label.filter.cognitive": "Cognitive Issues",
      "label.filter.motor": "Motor Issues",
      "label.hide_unpublished": "Hide Unpublished Content",
      "label.hide_reviewed": "Hide Reviewed",
      "label.hide_unpublished_files": "Hide Unpublished Files",
      "label.show_easy_issues": "Show Easiest Issues",
      "label.preview": "Preview",
      "label.context": "In Context",
      "label.source": "Source",
      "label.download": "Download",
      "label.view_source": "HTML",
      "label.open_in_lms": "View In LMS",
      "label.continue": "Continue",
      "label.content_loading_msg":
        "UDOIT is scanning the course content for accessibility issues. This scan happens automatically each time you use the tool. It can take multiple minutes depending on your course content. You will not be able to fix or resolve issues until the scan has completed.",
      "label.review_only":
        "This issue cannot be fixed within UDOIT. You can fix the issue in Canvas, or mark this as reviewed to hide this issue in the future.",
      "label.manually_resolved": "Manually Resolved",
      "label.manual_resolution": "Manual Resolution",
      "label.reviewed_description":
        "Mark a file as reviewed when it has been checked for accessibility issues and is considered complete.",
      "label.manually_reviewed": "Manually Reviewed",
      "label.manual_review": "Manual Review",
      "label.resolved_description":
        "Mark an issue as resolved when it cannot be properly fixed in UDOIT and is considered complete.",
      "label.files_reviewed": "Files Reviewed",
      "label.resolved": "Resolved",
      "label.active": "Active",
      "label.mark_resolved": "Mark as resolved",
      "label.mark_reviewed": "Mark as reviewed",
      "label.reviewed": "Reviewed",
      "label.previous_issue": "Previous Issue",
      "label.next_issue": "Next Issue",
      "label.previous_file": "Previous File",
      "label.next_file": "Next File",
      "label.upload": "Upload",
      "label.replace": "Replace File",
      "label.replace.desc": "Replace the current version of this file here.",
      "label.loading": "Loading",
      "label.loading_reports": "Loading report history",
      "label.loading_users": "Loading users",
      "label.btn.udoit_details": "What does UDOIT look for?",
      "label.btn.hide_example": "Hide example",
      "label.btn.show_example": "Show example",
      "placeholder.keyword": "Keyword Search",
      "label.more_info": "More Info",
      "label.less_info": "Less Info",
      "label.most_common": "Most Common",
      "label.hide_color_picker": "Hide Color Picker",
      "label.show_color_picker": "Show Color Picker",
      "label.hex_color": "Hex color value",
      "label.file.drag_drop": "Drag a file here, or",
      "label.file.browse_files": "Choose a file to upload",
      "label.file.upload": "Upload a File",
      "label.file.new_file": "New File",
      "label.file.submit": "Submit",
      "label.file.needs_review": "Needs review",
      "label.file.reviewed": "Reviewed",
      "label.admin.courses": "Courses",
      "label.admin.reports": "Reports",
      "label.admin.users": "Users",
      "label.admin.settings": "Settings",
      "label.admin.logo": "Admin",
      "label.admin.account": "Account",
      "label.admin.subaccounts": "Sub-Accounts",
      "label.admin.term": "Term",
      "label.admin.submit": "Switch",
      "label.admin.select_form":
        "Select an account and term to filter your view",
      "label.admin.last_updated": "Last Scanned",
      "label.admin.scan": "Scan",
      "label.admin.course_name": "Course Name",
      "label.admin.account_name": "Account Name",
      "label.admin.no_subaccounts": "No sub-accounts",
      "label.admin.id": "LMS ID",
      "label.admin.name": "Name",
      "label.admin.created": "Created",
      "label.admin.last_login": "Last Login",
      "label.admin.include_subaccounts": "Include courses from sub-accounts",
      "label.admin.no_results": "No results found for this account and term.",
      "label.admin.force_reauthorize": "Force Reauthorize",
      "label.admin.deauthorized": "Deauthorized",
      "label.admin.report.by_issue": "Issues By Type",
      "table.sort_by": "Sort by",
      "table.prev_page": "Previous page",
      "table.next_page": "Next page",
      "content_page.issues.table.caption": "Table of issues found",
      "form.alt.text": "New Alt Text",
      "form.alt.char_count": "Current character count",
      "form.alt.mark_decorative": "Mark image as decorative",
      "form.alt.msg.text_empty": "Alt text cannot be empty",
      "form.alt.msg.text_too_long": "Alt text is too long",
      "form.alt.msg.text_has_file_extension":
        "Alt text cannot contain file extensions",
      "form.alt.msg.text_matches_filename": "Alt text cannot match file name",
      "form.alt.of": "of",
      "form.alt.chars": "characters",
      "form.anchor.link_text": "New Link Text",
      "form.anchor.delete_link": "Delete this link completely instead",
      "form.anchor.msg.text_descriptive": "This text is not descriptive",
      "form.anchor.msg.text_empty": "Link text cannot be empty",
      "form.contrast.bolden_text": "Make this text bold",
      "form.contrast.darken": "Darken",
      "form.contrast.italicize_text": "Make this text italicized",
      "form.contrast.large_text_tags": ["H1", "H2", "H3", "H4", "H5", "H6"],
      "form.contrast.lighten": "Lighten",
      "form.contrast.replace_background": "Background color",
      "form.contrast.replace_text": "Text color",
      "form.contrast_ratio": "Contrast Ratio",
      "form.contrast.invalid": "Invalid Ratio",
      "form.contrast.valid": "Valid Ratio",
      "form.heading.assistive_text": "Use arrow keys to navigate options.",
      "form.heading.heading_level": "Select heading level",
      "form.heading.heading_level_options": ["H2", "H3", "H4", "H5", "H6"],
      "form.heading.msg.text_empty": "Heading text cannot be empty",
      "form.heading.msg.select_heading": "Heading level cannot be empty",
      "form.heading.remove_styling": "Remove styling",
      "form.heading.remove_header": "Delete heading instead",
      "form.heading.text": "New Heading Text",
      "form.heading.use_text": "Use text editor",
      "form.heading.use_code": "Use HTML editor",
      "form.scan": "Scan Video For Caption Updates",
      "form.submit": "Save",
      "form.processing": "Processing",
      "form.msg.success_saved": "Successfully saved.",
      "form.msg.manually_fixed": "Issue successfully fixed manually.",
      "form.msg.success_resolved": "Issue marked resolved.",
      "form.msg.success_unresolved": "Issue marked unresolved.",
      "form.msg.success_reviewed": "File marked reviewed.",
      "form.msg.success_unreviewed": "File marked unreviewed.",
      "form.msg.success_replaced": "File replaced.",
      "form.msg.not_fixed": "Issue has not been fixed.",
      "form.table.col": "Column Header",
      "form.table.row": "Row Header",
      "form.table.both": "Both",
      "form.table.selection_description":
        "Select direction for table header(s)",
      "form.table.selection_description_scope": "Select scope for table header",
      "form.error.fails_tests": "Submission fails tests.",
      "form.error.same_html": "These changes have already been submitted",
      "form.summary.heading": "Ways to Get Started",
      "form.summary.description": "",
      "form.summary.show": "Show:",
      "form.summary.option.easy": "Easiest to fix",
      "form.summary.option.errors_only": "Errors only",
      "form.summary.option.active": "All open issues",
      "form.summary.option.by_issue": "By issue type",
      "form.summary.option.by_content": "By content type",
      "form.summary.option.by_impact": "By impact type",
      "form.link.new_link": "New Link",
      "form.link.msg.link_empty": "Link href cannot be empty",
      "rule.label.AnchorLinksToMultiMediaRequireTranscript":
        "Links To MultiMedia Require Transcripts",
      "rule.label.AnchorLinksToSoundFilesNeedTranscripts":
        "Links To Sound Files Need Transcripts",
      "rule.label.AnchorMustContainText": "Links Should Contain Text",
      "rule.label.AnchorSuspiciousLinkText": "Link Has Nondescript Text",
      "rule.label.BaseFontIsNotUsed": "Base Font Tag Should Not Be Used",
      "rule.label.BlinkIsNotUsed": "Blink Tag Should Not Be Used",
      "rule.label.BrokenLink": "Broken Link Detected",
      "rule.label.ContentTooLong":
        "Content Length Should Not Exceed 3000 Words",
      "rule.label.CssTextHasContrast":
        "Insufficient Text Color Contrast With the Background",
      "rule.label.CssTextStyleEmphasize":
        "Avoid Using Color Alone for Emphasis",
      "rule.label.DocumentReadingDirection": "Document Reading Direction",
      "rule.label.EmbedTagDetected":
        "Embedded Content May Be Inaccessible on Mobile Devices",
      "rule.label.FontIsNotUsed": "Font Tag Should Not Be Used",
      "rule.label.HeadersHaveText": "Headings Should Contain Text",
      "rule.label.HeadingsInOrder": "Heading Levels Should Not Be Skipped",
      "rule.label.IframeNotHandled": "External Content May Be Inaccessible",
      "rule.label.ImageAltIsDifferent":
        "Alternative Text Should Not Be the Image Filename",
      "rule.label.ImageAltIsTooLong":
        "Alternative Text Is More Than the Maximum Allowed Characters",
      "rule.label.ImageAltNotEmptyInAnchor":
        "Alt Text For Images Within Links Should Not Be Empty",
      "rule.label.ImageAltNotPlaceholder":
        "Images Should Not Have a Placeholder as Alternative Text",
      "rule.label.ImageHasAlt": 'Image Elements Should Have an "alt" Attribute',
      "rule.label.ImageHasAltDecorative":
        "Decorative Images Should Have Empty Alternative Text",
      "rule.label.ImageHasLongDescription": "Image Description Is Too Long",
      "rule.label.InputImageNotDecorative":
        'Input Images Should Have an "alt" Attribute',
      "rule.label.MarqueeIsNotUsed": "Marquee Tag Should Not Be Used",
      "rule.label.NoHeadings": "Headings Should Be Used in Content",
      "rule.label.ObjectMustContainText":
        "Multimedia Objects Should Have Text Equivalents",
      "rule.label.ObjectTagDetected": "Object Tag Detected",
      "rule.label.ParagraphNotUsedAsHeader":
        "Avoid Using Styles for Document Structure",
      "rule.label.PreShouldNotBeUsedForTabularValues":
        '"Pre" Elements Should Not Be Used for Tabular Data',
      "rule.label.RedirectedLink": "Redirected Link Detected",
      "rule.label.TableDataShouldHaveTableHeader": "No Table Headers Found",
      "rule.label.TableHeaderShouldHaveScope":
        "No Row or Column Scope Declarations Found in Table Headers",
      "rule.label.TableNotEmpty": "Table Without Content Detected",
      "rule.label.VideoCaptionsMatchCourseLanguage":
        "Closed Captions Do Not Match Course Language",
      "rule.label.VideoEmbedCheck": "Closed Captions Cannot Be Checked",
      "rule.label.VideoProvidesCaptions": "Video Tags Must have Caption Track",
      "rule.label.VideosEmbeddedOrLinkedNeedCaptions":
        "No Closed Captions Found",
      "rule.label.VideosHaveAutoGeneratedCaptions":
        "Closed Captions Were Auto-Generated",
      "rule.desc.AnchorLinksToMultiMediaRequireTranscript":
        "<p>Multimedia objects should be accompanied by a link to a transcript of the content.</p>",
      "rule.desc.AnchorLinksToSoundFilesNeedTranscripts":
        "<p>Links to a sound file should be followed by a link to a transcript of the file.</p>",
      "rule.desc.AnchorMustContainText":
        "<p>Because many users of <a href='https://en.wikipedia.org/wiki/Screen_reader' target='_blank'>screen readers</a> use links to navigate the page, providing links with no text (or with images that have empty 'alt' attributes and no other readable text) hinders these users.</p>",
      "rule.desc.AnchorSuspiciousLinkText":
        "<p>Links should be descriptive of the content they're linking to, such as 'Class Schedule' rather than 'schedule.html' or 'click here'.</p>",
      "rule.desc.BaseFontIsNotUsed":
        "<p>The <code>basefont</code> tag is deprecated and should not be used. Investigate using stylesheets instead.</p>",
      "rule.desc.BlinkIsNotUsed":
        "<p>The <code>blink</code> tag should not be used. Ever.</p>",
      "rule.desc.BrokenLink":
        "<p>Links should be checked to ensure that they still function. This could be temporary, so please verify and repair the link if necessary.</p>",
      "rule.desc.ContentTooLong":
        "<p>For content longer than 3000 words, consider splitting it up into multiple documents. This makes it easier for students to process and retain the information.</p>",
      "rule.desc.CssTextHasContrast":
        " <p>Text color should be easily viewable and should not be the only indicator of meaning or function. Color balance should have at least a 4.5:1 ratio for small text and 3:1 ratio for large text. Warning: using UDOIT to fix one section of text may invalidate the contrast in nested sections of text that are not the same color.</p>",
      "rule.desc.CssTextStyleEmphasize":
        "<p>When emphasizing text, you may use color with sufficient contrast as long as you also apply some other form of emphasis, such as bold or italics. This ensures that screen reader users are aware of the text's importance.</p>",
      "rule.desc.DocumentReadingDirection":
        "<p>Changes in text direction in inline content should be indicated using any HTML element (for example, <code>span</code>) with a 'dir' attribute indicating left-to-right or right-to-left. For example, a Hebrew phrase within an english paragraph should have it's own text direction indicated.</p>",
      "rule.desc.EmbedTagDetected":
        "Embedded content may not be properly viewable on mobile devices. Consider mobile users when relying on objects for multimedia content.",
      "rule.desc.FontIsNotUsed":
        "<p>The <code>font</code> tag is deprecated and should not be used. Investigate using stylesheets instead.</p>",
      "rule.desc.HeadersHaveText":
        "<p>Sighted and <a href='https://en.wikipedia.org/wiki/Screen_reader' target='_blank'>screen reader</a> users depend on headings to organize the content on the page. Headings should not be empty and should represent an accurate outline of the content</p>",
      "rule.desc.HeadingsInOrder":
        "Nest headings by their rank (or level). The most important heading has the rank 1 (h1) in HTML files or rank 2 (h2) in Canvas pages, the least important heading has the rank 6 (h6). Headings with an equal or higher rank start a new section, headings with a lower rank start new subsections that are part of the higher ranked section. Skipping heading ranks can be confusing and should be avoided.",
      "rule.desc.IframeNotHandled":
        "<p>Embedded content is not evaluated automatically by UDOIT. Please manually evaluate this content for accessibility issues and compatibility with mobile devices.</p>",
      "rule.desc.ImageAltIsDifferent":
        "<p>Alternative Text (Alt Text) is an alternative (non-visual) way to describe the meaning of an image. Please provide a brief description of the image for a <a href='http://en.wikipedia.org/wiki/Screen_reader'>screen reader</a> user. Note: It should not be the image file name and should be 125 characters or less. </p><p>Learn more at WebAIM.org: <a href='https://webaim.org/techniques/alttext/' target='_blank'>Alt Text Accessibility</a></p>",
      "rule.desc.ImageAltIsTooLong":
        "<p>Alternative Text (Alt Text) is an alternative (non-visual) way to describe the meaning of an image. Please provide a brief description of the image for a <a href='http://en.wikipedia.org/wiki/Screen_reader'>screen reader</a> user. Note: It should not be the image file name and should be 125 characters or less.</p><p>Learn more at WebAIM.org: <a href='https://webaim.org/techniques/alttext/' target='_blank'>Alt Text Accessibility</a></p>",
      "rule.desc.ImageAltNotEmptyInAnchor":
        "<p>Alternative Text (Alt Text) is an alternative (non-visual) way to describe the meaning of an image. Please provide a brief description of the image for a <a href='http://en.wikipedia.org/wiki/Screen_reader'>screen reader</a> user. Note: It should not be the image file name and should be 125 characters or less.</p><p>Learn more at WebAIM.org: <a href='https://webaim.org/techniques/alttext/' target='_blank'>Alt Text Accessibility</a></p>",
      "rule.desc.ImageAltNotPlaceholder":
        "<p>Any image that is not used decoratively or which is purely for layout purposes cannot have an 'alt' attribute that consists solely of placeholders. Placeholders include: <em>nbsp</em>, <em>&amp;nbsp;</em>, <em>spacer</em>, <em>image</em>, <em>img</em>, and <em>photo</em>.</p><p>Learn more at WebAIM.org: <a href='https://webaim.org/techniques/alttext/' target='_blank'>Alt Text Accessibility</a></p>",
      "rule.desc.ImageHasAlt":
        "<p>Alternative Text (Alt Text) is an alternative (non-visual) way to describe the meaning of an image. Please provide a brief description of the image for a <a href='http://en.wikipedia.org/wiki/Screen_reader'>screen reader</a> user. Note: It should not be the image file name and should be 125 characters or less.</p><p>Learn more at WebAIM.org: <a href='https://webaim.org/techniques/alttext/' target='_blank'>Alt Text Accessibility</a></p>",
      "rule.desc.ImageHasAltDecorative":
        "<p>This image was marked as decorative in the Rich Content Editor, but the ALT attribute contains text. Please remove the alternative text or the decorative marking.</p><p>Learn more at WebAIM.org: <a href='https://webaim.org/techniques/alttext/' target='_blank'>Alt Text Accessibility</a></p>",
      "rule.desc.ImageHasLongDescription":
        "<p>Any image that has an 'alt' attribute that does not fully convey the meaning of the image should have a 'longdesc' attribute.</p>",
      "rule.desc.InputImageNotDecorative":
        "<p>Every form image button which has text within the image (say, a picture of the word 'Search' in a special font), should have the same text within the 'alt' attribute.</p>",
      "rule.desc.MarqueeIsNotUsed":
        "<p>The <code>marquee</code> element is difficult for users to read and is not a standard HTML element. Try to find another way to convey the importance of this text.</p>",
      "rule.desc.NoHeadings":
        "<p>If appropriate, add headings to the page to organize the content for sighted and <a href='https://en.wikipedia.org/wiki/Screen_reader' target='_blank'>screen reader</a> users. The headings should represent an accurate outline of the content</p>",
      "rule.desc.ObjectMustContainText":
        "<p>Multimedia objects should be accompanied by a link to a transcript of the content.</p>",
      "rule.desc.ObjectTagDetected":
        "<p>Multimedia embedded using the 'Object' tag may require the user to install a plugin for their web browser. This can create support and access issues for some users. Additionally, users on mobile devices may not be able to view the multimedia content at all. Consider using an alternative format that the user's browser can display natively.</p>",
      "rule.desc.ParagraphNotUsedAsHeader":
        "<p>Bold and Italics are used to emphasize text, whereas headings are used to define the structure of the document. Headings like <code>h1-h6</code> are extremely useful for non-sighted users to navigate the structure of the page, and formatting a paragraph to just be big or bold, while it might visually look like a heading, does not make it one. UDOIT has flagged this as a potential usage of style for document structure, please ensure that this is not the case when you review the content in the HTML editor.</p>",
      "rule.desc.PreShouldNotBeUsedForTabularValues":
        "<p>If a <code>pre</code> element is used for tabular data, change the data to use a well-formed table.</p>",
      "rule.desc.RedirectedLink":
        "<p>When the address of a web page changes, the content owner may set up a redirect so that the link is not broken. However, that redirect could go away in the future, so it's best to update the link now. The real url has been populated into the form below.</p>",
      "rule.desc.TableDataShouldHaveTableHeader":
        "<p>Table headers provide a description of the table structure for sighted and <a href='https://en.wikipedia.org/wiki/Screen_reader' target='_blank'>screen reader</a> users.</p>",
      "rule.desc.TableHeaderShouldHaveScope":
        "<p>Scope declarations in headers organize and define table data by row/column for sighted and <a href='https://en.wikipedia.org/wiki/Screen_reader' target='_blank'>screen reader</a> users.</p>",
      "rule.desc.TableNotEmpty": "<p>Tables should have content.</p>",
      "rule.desc.VideoCaptionsMatchCourseLanguage":
        "<p>While this video has captions, there are no captions available for your course language. While not imperative to fix, if you'd like to you have three options:</p><ul><li>Contact the creator of the video and request captions in your course language be added.</li><li>Create captions yourself using a service like Amara (http://amara.org/).</li><li>Find a different video that has closed captioning for your course language.</li></ul>",
      "rule.desc.VideoEmbedCheck":
        "<p>Videos used on online courses are required to have closed captioning. Unfortunately, some video services do not provide an API for checking captions and will need to be manually verified.</p>",
      "rule.desc.VideoProvidesCaptions":
        "<p>All video elements must have a caption using the track element with caption attribute. The caption should convey all meaningful information in the video element; this includes, but is not limited to, dialogue, musical cues, and sound effects. Good captions not only include dialogue, but also identify who is speaking and include non-speech information conveyed through sound, including meaningful sound effects.</p>",
      "rule.desc.VideosEmbeddedOrLinkedNeedCaptions":
        "<p>Captions should be included in the video to provide dialogue to users who are hearing impaired.  (Please note that videos that have been removed, deleted, or are Unlisted will also cause this error, and will need to be manually verified.)</p>",
      "rule.desc.VideosHaveAutoGeneratedCaptions":
        "<p>Captions that are machine-generated by a service like YouTube are rarely if ever fully accurate and should not be relied upon for educational use.</p>",
      "rule.example.AnchorLinksToSoundFilesNeedTranscripts":
        "<h5>Wrong</h5><code>&lt;a href='interview.mp3'&gt;Listen to the interview&lt;/a&gt;</code><h5>Right</h5><code>&lt;a href='interview.mp3'&gt;Listen to the interview&lt;/a&gt; &lt;a href='transcript.html'&gt;(transcript)&lt;/a&gt;</code>",
      "rule.example.BlinkIsNotUsed":
        "<h5>Wrong</h5><p><code>&lt;blink&gt;Please read me!&lt;/blink&gt;</code></p><h5>Right</h5><p><code>&lt;strong&gt;Please read me!&lt;/strong&gt;</code></p>",
      "rule.example.ImageAltNotPlaceholder":
        "<h5>Wrong</h5><p><code>&lt;img src='dog.jpg' alt='image'&gt;</code></p><h5>Right</h5><p><code>&lt;img src='dog.jpg' alt='A photograph of a dog'&gt;</code></p>",
      "rule.example.ImageHasLongDescription":
        "<h5>Wrong</h5><p><code>&lt;img src='complexImage.png' alt='A complex image that cannot be described succinctly.'&gt;</code></p><h5>Right</h5><p><code>&lt;img src='complexImage.png' alt='A complex image that cannot be described succinctly.' longdesc='longer_description.html'&gt;</code></p>",
      "rule.example.InputImageNotDecorative":
        "<h5>Wrong</h5><p><code>&lt;input type='image' src='search.png' alt='A pretty picture'/&gt;</code></p><h5>Right</h5><p><code>&lt;input type='image' src='search.png' alt='Search this site'/&gt;</code></p>",
      "rule.example.MarqueeIsNotUsed":
        "<h5>Wrong</h5><p><code>&lt;marquee&gt;This is really hard to read&lt;/marquee&gt;</code></p><h5>Right</h5><p><code>&lt;strong&gt;This is much easier to read&lt;/strong&gt;</code></p>",
      "file.desc.pdf":
        "<h3>PDF Accessibility</h3><h4>PDF Tags</h4><p>PDF tags provide a hidden, structured representation of the PDF content that is presented to screen readers. They exist for accessibility purposes only and have no visible effect on the PDF file. There is more to an accessible PDF file than tags, but an untagged PDF would not be considered <em>accessible</em>.</p><p>Learn how to create tagged PDFs at WebAIM.org:<br/> <a href='https://webaim.org/techniques/acrobat/' target='_blank'>PDF Accessibility</a></p>",
      "file.desc.doc":
        "<h3>Creating Accessible Word Documents</h3><p>Microsoft Word is the most widely used word processor on the market, and the .docx format is the de facto format for text documents. It is also often used to create PDF and HTML files for websites. There are several things you can do to make your Word Documents more accessible for people with disabilities.</p><p>Learn more about accessible Word documents at WebAIM.org:<br/> <a href='https://webaim.org/techniques/word/' target='_blank'>Microsoft Word Accessibility</a></p>",
      "file.desc.ppt":
        "<h3>Creating Accessible Presentations</h3><p>Microsoft PowerPoint is one of the most popular tools for creating slide show presentations. It is often used to organize thoughts for a meeting or lesson, to present key points in a live presentation, and even to create handouts.</p><p>Learn more about creating accessible PowerPoint presentations at WebAIM.org:<br/> <a href='https://webaim.org/techniques/powerpoint/' target='_blank'>Microsoft PowerPoint Accessibility</a></p>",
      "file.desc.xls":
        "<h3>Creating Accessible Excel Spreadsheets</h3><p>Microsoft Excel is a powerful tool for collecting, calculating, and presenting tabular data.  General content accessibility guidelines should be followed, but there are some specific techniques that can make Excel spreadsheets more accessible.</p><p>Learn more about creating accessible spreadsheets at WebAIM.org:<br/> <a href='https://webaim.org/techniques/excel/' target='_blank'>Microsoft Excel Accessibility</a></p>",
      "rule.label.SearchKeyWord": "Keyword found",
      "rule.desc.SearchKeyWord": "The keyword has been found",
    },
    excludedRuleIds: "\n    BrokenLink,\n    RedirectedLink\n",
    contentTypes: [
      "announcement",
      "assignment",
      "discussion_topic",
      "file",
      "page",
      "quiz",
      "syllabus",
    ],
    backgroundColor: "#ffffff",
    textColor: "#2D3B45",
    suggestionRuleIds:
      "\n    AnchorLinksToMultiMediaRequireTranscript,\n    AnchorLinksToSoundFilesNeedTranscripts,\n    AnchorSuspiciousLinkText,\n    ContentTooLong,\n    IframeNotHandled,\n    InputImageNotDecorative,\n    NoHeadings,\n    ObjectTagDetected,\n    ParagraphNotUsedAsHeader,\n    PreShouldNotBeUsedForTabularValues,\n    RedirectedLink,\n    EmbedTagDetected,\n    IframeNotHandled,\n",
    easyRuleIds:
      "\n    AnchorMustContainText,\n    AnchorSuspiciousLinkText,\n    CssTextHasContrast,\n    CssTextStyleEmphasize,\n    HeadersHaveText,\n    ImageAltIsDifferent,\n    ImageAltIsTooLong,\n    ImageHasAlt,\n    ImageHasAltDecorative,\n    ParagraphNotUsedAsHeader,\n    ImageAltNotPlaceholder,\n",
    visualRuleIds:
      "\n    AnchorMustContainText,\n    AnchorSuspiciousLinkText,\n    BaseFontIsNotUsed,\n    CssTextHasContrast,\n    CssTextStyleEmphasize,\n    FontIsNotUsed,\n    HeadersHaveText,\n    HeadingsInOrder,\n    ImageAltIsDifferent,\n    ImageAltIsTooLong,\n    ImageAltNotEmptyInAnchor,\n    ImageAltNotPlaceholder,\n    ImageHasAlt,\n    ImageHasAltDecorative,\n    ImageHasLongDescription,\n    InputImageNotDecorative,\n    NoHeadings,\n    ObjectTagDetected,\n    ParagraphNotUsedAsHeader,\n    PreShouldNotBeUsedForTabularValues,\n    TableDataShouldHaveTableHeader,\n    TableHeaderShouldHaveScope,\n",
    auditoryRuleIds:
      "\n    AnchorLinksToMultiMediaRequireTranscript,\n    AnchorLinksToSoundFilesNeedTranscripts,\n    ObjectMustContainText,\n    ObjectTagDetected,\n    VideoCaptionsMatchCourseLanguage,\n    VideoEmbedCheck,\n    VideoProvidesCaptions,\n    VideosEmbeddedOrLinkedNeedCaptions,\n    VideosEmbeddedOrLinkedNeedCaptions,\n    VideosHaveAutoGeneratedCaptions,\n",
    cognitiveRuleIds:
      "\n    BaseFontIsNotUsed,\n    BlinkIsNotUsed,\n    ContentTooLong,\n    DocumentReadingDirection,\n    FontIsNotUsed,\n    HeadingsInOrder,\n    MarqueeIsNotUsed,\n    NoHeadings,\n    ObjectTagDetected,\n    ParagraphNotUsedAsHeader,\n    TableDataShouldHaveTableHeader,\n    TableHeaderShouldHaveScope,\n",
    motorRuleIds: "\n    ObjectTagDetected,\n",
    versionNumber: "3.3.1",
  };

  return (
    <ChakraProvider>
      <AltText
        activeIssue={obj}
        t={print}
        handleActiveIssue={handleActiveIssue}
        handleIssueSave={handleIssueSave}
      />
    </ChakraProvider>
  );
}