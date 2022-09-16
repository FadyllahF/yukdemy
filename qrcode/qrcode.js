const QRCode = require("qrcode");
const { createCanvas, loadImage } = require("canvas");
async function createQR(dataForQRcode, width, cwidth) {
  const canvas = createCanvas(width, width);
  QRCode.toCanvas(canvas, dataForQRcode, {
    errorCorrectionLevel: "high",
    margin: 1,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
    width: 300,
  });

  const ctx = canvas.getContext("2d");
  const img = await loadImage(
    "https://ik.imagekit.io/kafax3vfm/logo-yukdemy_LfafRcL8O.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663262520631"
  );
  const center = (width - cwidth) / 3;
  ctx.drawImage(img, center, center, cwidth, cwidth);
  return canvas.toDataURL("image/png");
}

module.exports = {
  createQR,
};
