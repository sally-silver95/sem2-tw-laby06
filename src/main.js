const URL = "https://flrtxyteviumfhkdtrvx.supabase.co/rest/v1/article?select=*";
const KEY = "sb_publishable_FKoQFi6-aJGI3dlUWTyANg_sE-u3lNG";
fetch(URL, {
  headers: { apikey: KEY, Authorization: "Bearer " + KEY }
})
  .then(res => res.json())

fetch(URL, {
  headers: { apikey: KEY, Authorization: "Bearer " + KEY }
})
  .then(res => res.json())
  .then(artykuly => {
    const app = document.querySelector("#app");

    artykuly.forEach(artykul => {
      app.innerHTML += `
        <article>
          <h2>${artykul.title}</h2>
          <p>${artykul.subtitle}</p>
          <p>Autor: ${artykul.author}</p>
          <p>${artykul.content}</p>
        </article>
      `;
    });
  });

  const formularz = document.querySelector("#formularz");

formularz.addEventListener("submit", (event) => {
  event.preventDefault();

  const nowyArtykul = {
    title:    document.querySelector("#title").value,
    subtitle: document.querySelector("#subtitle").value,
    author:   document.querySelector("#author").value,
    content:  document.querySelector("#content").value,
  };

  fetch("https://flrtxyteviumfhkdtrvx.supabase.co/rest/v1/article", {
    method: "POST",
    headers: {
      apikey: KEY,
      Authorization: "Bearer " + KEY,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(nowyArtykul),
  })
    .then(res => res.json())
    .then(odpowiedz => {
      console.log("Dodano:", odpowiedz);
    });
});