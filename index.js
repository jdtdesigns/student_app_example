const inquirer = require('inquirer');
require('console.table');

const turtles = [
  {
    type: 'box',
    color: 'green'
  },
  {
    type: 'snapping',
    color: 'brown'
  }
];

function showTurtles() {
  console.table(turtles);
  showMenu();
}

function showMenu() {
  inquirer.prompt([
    {
      name: 'option',
      message: 'Please make a selection.',
      type: 'list',
      choices: ['Show Turtles', 'Create Turtle', 'Remove Turtle', 'Exit']
    }
  ]).then(choices => {
    switch (choices.option) {
      case 'Show Turtles':
        showTurtles();
        break;
      case 'Exit':
        console.log('Thanks for using our turtle app. Have a great day!');
        process.exit();
    }
  })
}

showMenu();