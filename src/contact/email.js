function Email() {
  const recipientEmail = "tomengland1995@gmail.com";
  const emailSubject = "Opportunities";

  const mailLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    emailSubject
  )}`;

  return mailLink;
}
export default Email;
