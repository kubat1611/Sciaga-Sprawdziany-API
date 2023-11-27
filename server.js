const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get("/*", (req, res) => {
    res.json(
      {
"topics": [
{
"title": "Świat w XVII Wieku",
"subtopics": [
{
"title": "Polityka i Władza",
"notes": [
{
"id": 1,
"content": "XVII wiek to okres absolutyzmu, gdzie wielu monarchów dążyło do centralizacji władzy. Przykłady to Ludwik XIV we Francji i Karol I w Anglii."
},
{
"id": 2,
"content": "Wojna Trzydziestoletnia (1618-1648) była konfliktem o dominację religijną i polityczną w Europie Środkowej, mającym wpływ na układ sił w regionie."
},
{
"id": 3,
"content": "Pokój Westfalski (1648) zakończył wojnę trzydziestoletnią, ustanawiając zasadę suwerennego państwa narodowego."
},
{
"id": 4,
"content": "Wielka Rewolucja Francuska (1789) to wydarzenie poprzedzającego XVIII wieku, ale miało korzenie w napięciach społecznych i politycznych XVII wieku."
}
]
},
{
"title": "Odkrycia i Kolonializm",
"notes": [
{
"id": 5,
"content": "Okres ten to intensywny rozwój podróży morskich i odkryć geograficznych. Kapitan James Cook eksplorował Pacyfik, a Abel Tasman dotarł do Australii i Nowej Zelandii."
},
{
"id": 6,
"content": "Kolonializm był powszechny, z dominacją mocarstw europejskich nad obszarami w Azji, Afryce i Ameryce."
},
{
"id": 7,
"content": "East India Company odegrała kluczową rolę w handlu i kolonizacji brytyjskiej w Indiach."
}
]
},
{
"title": "Kultura i Nauka",
"notes": [
{
"id": 8,
"content": "Okres baroku to dominujący styl artystyczny, obejmujący sztukę, literaturę i architekturę."
},
{
"id": 9,
"content": "Rozwój nauki obejmował prace Galileusza, który wspierał heliocentryczny model świata, oraz Newtona, który sformułował prawa ruchu i grawitacji."
},
{
"id": 10,
"content": "Oświecenie zaczęło kształtować myślenie społeczne i filozoficzne pod koniec XVII wieku, kładąc nacisk na rozum, naukę i tolerancję."
}
]
},
{
"title": "Ekonomiczne i Społeczne Zmiany",
"notes": [
{
"id": 11,
"content": "Rozwój handlu globalnego przyczynił się do powstania pierwszych korporacji handlowych, takich jak Holenderska Kompania Zachodnioindyjska."
},
{
"id": 12,
"content": "Początki kapitalizmu: XVII wiek to czas, gdy kapitalizm zaczął kształtować nowoczesne formy gospodarki, opartej na zysku i wolnym rynku."
},
{
"id": 13,
"content": "Wzrost roli klas średnich, a równocześnie nasilenie nierówności społecznych."
}
]
},
{
"title": "Konflikty i Innowacje Wojskowe",
"notes": [
{
"id": 14,
"content": "Wprowadzenie muszkietów i artylerii zmieniło taktykę wojenną. Formacje pikiety straciły na znaczeniu na rzecz regularnej piechoty."
},
{
"id": 15,
"content": "Wojny angielsko-niderlandzkie były serią konfliktów o dominację morsko-handlową."
},
{
"id": 16,
"content": "Przełom w sztuce wojennej to także okres, gdy kawaleria zaczęła tracić na znaczeniu na rzecz bardziej zorganizowanych oddziałów piechoty."
}
]
}
]
}
]
}
  );
});



app.listen(5000, () => {
    console.log("Server started on port 5000");
});

export default app