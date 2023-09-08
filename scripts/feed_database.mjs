import {read_json} from '../utils/read_json.mjs';
import {insert_new_word} from '../utils/insert_new_word.mjs';

(async () => {
  const rows = await read_json('./data/words.json');

  for (const {word, word_definition} of rows) {
    await insert_new_word(word, word_definition);
  }

  console.log(`INFO: ${rows.length} words inserted`);
})();
