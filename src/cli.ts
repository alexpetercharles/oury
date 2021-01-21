/* eslint-disable no-console */
import inquirer, { Answers } from 'inquirer';
// import clear from 'clear';
import Figlet from 'figlet';
import program from 'commander';

import questions from './models/questions';

const init = async () => {
  // eslint-disable-next-line global-require
  program.version(`oury ${require('../package').version}`)
    .usage('<command> [options]');

  program
    .command('create <app-name>')
    .description('A cli tool to scaffold netart projects!');

  program.parse(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
};

const intro = async () => {
  // clear();
  console.log(Figlet.textSync('oury', 'Rectangles'));
};

const prompt = async () => inquirer.prompt(questions).then((answers: Answers) => answers);

const cli = async () => {
  await intro();
  await init();
  return prompt();
};

export default cli;
