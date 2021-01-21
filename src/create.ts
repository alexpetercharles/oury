import { Answers } from 'inquirer';
// import { File, files } from './models/files';

/*
const buildStructure = async (options: Answers) => {
};

const writeFile = async (file: File, options: Answers) => {
};
*/

const create = async (name: string, answers: Answers) => {
  // await buildStructure(options);
  // files.forEach((file) => writeFile(file, options));
  console.log(name);
  console.log(answers);
};

export default create;
