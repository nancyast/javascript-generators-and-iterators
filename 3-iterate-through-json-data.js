const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// readline.question('what would you like to log today?', async (answer) => {
//   const { data } = await axios.get('http://localhost:3001/food');
//   const it = data[Symbol.iterator]();
//   let position = it.next();
//   while (!position.done) {
//     const foodName = position.value.name;
//     if (foodName === answer) {
//       console.log(`${answer} has ${position.value.calories} calories`);
//     }
//     position = it.next();
//   }
//   readline.close();
// });

// npx json-server --watch ./db.json --port 3001

const prompt = (question) => {
  return new Promise((resolve, reject) => {
    readline.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const ask = async () => {
  const name = await prompt("what's your name?");
  const old = await prompt('how old are you?');
  const job = await prompt('what do you do?');
  console.log(`${name} is ${old} years old and do ${job} job`);
  readline.close();
};

const askSpecial = async (questionLists) => {
  const answers = [];
  const it = questionLists[Symbol.iterator]();
  let position = it.next();
  while (!position.done) {
    const answer = await prompt(position.value);
    answers.push(answer);
    position = it.next();
  }
  console.log(answers);
  readline.close();
};

askSpecial(["what's your name?", 'how old are you?', 'what do you do?']);
