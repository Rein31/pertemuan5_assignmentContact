// import file system
const fs = require('fs');
const { resolve } = require('path');

// import readLine
const readline = require("readline");

// import validator
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// question name
const questions = (ask) => {
  return new Promise((resolve,reject) =>{
    rl.question(ask, (answer) => {
      resolve(answer);
    })
  })
}

// validate dir folder path
function dirPathValidator(dirPath){
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}

// validate dir data path
function dataPathValidator(dataPath){
    if (!fs.existsSync(dataPath)) {
        fs.writeFileSync(dataPath,'[]','utf-8');
    }
}

// function for validate email
function validateEmail(email){
  if (!validator.isEmail(email)) {
    return true;
  }
}

// function for validate mobile phone number
function validateMobile(mobile){
  if (!validator.isMobilePhone(mobile, "id-ID")) {
    return true;
  }
}

// save file contact to JSON
const saveFileContact = (contact) =>{
  const file = fs.readFileSync('data/contacts.json','utf8');
  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));

}

module.exports = {questions,dirPathValidator,dataPathValidator,saveFileContact,rl,validateEmail,validateMobile};