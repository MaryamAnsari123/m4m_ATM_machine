#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; //Doller
let myPin = 4220;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code",
        type: "number"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fastcash", "check balance"]
        }
    ]);
    //WITHDRAW
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your withdraw amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("insufficent Balance!");
        }
    }
    // FAST CASH
    else if (operationAns.operation === "fastcash") {
        let selectamountAns = await inquirer.prompt([
            {
                name: "fastamount",
                message: "select your withdraw amount",
                type: "list",
                choices: [10000, 5000, 2000, 1000]
            }
        ]);
        myBalance -= selectamountAns.fastamount;
        console.log(`your remaining amout is: ${myBalance}`);
        // CHECK BALANCE
    }
    else if (operationAns.operation === "check balance")
        console.log(`your balance is: ${myBalance}`);
}
else {
    console.log("incorrect pin code");
}
