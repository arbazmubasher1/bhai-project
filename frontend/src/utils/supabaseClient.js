import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mgorzraswljyhwgpojwd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nb3J6cmFzd2xqeWh3Z3BvandkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwOTAyNjAsImV4cCI6MjA2NzY2NjI2MH0.ao50KdGq512NWncCzEC_aHGC5yqtGXv8d8E4mHwZYXU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
