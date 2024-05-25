import inquirer from "inquirer";
import add from "./add.js";
import div from "./div.js";
import sub from "./sub.js";
import mult from "./mult.js";
import chalk from "chalk";
async function main() {
    const answer = await inquirer.prompt([{
            type: "input",
            name: "n1",
            message: "Enter First Number"
        },
        {
            type: "input",
            name: "n2",
            message: "Enter Second Number"
        },
        {
            type: "list",
            name: "operation",
            message: "choose one operator",
            choices: [
                { name: 'add', value: add, },
                { name: 'divide', value: div, },
                { name: 'multiply', value: mult, },
                { name: 'subtract', value: sub, }
            ]
        }
    ]);
    console.log(chalk.bgBlue.red.bold(`The answer is ${answer.operation(answer.n1, answer.n2)}`));
}
main();
