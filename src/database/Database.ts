import { createClient } from "@supabase/supabase-js";
import "./App.css";

const supabaseUrl = "https://mzfhtidbnnjqppllheex.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Zmh0aWRibm5qcXBwbGxoZWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2ODkyNzUsImV4cCI6MjAyNjI2NTI3NX0.cuxbUIY9Mg6R5vltIKJdAdUrJ9bB0XQINDn6paVqFdg";
const supabase = createClient(supabaseUrl, supabaseKey);

function Database() {
  async function get(table: string) {
    return await supabase.from(table).select();
  }

  async function insert(table: string, data: any) {
    // EXAMPLE: { foodname: name, calories: calories, insertedby: "Wade" }
    await supabase.from(table).insert(data);
  }
}

export default Database;
