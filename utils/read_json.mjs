import {readFile} from 'node:fs/promises';

export const read_json = async (path) => {
  const data = await readFile(path, 'utf-8');

  return JSON.parse(data);
};
