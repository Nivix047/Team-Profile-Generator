const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");

// Need 3 functions: createManagerHTML, createEngineer, createIntern.
// Employee is an abstract class in CS
const generateHTML = require("./src/generateHTML");

// CSS is predetermined, CSS should be included

// Container function
const app = () => {
  // This is called a function signature // methods belong to objects
  const createManager = () => {};
  const createEngineer = () => {};
  const createIntern = () => {};
  createManager();
};

// Create a function to write HTML
function writeToFileHTML() {}

// Create a function to initialize app
function init() {
  console.log("test");
}

init();
