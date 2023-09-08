import {supabase_client} from '../supabase/client.mjs';

(async () => {
  await Promise.all([
    supabase_client.from('votes').delete().neq('id', 0),
    supabase_client.from('words').delete().neq('id', 0),
  ]);

  console.log('Database cleaned!');
})();
