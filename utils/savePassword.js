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
