import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://edccunyuwpvpyzaqmxkn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkY2N1bnl1d3B2cHl6YXFteGtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4MTYwNTYsImV4cCI6MjA0MTM5MjA1Nn0.wRlTGFARsLY9J3hVHnaIgWItNJZyR8tTOc3Dduk-O9Y');


export async function sendMessage(email: string, message: string) {
  try {
    await supabase
      .from('messages')
      .insert({ email, message });
  } catch (error) {
    // console.log(error);
  }
}
