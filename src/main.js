const URL = "https://flrtxyteviumfhkdtrvx.supabase.co/rest/v1/article?select=*";
const KEY = "sb_publishable_FKoQFi6-aJGI3dlUWTyANg_sE-u3lNG";
fetch(URL, {
  headers: { apikey: KEY, Authorization: "Bearer " + KEY }
})
  .then(res => res.json())
  .then(dane => console.log("Przyszło z Supabase:", dane));