const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const initVector = crypto.randomBytes(16);
const Securitykey = crypto.randomBytes(32)

exports.hash = function (password) {
  // deepcode ignore InsecureCipherNoIntegrity
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  let encryptedData = cipher.update(password, "utf8", "hex");
  encryptedData += cipher.final("hex");
  return encryptedData;
};

exports.verify = function (hashedPassword) {
    // deepcode ignore InsecureCipherNoIntegrity
    const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
    let decryptedData = decipher.update(hashedPassword, "hex", "utf8");
    decryptedData += decipher.final("utf8");
    return decryptedData;
}
