import inquirer, { Answers } from 'inquirer';
import Figlet from 'figlet';
import program from 'commander';
import clear from 'clear';

import create from './create';

import questions from './models/questions';

const prompt = async () => inquirer.prompt(questions).then((a: Answers) => a);

const cli = async () => {
  clear();
  // eslint-disable-next-line global-require
  program.version(`oury ${require('../package').version}`)
    .description(`${Figlet.textSync('oury', 'Bulbhead')}\n\n
                  A cli tool to scaffold netart projects!`)
    .usage('<command> [options]');

  program
    .command('create <app-name>')
    .description('create a new project')
    .action(async (name) => {
      // user feedback
      console.log('thanks for using oury! ❤️');
      console.log('creating project:');
      // project name in ascii art
      console.log(Figlet.textSync(`${name}`, 'Small Slant'));
      // call create function after prompt finished
      create(name, await prompt());
    });

  program.parse(process.argv);
};

export default cli;
