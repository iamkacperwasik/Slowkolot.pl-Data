import {supabase_client} from '../supabase/client.mjs';

export const insert_new_word = async (word, word_definition) => {
  await supabase_client.from('words').insert({
    word,
    word_definition,
  });

  console.log(`INSERT: ${word} - ${word_definition}`);
};
