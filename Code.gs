function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Tuesday House - ระบบเช็กข้อมูล Affiliate')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
