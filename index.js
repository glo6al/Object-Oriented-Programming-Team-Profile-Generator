const Inquirer = require('inquirer');
const Jest = require('jest');
const Path = require('path');
const Fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('intern');
const Manager = require('manager');
// const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateEmployeePage = require('./src/template');

//array to hold employee input
const employeeArray = [];

function renderEmployees () {
    //run inquierer prompt
    function createEmployees () {
      Inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
        //
      }]).then(function (userInput) {
        switch(userInput.addEmployeePrompt) {
          case "Manager":
            createManager();
            break;
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
             createIntern();
            break;
  
          default:
            htmlBuilder();
        }
      })
    }


function createManager() {
    Inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID number?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
      },
  
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      employeeArray.push(manager);
      createEmployees();
    });
  
  }
  
  //function to push employee objects to create manager function
  function createEngineer() {
      Inquirer.prompt([
        
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?"
        },
  
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's employee ID number?" 
        },
  
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?"
        },
  
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?"
        }
  
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        employeeArray.push(engineer);
        createEmployees();
      });
  
    }
  
    function createIntern() {
      Inquirer.prompt([
        
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?"
        },
  
        {
          type: "input",
          name: "internId",
          message: "What is the intern's employee ID number?" 
        },
  
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?"
        },
  
        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?"
        }
  
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        employeeArray.push(intern);
        createEmployees();
      });
  
    }

    function htmlBuilder () {
        console.log("Team created!")
    
        Fs.writeFileSync(outputPath, generateEmployeePage(employeeArray), "UTF-8")
    
    }
    
    createEmployees();
    
};
    renderEmployees();