import 'dotenv/config';

import {createClient} from '@supabase/supabase-js';

export const supabase_client = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE,
  {
    auth: {
      persistSession: false,
    },
  },
);
