import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vhjklaavhbhrwqzuigip.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoamtsYWF2aGJocndxenVpZ2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3OTg5NzksImV4cCI6MTk5ODM3NDk3OX0.822Z5eH1cUE-qLa7EVweeR6lnT3dyEANeNO7mN-9mDw'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase