const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

const writeFile = util.promisify(fs.writeFile);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter your project name:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description:',
    },
    // Add more prompts as needed
  ])
  .then((answers) => {
    const readmeContent = `
    # ${answers.projectName}

    ${answers.description}
    `;

    return writeFile('README.md', readmeContent);
  })
  .then(() => {
    console.log('README.md generated successfully!');
  })
  .catch((error) => {
    console.error(error);
  });
