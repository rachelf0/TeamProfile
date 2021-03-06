const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/html");
const validator = require("email-validator");

// Set up Async functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

// function for application to run
async function main() {
    try {
        await prompt()

        for(let i = 0; i < teamArray.length; i++) {
            teamString = teamString + html.generateCard(teamArray[i]);
        }

        let finalHtml = html.generateHTML(teamString)

        console.clear();
        console.log("--------------------------------");
        console.log("generating index.html file...");
        console.log("--------------------------------");

        writeFileAsync("./dist/index.html", finalHtml);

        console.clear();
        console.log("--------------------------------");
        console.log("generating index.html file...");
        console.log("--------------------------------");

    } catch (err) {
        return console.log(err);
    }
}

// Inquirer prompts to get user generated data
async function prompt() {
    let responseDone = "";

    do {
        try {
            console.log("--------------------------------");
            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the employee's name?: ",
                    validate: function validateName(name){
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "enter the employee's ID: ",
                    validate: function validateName(name){
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter the employee's email address: ",
                    //Validate that it is an email using email-validator
                    validate: function validateEmail(name){
                        return validator.validate(name);
                    }
                },
                {
                    type: "list",
                    name: "role",
                    message: "What is the employee's role:",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
            ]);

            let response2 = ""

                if (response.role === "Engineer") {
                    response2 = await inquirer.prompt([{
                        type: "input",
                        name: "x",
                        message: "What is the employee's GitHub username?:",
                        validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);
                    // Team array add
                    const intern = new Intern(response.name, response.id, response.email, response2.x);
                    teamArray.push(intern);

                }   else if (response.role === "Manager") {
                        response2 = await inquirer.prompt([{
                            type: "input",
                            name: "x",
                            message: "What is the employee's office number?:",
                            validate: function validateName(name){
                                return name !== '';
                            },
                        }, ]);
                        // Team array add
                        const manager = new Manager(response.name, response.id, response.email, response2.x);
                        teamArray.push(manager);
                }
        } catch (err) {
            return console.log(err);
        }

        responseDone = await inquirer.prompt([{
            type: "list",
            name: "finish",
            messag: "Do you want to continue? ",
            choices: [
                "Yes",
                "No"
            ]
        }, ]);
    } while (responseDone.finish === "No");
}

// Run app
main();