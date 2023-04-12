const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');

function showStudents() {
  const sql = `
  SELECT 
      students.name AS student_name,
      course_type
    FROM students
    JOIN courses ON students.course_id = courses.id
  `;
  db.query(sql, (err, data) => {
    if (err) return console.log(err);

    console.table(data);
    showMenu();
  });
}

function showMenu() {
  inquirer.prompt([
    {
      name: 'option',
      message: 'Please make a selection.',
      type: 'list',
      choices: ['Show Students', 'Add Student', 'Show Courses', 'Exit']
    }
  ]).then(choices => {
    switch (choices.option) {
      case 'Show Students':
        showStudents();
        break;
      case 'Exit':
        console.log('Thanks for using our turtle app. Have a great day!');
        process.exit();
    }
  })
}

showMenu();