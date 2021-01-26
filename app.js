const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const promptUser = () =>
{    inquirer.prompt([
        {
            type: 'list',
            message: 'Employee Type?',
            name: 'type',
            choices: ['Engineer', 'Manager', 'Intern', 'Complete Team'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?',
        },
    ]).then((answers) => {
        console.log(answers)
        if (answer == 'Manager') {
            manager(answers)
        }else if (answer == 'Engineer') {
            engineer(answers)
        }else if (answer == 'Intern') {
            intern(answers)
        }else {
            render(employees)
        }
      })
} 
const  manager = (a) => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their Office Number?',
        },
    ]).then((answers) => {
     const newManager =   new Manager(a.name, a.id, a.email, answers.officeNumber)
     employees.push(newManager)
     promptUser()
    })

const engineer = () =>
    inquirer.prompt([
        {
            // type: 'input',
            // name: 'officeNumber',
            // message: 'What is their Office Number?',
        },
    ])

    const intern = () =>
    inquirer.prompt([
        {
            // type: 'input',
            // name: 'officeNumber',
            // message: 'What is their Office Number?',
        },
    ])

    const completeTeam = () =>
    inquirer.prompt([
        {
            // type: 'input',
            // name: 'officeNumber',
            // message: 'What is their Office Number?',
        },
    ])

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

const employees = []

promptUser()


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ``

// => fs.writeFile(outputPath, render(answers)))
//   .then(() => console.log('Successfully wrote to team.html and placed it in the output folder!'))
//   .catch((err) => console.error(err));
// employees.push(answers)