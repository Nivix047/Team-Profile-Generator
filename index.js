const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");

// Need 3 functions: createManagerHTML, createEngineer, createIntern.
// Employee is an abstract class in CS
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/manager");

// CSS is predetermined, CSS should be included in folder

const teamMembers = [];
//for validation
const validateID = [];

// Container function
const app = () => {
  // This is called a function signature // methods belong to objects
  const createManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the manager's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's employee id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email address?",
        },
        {
          type: "input",
          name: "office",
          message: "What is the engineer's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.office
        );
        teamMembers.push(manager);
        validateID.push(answers.id);
        createTeam();
      })
      .catch((error) => {
        // .message is built in the error object
        console.log(error.message);
      });
  };
  const createTeam = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "team",
          message: "What type of team members would you like to add?",
          choices: ["Engineer", "Intern", "No more team members to add"],
        },
      ])
      .then((answer) => {
        if (answer.team === "Engineer") {
          createEngineer();
        } else if (answer.team === "Intern") {
          createIntern();
        } else {
          writeToFileHTML();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const createEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's employee id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email address?",
        },
        {
          type: "input",
          name: "github",
          message: "What is the engineer's github?",
        },
      ])
      .then();
  };
  const createIntern = () => {};
  const writeToFileHTML = () => {};

  createManager();
};

// Create a function to write HTML
const writeToFileHTML = () => {};

// Create a function to initialize app
init();

// make directory
// validation
// filter // map
// database
