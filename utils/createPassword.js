const alpha = "abcdefghijklmnopqrstuvwxyzAMCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const createPassword = (length = 8, hasNumber = true, hasSymbols = true) => {
  let chars = alpha;
  hasNumber ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";

  return generatePassword (length, chars);
};

const generatePassword = (length, chars) => {
  let passowrd = "";
  for (let i = 0; i < length; i++) {
    passowrd += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return passowrd;
};

module.exports = createPassword;
