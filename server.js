const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get("/*", (req, res) => {
    res.json(
        {
  "topics": [
    {
      "title": "Polska w XVII wieku",
      "subtopics": [
        {
          "title": "Historia Polski",
          "notes": [
            {
              "id": 1,
              "content": "XVII wiek to okres istotny dla historii Polski, zwłaszcza z uwagi na liczne wydarzenia polityczne, społeczne i kulturalne."
            },
            {
              "id": 2,
              "content": "Rządy króla Jana III Sobieskiego były jednym z najważniejszych momentów tego stulecia."
            },
            {
              "id": 3,
              "content": "W tym okresie Polska była państwem o stosunkowo dużym terytorium, sięgającym Bałtyku na północy i Morza Czarnego na południu."
            }
          ]
        },
        {
          "title": "Wojny i konflikty",
          "notes": [
            {
              "id": 4,
              "content": "Polska była zaangażowana w różne konflikty w XVII wieku, takie jak wojny z Turcją, Rosją i Szwecją."
            },
            {
              "id": 5,
              "content": "Bitwa pod Kircholmem w 1605 roku była jednym z ważniejszych starć z udziałem Polski w XVII wieku."
            }
          ]
        },
        {
          "title": "Kultura i nauka",
          "notes": [
            {
              "id": 6,
              "content": "W XVII wieku rozwijała się kultura i sztuka w Polsce, szczególnie w okresie baroku."
            },
            {
              "id": 7,
              "content": "W tym czasie działalność artystyczna takich postaci jak Jan III Sobieski, król-pisarz, miała duże znaczenie dla polskiej kultury."
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

