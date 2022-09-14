const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");

// Employee is an abstract class in CS
// CSS is predetermined, CSS should be included in folder

const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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
          message: "What is your name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please return at least one character";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your id number?",
          validate: (answer) => {
            const id = answer.match(/^[1-9]\d*$/);
            if (id) {
              if (validateID.includes(answer)) {
                return "This ID is already taken";
              } else {
                return true;
              }
            }
            return "Please enter a number greater than zero";
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is your email address?",
          validate: (answer) => {
            const email = answer.match(/\S+@\S+\.\S+/);
            if (email) {
              return true;
            }
            return "Please enter valid email address";
          },
        },
        {
          type: "input",
          name: "office",
          message: "What is your office number?",
          validate: (answer) => {
            const office = answer.match(/^[1-9]\d*$/);
            if (office) {
              return true;
            }
            return "Please enter a valid office number";
          },
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
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please return at least one character";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's employee id?",
          validate: (answer) => {
            const id = answer.match(/^[1-9]\d*$/);
            if (id) {
              if (validateID.includes(answer)) {
                return "This ID is already taken";
              } else {
                return true;
              }
            }
            return "Please enter a number greater than zero";
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email address?",
          validate: (answer) => {
            const email = answer.match(/\S+@\S+\.\S+/);
            if (email) {
              return true;
            }
            return "Please enter valid email address";
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is the engineer's github?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please return at least one character";
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        teamMembers.push(engineer);
        validateID.push(answers.id);
        createTeam();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const createIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the intern's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please return at least one character";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the intern's employee id?",
          validate: (answer) => {
            const id = answer.match(/^[1-9]\d*$/);
            if (id) {
              if (validateID.includes(answer)) {
                return "This ID is already taken";
              } else {
                return true;
              }
            }
            return "Please enter a number greater than zero";
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the intern's email address?",
          validate: (answer) => {
            const email = answer.match(/\S+@\S+\.\S+/);
            if (email) {
              return true;
            }
            return "Please enter valid email address";
          },
        },
        {
          type: "input",
          name: "school",
          message: "What school does the intern attend to?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please return at least one character";
          },
        },
      ])
      .then((answers) => {
        // instantiating a new intern object using the intern class and its constructor
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        teamMembers.push(intern);
        validateID.push(answers.id);
        createTeam();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // Create a function to write HTML
  const writeToFileHTML = () => {
    console.log("----teamMembers----");
    console.log(teamMembers);
    fs.writeFileSync(
      path.join(process.cwd(), "/dist/team.html"),
      generateHTML(teamMembers)
    );
    console.log("Saved: your file is in the dist folder");
  };
  createManager();
};

// Create a function to initialize app
app();
