import { Answers } from 'inquirer';
import glob from 'glob';
import fse from 'fs-extra';
import ejs from 'ejs';

const template = './template/net-artwork';

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

const writeFile = async (file: string) => {
  fse.outputFile(`./${options.name}/${file}`,
    ejs.render((await fse.readFile(`${template}/${file}`)).toString(), options));
};

const scaffold = async () => {
  glob('**/*', { cwd: template }, (err, matches) => {
    matches.forEach((file) => writeFile(file));
  });
};

const create = async (name: string, answers: Answers) => {
  // eslint-disable-next-line no-unused-vars
  options = {
    name,
    author: answers.artist,
    description: answers.description,
    ts: answers.typescript,
    sass: answers.sass,
    p5: (answers.libraries as Array<string>).includes('p5'),
    three: (answers.libraries as Array<string>).includes('three'),
  };
  scaffold();
};

export default create;
