import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ixouecrcevbgboikpxni.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4b3VlY3JjZXZiZ2JvaWtweG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExODc3NDEsImV4cCI6MjAwNjc2Mzc0MX0.KpWS1fbVsl9m-RP4VZhrfX9DxlhU_RiCjxM1DLhR_40";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
