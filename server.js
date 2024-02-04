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
            {
              "id": 5,
              "content": "Najmniejszy kraj na świecie to Watykan"
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
              "id": 8,
              "content": "dekolonizacja - Odzyskiwanie przez kraje niepodległości, W Afryce- głównie w drugiej połowie XX wieku"
            }
          ]
        }
      ]
    },
    {
      "title": "Chemia roztworów wodnych",
      "subtopics": [
        {
          "title": "Roztwory wodne",
          "notes": [
            {
              "id": 1,
              "content": "Roztwory wodne są powszechnym zjawiskiem w chemii, gdzie woda działa jako rozpuszczalnik dla różnych substancji."
            },
            {
              "id": 2,
              "content": "Właściwości roztworów wodnych, takie jak rozpuszczalność i przewodnictwo elektryczne, są istotne dla zrozumienia reakcji chemicznych."
            },
            {
              "id": 3,
              "content": "Woda jest polarnym rozpuszczalnikiem, co wpływa na zdolność rozpuszczania zarówno substancji polarnych, jak i niepolarnych."
            }
          ]
        },
        {
          "title": "Rodzaje roztworów",
          "notes": [
            {
              "id": 4,
              "content": "Roztwory mogą być nasycone, nienasycone lub przesycone, w zależności od ilości rozpuszczonego ciała stałego w danej chwili."
            },
            {
              "id": 5,
              "content": "Roztwory mogą być jednorodne lub niejednorodne ze względu na równomierność dystrybucji składników."
            },
            {
              "id": 6,
              "content": "Roztwory mogą być elektrolitami (przewodzącymi prąd elektryczny) lub nieelektrolitami, w zależności od zdolności do rozpadu na jony."
            }
          ]
        },
        {
          "title": "Stężenie roztworów",
          "notes": [
            {
              "id": 7,
              "content": "Stężenie roztworu to ilość rozpuszczonej substancji w danej ilości rozpuszczalnika, mierzone jako masa lub molowość."
            },
            {
              "id": 8,
              "content": "Procentowa masa mówi nam, ile gramów substancji znajduje się w 100 gramach roztworu."
            },
            {
              "id": 9,
              "content": "Molalność to stosunek liczby moli rozpuszczonej substancji do masy rozpuszczalnika w kilogramach."
            }
          ]
        }
      ]
    }
  ]
});
        });



app.listen(5000, () => {
    console.log("Server started on port 5000");
});

