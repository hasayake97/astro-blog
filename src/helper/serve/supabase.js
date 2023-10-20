import { createClient } from '@supabase/supabase-js';

const responseHandler = (response) => {
  const { error, status, data } = response;

  if (status === 200 && !error) {
    return data;
  }

  return response;
};

class Supabase {
  static client = createClient(import.meta.env.DB_ADDRESS, import.meta.env.DB_KEY);

  static getPosts(fields) {
    return Supabase.client.from('posts').select(fields).then(responseHandler);
  }

  static getPost(slug) {
    return Supabase.client.from('posts').select('*').eq('slug', slug).then(responseHandler);
  }
}

export default Supabase;
