import {supabase_client} from '../supabase/client.mjs';

export const clear_database = async () => {
  await Promise.all([
    supabase_client.from('votes').delete().neq('not existing key', 0),
    supabase_client.from('words').delete().neq('not existing key', 0),
  ]);

  console.log('Database cleaned!');
};
