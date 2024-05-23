import inquirer from "inquirer";

let myBalance = 1000;
let pinCode = 1234;

let pinAnswer = await inquirer.prompt([{
    name : "pin",
    type: "number",
    message: "Enter your pin code:"
}]);

if(pinAnswer.pin === pinCode){
    console.log("correct pin code!!!");

    let operationAns = await inquirer.prompt([{
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }]);

    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt([{
            name: "amount",
            message: "Enter you amount",
            type: "number"
        }]);

        myBalance -= amountAns.amount;

        console.log("your remaining balance is = " + myBalance);

    }
    else if(operationAns.operation === "check balance"){
        console.log("your balance is = " + myBalance);
        
    }

}
else{
    console.log("incorrect Pin code");
    
}
