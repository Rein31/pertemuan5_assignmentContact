// main
const main = async() =>{
  const apps = require('./contact.js');

  const name = await apps.questions('What is your name? ');
  const mobile = await apps.questions('your mobile number? ');
  // validate mobile phone number
  if(apps.validateMobile(mobile)){
    console.log("phone number not valid!");
    apps.rl.close();
    return false;
  }

  const email = await apps.questions('your email? ');
  // validate email
  if (apps.validateEmail(email)) {
    console.log("email not valid");
    apps.rl.close();
    return false;
  }

  const contact = {name,mobile,email};

  const dirPath = './data';
  apps.dirPathValidator(dirPath);

  const dataPath = './data/contacts.json';
  apps.dataPathValidator(dataPath);

  apps.saveFileContact(contact);
  
  console.log(`Thank you ${name}, your email is ${email}, and your phone number is ${mobile}`);

  apps.rl.close()
}

main();