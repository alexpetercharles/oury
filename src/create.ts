import { Answers } from 'inquirer';
import glob from 'glob';

type Options = {
  name: string,
  author: string,
  description: string,
  ts: boolean,
  sass: boolean,
  p5: boolean,
  three: boolean,
}

let options: Options;

const getTemplate = async () => glob('./template/**/*', (err, files) => console.log(files));

const create = async (name: string, answers: Answers) => {
  options = {
    name,
    author: answers.artist,
    description: answers.description,
    ts: answers.typescript,
    sass: answers.sass,
    p5: (answers.libraries as Array<string>).includes('p5'),
    three: (answers.libraries as Array<string>).includes('three'),
  };
  console.log(options);
  await getTemplate();
};

export default create;
