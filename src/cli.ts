import inquirer, { Answers } from 'inquirer';

import questions from './questions';

const cli = async () => inquirer.prompt(questions).then((answers: Answers) => answers);

export default cli;
