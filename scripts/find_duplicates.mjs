import {read_json} from '../utils/read_json.mjs';

(async () => {
  const rows = await read_json('./data/words.json');
  const words = rows.map(({word}) => word);

  const duplicates = words.filter((word, index) => words.indexOf(word) !== index);

  if (duplicates.length > 0) {
    console.log(`Found ${duplicates.length} duplicates.`);

    for (const word of duplicates) {
      console.log(`Duplication of word: ${word}`);
    }
  }
})();
