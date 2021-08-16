const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

const teamArray = [];

function askForTeamMembers() {
    inquirer
    .prompt([
        {
            type: 'confirm',
            name: 'addMemberConfirm',
            message: 'Add more team members?'

        }
    ]).then(memberConfirm => {
        const confirmation = memberConfirm.addMemberConfirm
        if(confirmation) {
            createTeamMembers()
        } else {
            //populateWebpage()
            console.log(teamArray)
        }
    })
}

function createTeamMembers() {
    inquirer
    .prompt([
        {
            type: 'checkbox',
            name: 'teamMemberType',
            message: 'which type of employee would you like to add?',
            choices: ["Engineer", "Intern"]
        }
    ]).then(choice => {
        const newMember = choice.teamMemberType;
        if (newMember == "Engineer") {
            createEngineer()
        } else {
            createIntern()
        }
    })
}

//Engineer function
//name, id, email, github
function createEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'what is the engineer name?',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Enter the engineer name.');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the engineer ID number?',
            validate: input => {
                if (isNaN(input)) {
                    console.log('IDs must be numeric');
                    return false
                } else {
                  return true;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer email?',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Enter an engineer email address');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineer github?',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Enter an engineer github');
                  return false;
                }
              }
        }
    ]).then(engineerData => {
        const engineer = new Engineer(engineerData.engineerName, engineerData.engineerID, engineerData.engineerEmail, engineerData.engineerGithub);
        teamArray.push(engineer);
        askForTeamMembers();
    })
}


//Intern function
//name, id, email, github
function createIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'what is the intern name?',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Enter the intern name.');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the intern ID number?',
            validate: input => {
                if (isNaN(input)) {
                    console.log('IDs must be numeric');
                    return false
                } else {
                  return true;
                }
              }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern email?',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Enter then intern emaill address');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern school?',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Enter an intern school');
                  return false;
                }
              }
        }
    ]).then(internData => {
        const intern = new Intern(internData.internName, internData.internID, internData.internEmail, internData.internSchool);
        teamArray.push(intern);
        askForTeamMembers();
    })
}


function writeTeamData() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'ManagerName',
            message: 'Who is the manager of this team?',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Enter the manager name.');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'ManagerID',
            message: 'What is the manager ID number?',
            validate: input => {
                if (isNaN(input)) {
                    console.log('IDs must be numeric');
                    return false
                } else {
                  return true;
                }
              }
        },
        {
            type: 'input',
            name: 'ManagerEmail',
            message: 'What is the manager email?',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Enter an email address');
                  return false;
                }
              }
        }
    ]).then(createdManager => {
        const manager = new Manager(createdManager.ManagerName, createdManager.ManagerID, createdManager.ManagerEmail);
        teamArray.push(manager);
        askForTeamMembers()
    })
}

writeTeamData();

// module.exports