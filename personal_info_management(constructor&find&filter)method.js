const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 1;
const info = [];

function person(name, age) {
  this.fullname = name;
  this.age = age;
}

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function create() {
  const inputname = await ask('Enter a name: ');
  const inputage = await ask('Enter an age: ');
  const person1 = new person(inputname, inputage);
  info.push(person1);
  console.log('Successfully Created\n');
  await start();
}

function showall() {
  count = 1; // reset count each time
  info.forEach(stats => {
    console.log(`${count}. Name: ${stats.fullname}, Age: ${stats.age}`);
    count += 1;
  });
  menu();
}

async function showbyname() {
  const name = await ask('Input Name: ');
  const check = info.filter(p => p.fullname === name);

  if (check.length > 0) {
    check.forEach(p => {
      console.log(`Name: ${p.fullname}, Age: ${p.age}`);
    });
  } else {
    console.log('Not found.');
  }

  menu();
}

async function start() {
  console.log('\nEnter Choice');
  console.log('1. Create\n2. Show All\n3. Find by Name');
  const choose = await ask('Choice: ');

  if (choose == '1') {
    await create();
  } else if (choose == '2') {
    showall();
  } else if (choose == '3') {
    await showbyname();
  } else {
    console.log('Not a valid choice');
    menu();
  }
}

async function menu() {
  const goBack = await ask('\nEnter 1 to go to menu or any other key to exit: ');
  if (goBack == '1') {
    await start();
  } else {
    console.log('Exiting...');
    rl.close();
  }
}

start();
