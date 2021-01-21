import { Question, QuestionCollection } from 'inquirer';

const questions: QuestionCollection<Question> = [
  {
    name: 'artist',
    type: 'string',
    message: 'Your Name?',
    default: 'super cool netartist nickname',
  },
  {
    name: 'description',
    type: 'string',
    message: 'Describe your project:',
    default: 'mega nice netart',
  },
  {
    name: 'typescript',
    type: 'confirm',
    message: 'Are you using TypeScript in this Project?',
    default: false,
  },
  {
    name: 'sass',
    type: 'confirm',
    message: 'Are you using Sass/SCSS in this Project?',
    default: false,
  },
  {
    name: 'libraries',
    type: 'checkbox',
    message: 'select visual libraries: (library missing? ➡️ github ❤️)',
    choices: [
      'p5',
      'three',
    ],
  },
];

export default questions;
