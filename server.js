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
              "content": "Obecnie na świecie jest około 160 państw."
            },
            {
              "id": 2,
              "content": "Aby można było uznać państwo, potrzebne są 3 główne cechy: 1. Suwerenna władza 2. Wytyczone terytorium 3. Ludność, która jest świadoma swojej narodowości."
            },
            {
              "id": 3,
              "content": "Uznanie międzynarodowe jest ważnym aspektem w tworzeniu się nowego państwa."
            },
            {
              "id": 4,
              "content": "Lista największych kraji na świecie: 1. Rosja 2. Kanada 3. Stany Zjednoczone 4. Chiny 5. Brazylia."
            },
            {
              "id": 5,
              "content": "Najmniejszy kraj na świecie to Watykan."
            },
            {
              "id": 6,
              "content": "W XXI wieku obserwujemy dynamiczne zmiany granic państw, zarówno w wyniku procesów politycznych, jak i naturalnych."
            },
            {
              "id": 7,
              "content": "Globalizacja wpływa na relacje międzynarodowe, prowadząc do współpracy oraz konfliktów."
            }
          ]
        },
        {
          "title": "Kolonializm",
          "notes": [
            {
              "id": 8,
              "content": "Zjawisko kolonializmu polegało na przejmowaniu kontroli nad słabiej rozwiniętym regionem i wykorzystywaniu go gospodarczo."
            },
            {
              "id": 9,
              "content": "O początkach kolonializmu możemy mówić od odkrycia Ameryki przez Krzysztofa Kolumba."
            },
            {
              "id": 10,
              "content": "Kolonizacja to zakładanie osad, eksploatacja zasobów naturalnych, podbój przez kraje europejskie oraz kontrola polityczna."
            },
            {
              "id": 11,
              "content": "Dekolonizacja to proces odzyskiwania przez kraje niepodległości, szczególnie widoczny w Afryce w drugiej połowie XX wieku."
            },
            {
              "id": 12,
              "content": "Dziedzictwo kolonializmu ma wpływ na współczesne stosunki międzynarodowe oraz rozwój ekonomiczny niektórych regionów."
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
            },
            {
              "id": 4,
              "content": "Roztwory wodne są szeroko stosowane w życiu codziennym, m.in. jako środki transportu substancji odżywczych w organizmach żywych."
            },
            {
              "id": 5,
              "content": "Woda posiada unikalne właściwości, takie jak wysokie ciepło właściwe i zdolność do tworzenia mostków wodorowych."
            }
          ]
        },
        {
          "title": "Rodzaje roztworów",
          "notes": [
            {
              "id": 6,
              "content": "Roztwory mogą być nasycone, nienasycone lub przesycone, w zależności od ilości rozpuszczonego ciała stałego w danej chwili."
            },
            {
              "id": 7,
              "content": "Roztwory mogą być jednorodne lub niejednorodne ze względu na równomierność dystrybucji składników."
            },
            {
              "id": 8,
              "content": "Roztwory mogą być elektrolitami (przewodzącymi prąd elektryczny) lub nieelektrolitami, w zależności od zdolności do rozpadu na jony."
            },
            {
              "id": 9,
              "content": "W chemii organicznej istnieje wiele rozpuszczalników organicznych, które mają różne właściwości w porównaniu do wody."
            }
          ]
        },
        {
          "title": "Stężenie roztworów",
          "notes": [
            {
              "id": 10,
              "content": "Stężenie roztworu to ilość rozpuszczonej substancji w danej ilości rozpuszczalnika, mierzone jako masa lub molowość."
            },
            {
              "id": 11,
              "content": "Procentowa masa mówi nam, ile gramów substancji znajduje się w 100 gramach roztworu."
            },
            {
              "id": 12,
              "content": "Molalność to stosunek liczby moli rozpuszczonej substancji do masy rozpuszczalnika w kilogramach."
            },
            {
              "id": 13,
              "content": "W praktyce, naukowcy często pracują z roztworami o precyzyjnie określonym stężeniu w celu przeprowadzania eksperymentów i analiz chemicznych."
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

