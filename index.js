const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const initVector = crypto.randomBytes(16);

exports.hash = function (password, securityKey) {
  // deepcode ignore InsecureCipherNoIntegrity
  const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);
  let encryptedData = cipher.update(message, "utf8", "hex");
  encryptedData += cipher.final("hex");
  return encryptedData;
};

exports.verify = function (hashedPassword, securityKey) {
    // deepcode ignore InsecureCipherNoIntegrity
    const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);
    let decryptedData = decipher.update(hashedPassword, "hex", "utf8");
    decryptedData += decipher.final("utf8");
    return decryptedData;
}
