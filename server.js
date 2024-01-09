const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get("/*", (req, res) => {
    res.json(
      {
"topics": [
{
"title": "Zmiany na mapie politycznej",
"subtopics": [
{
"title": "Państwa",
"notes": [
{
"id": 1,
"content": "Obecnie na świecie jest około 160 państw"
},
{
"id": 2,
"content": "Aby można było uznać państwo potrzebne są 3 główne cechy: 1. Suwerenna władza 2. Wytyczone terytorium 3. Ludność, która jest świadoma swojej narodowości"
},
{
"id": 3,
"content": "Uznanie międzynarodowe jest ważnym aspektem w tworzeniu się nowego państwa"
},
{
"id": 4,
"content": "Lista największych kraji na świecie: 1.Rosja 2.Kanada 3.Stany Zjednoczone 4.Chiny 5.Brazylia"
},
{"id" : 5,
"content" : "Najmniejszy kraj na swiecie to Watykan"

}
]
},
{
"title": "Kolonializm",
"notes": [
{
"id": 5,
"content": "Zjawisko kolonializmu polegało na przejmowaniu kontroli nad słabiej rozwiniętym regionem i wykorzystywaniu go gospodarczo"
},
{
"id": 6,
"content": " O początkach kolonializmu możemy mówić od odkrycia Ameryki przez Krzysztofa Kolumba"
},
{
"id": 7,
"content": "kolonizacja - Zakładanie osad, eksploatacja zasobów naturalnych, Podbój przez kraje europejskie oraz kontrola polityczna."
},
{
"id" : 8,
"content" : "dekolonizacja - Odzyskiwanie przez kraje niepodległości, W Afryce- głównie w drugiej połowie XX wieku"
}
]
},
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