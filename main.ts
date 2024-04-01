import inquirer from "inquirer";

console.log("\t Welcome to My ATM Project -- REHAN KHAN");

let initialAmount: number = 1000;
let pinPassword: number = 786;

let askPin = await inquirer.prompt({
  name: "pinCode",
  message: "Enter Your Pin",
  type: "number",
});

if (askPin.pinCode === pinPassword) {
  console.log("Your Pin is correct. Login Successfully!");
  let askUser = await inquirer.prompt({
    name: "userChoice",
    message: "Enter the specific function that you want to do!",
    type: "list",
    choices: ["Deposit", "WithDraw", "CheckAmount"],
  });
  if (askUser.userChoice === "Deposit") {
    let askDepositMoney = await inquirer.prompt({
      name: "userdeposit",
      message: " How much Money you want to deposit?",
      type: "number",
    });
    initialAmount += askDepositMoney.userdeposit;
    console.log("Your amount has been Deposit. Thanks for your response.");
    console.log(`Now, your current Account balance is ${initialAmount}.`);
  } else if (askUser.userChoice === "WithDraw") {
    let askWithDrawMoney = await inquirer.prompt({
      name: "userWithDraw",
      message: " How much Money you want to withdraw?",
      type: "number",
    });
    if (askWithDrawMoney.userWithDraw > initialAmount) {
      console.log(
        `Your account balance is not enough to provide you ${askWithDrawMoney.userWithDraw} amount of money. \n Your account balance is ${initialAmount}.`
      );
    } else {
      initialAmount -= askWithDrawMoney.userWithDraw;
      console.log("Your amount has been WITHDRAW. Thanks for your response.");
      console.log(`Now, your current Account balance is ${initialAmount}. `);
    }
  }
  else if ( askUser.userChoice === 'CheckAmount' ){
    console.log(`Your current account balance is ${initialAmount}.`)
  }
} else {
  console.log("Your pinCode is wrong . Please give the right PinCode.");
}
