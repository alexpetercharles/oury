import { Question, QuestionCollection } from 'inquirer';

const questions: QuestionCollection<Question> = [
  {
    name: 'title',
    type: 'string',
    message: 'What is the Project called?',
  },
  {
    name: 'artist',
    type: 'string',
    message: 'What is the Artist called?',
  },
];

export default questions;
