const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const initVector = crypto.randomBytes(16);
const Securitykey = crypto.randomBytes(32)

/**
 * 
 * @param {*} plainString => Plain String that needs to be hashed
 * @returns {*} => Hashed String
 */
exports.hash = function (plainString) {
  // deepcode ignore InsecureCipherNoIntegrity
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  let encryptedData = cipher.update(plainString, "utf8", "hex");
  encryptedData += cipher.final("hex");
  return encryptedData;
};

/**
 * 
 * @param {*} hashedString => Hashed String that needs to be decrypted
 * @returns {*} => Decrypted String
 */
exports.decrypt = function (hashedString) {
    // deepcode ignore InsecureCipherNoIntegrity
    const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
    let decryptedData = decipher.update(hashedString, "hex", "utf8");
    decryptedData += decipher.final("utf8");
    return decryptedData;
}

/**
 * 
 * @param {*} string 
 * @param {*} hashedString 
 * @returns {*} => Boolean ? True if the string is equal to the hashed string : False if not
 */
exports.verify = function (string, hashedString) {
    // deepcode ignore InsecureCipherNoIntegrity
    const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
    let decryptedData = decipher.update(hashedString, "hex", "utf8");
    decryptedData += decipher.final("utf8");
    return string === decryptedData;
}
