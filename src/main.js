import dayjs from "dayjs";
import "./style.css";

const URL = "https://flrtxyteviumfhkdtrvx.supabase.co/rest/v1/article?select=*";
const KEY = "sb_publishable_FKoQFi6-aJGI3dlUWTyANg_sE-u3lNG";

function pokazArtykuly() {
  const wybor = document.querySelector("#sortowanie").value;
  const adres = URL + "&order=" + wybor;

  document.querySelector("#app").innerHTML = "";

  fetch(adres, {
    headers: { apikey: KEY, Authorization: "Bearer " + KEY }
  })
    .then(res => res.json())
    .then(artykuly => {
      const app = document.querySelector("#app");
      artykuly.forEach(artykul => {
        app.innerHTML += `
          <article class="bg-white border border-gray-200 rounded-xl shadow-md p-6 mb-5">
            <h2 class="text-2xl font-bold">${artykul.title}</h2>
            <p class="text-gray-500 mb-2">${artykul.subtitle}</p>
            <p class="text-sm text-gray-400">Autor: ${artykul.author}</p>
            <p class="text-sm text-gray-400 mb-3">Data: ${dayjs(artykul.created_at).format("DD-MM-YYYY")}</p>
            <p>${artykul.content}</p>
          </article>
        `;
      });
    });
}

pokazArtykuly();
document.querySelector("#sortowanie").addEventListener("change", pokazArtykuly);

  const formularz = document.querySelector("#formularz");

formularz.addEventListener("submit", (event) => {
  event.preventDefault();

  const nowyArtykul = {
    title: document.querySelector("#title").value,
    subtitle: document.querySelector("#subtitle").value,
    author: document.querySelector("#author").value,
    content: document.querySelector("#content").value,
    created_at: document.querySelector("#created_at").value,
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
      formularz.reset();
      pokazArtykuly();
    });
});