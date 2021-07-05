# PasswordGenerator
Password Generator built using Commander, Chalk, and Clipboardy
Remember to install Node before getting started


//index.js//

#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const log = console.log;
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Simple Password Generator");

program

  .option("-l, --length <number>", "length of passowrd", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")

  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get Generated Password

const generatedPassword = createPassword(length, numbers, symbols);

//Save To File
if(save){
    savePassword(generatedPassword)
}


//Copy To Clipboard

clipboardy.writeSync(generatedPassword);

//Output Generated Password

log(chalk.red("Generated Password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password Copied To Clipboard"));


//createPassword.js//
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


//savePassword.JS//

const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");
const { dirname } = require("path");

const savePassword = (password) => {
  fs.open(path.join(__dirname, "../", "password.txt"), "a", 666, (e, id) => {
    fs.write(id, password + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(chalk.green("Password Saved To Passwords.txt"));
      });
    });
  });
};

module.exports = savePassword;

