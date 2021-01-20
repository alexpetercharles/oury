type File = {
  // name of file
  name: string,
  // template path relative from src
  template: string,
  // final location relative from scaffolded project root
  location: string,
}

const files: Array<File> = [
  {
    name: 'package.json',
    template: './net-artwork/package.json',
    location: 'package.json',
  },
];

export { File, files };
