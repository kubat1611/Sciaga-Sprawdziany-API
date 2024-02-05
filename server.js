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
      "title": "Układ Pokarmowy",
      "subtopics": [
        {
          "title": "Przełyk",
          "notes": [
            {
              "id": 1,
              "content": "Ruchy robaczkowe (inaczej ruchy perystaltyczne) naprzemienne skurcze i rozkurcze."
            },
            {
              "id": 2,
              "content": "Przełyk to mięśnie gładkie, których funkcją jest dostarczenie pokarmu z gardła do żołądka."
            }
          ]
        },
        {
          "title": "Żołądek",
          "notes": [
            {
              "id": 3,
              "content": "Pokarm jest mieszany, a sok żołądkowy zawiera enzymy trawienne oraz sok solny, tworzący środowisko dla enzymów trawiennych."
            },
            {
              "id": 4,
              "content": "Enzymy w żołądku rozkładają wielocukry, tłuszcze i białka."
            },
            {
              "id": 5,
              "content": "Istnieją różne typy żołądków, z których każdy pełni określoną funkcję w procesie trawienia."
            }
          ]
        },
        {
          "title": "Kosmki Jelitowe",
          "notes": [
            {
              "id": 6,
              "content": "Powierzchnia chłonna jelita jest powiększana przez kosmki jelitowe, które są wypełnione licznymi naczyniami krwionośnymi."
            },
            {
              "id": 7,
              "content": "Kosmki jelitowe odgrywają kluczową rolę w procesie wchłaniania substancji odżywczych."
            }
          ]
        },
        {
          "title": "Jelito Cienkie",
          "notes": [
            {
              "id": 8,
              "content": "Najdłuższa część przewodu pokarmowego, położona pomiędzy żołądkiem a jelitem grubym."
            },
            {
              "id": 9,
              "content": "Jelito cienkie zajmuje okolicę pępkową, podbrzuszną, obie okolice biodrowe oraz częściowo miednicę małą."
            }
          ]
        },
        {
          "title": "Jelito Grube",
          "notes": [
            {
              "id": 10,
              "content": "Nowotwór jelita grubego jest najczęstszym nowotworem w Polsce i trudnym do wyleczenia. Wykrywa się poprzez kolonoskopię."
            },
            {
              "id": 11,
              "content": "W jelicie grubym występuje ponad 400 gatunków bakterii, które pomagają w trawieniu błonnika."
            },
            {
              "id": 12,
              "content": "W jelitach grubych zachodzi proces odciągania wody, zapobiegając odwodnieniu."
            }
          ]
        },
        {
          "title": "Odbyt",
          "notes": [
            {
              "id": 13,
              "content": "Ok. 200 kg dziennie przechodzi przez odbyt, a częstość wypróżnień wynosi od 3 razy dziennie do 3 razy tygodniowo."
            }
          ]
        },
        {
          "title": "Wątroba",
          "notes": [
            {
              "id": 14,
              "content": "Wątroba produkuje żółć, która ułatwia trawienie tłuszczy, przechowywaną w pęcherzyku żółciowym."
            }
          ]
        },
        {
          "title": "Trzustka",
          "notes": [
            {
              "id": 15,
              "content": "Trzustka jest gruczołem wytwarzającym sok trzustkowy, umożliwiający trawienie pokarmu w dwunastnicy."
            }
          ]
        },
        {
          "title": "Zęby Człowieka",
          "notes": [
            {
              "id": 16,
              "content": "Dorosły człowiek ma 32 zęby stałe, a dzieci 20 zębów. Zęby składają się z szkliwa, zębiny, dziąsła i miazgi."
            },
            {
              "id": 17,
              "content": "Rodzaje zębów obejmują siekacze, kły, przedtrzonowe i trzonowe, z różnymi funkcjami w procesie trawienia."
            }
          ]
        },
        {
          "title": "Trawienie Cukrów",
          "notes": [
            {
              "id": 18,
              "content": "Proces trawienia cukrów zaczyna się w jamie ustnej poprzez ślinę zawierającą amylazę ślinową."
            },
            {
              "id": 19,
              "content": "W trzustce i dwunastnicy trawienie cukrów kontynuuje się za pomocą soków trzustkowych i jelitowych."
            }
          ]
        },
        {
          "title": "Trawienie Białek",
          "notes": [
            {
              "id": 20,
              "content": "Trawienie białek rozpoczyna się w żołądku poprzez działanie peptydaz, a następnie kontynuuje się w dwunastnicy za pomocą soków trzustkowych i jelitowych."
            }
          ]
        },
        {
          "title": "Trawienie Tłuszczów",
          "notes": [
            {
              "id": 21,
              "content": "Emulgacja tłuszczy, dzięki żółci wydzielanej przez wątrobę, umożliwia ich rozkład w dwunastnicy za pomocą lipaz."
            }
          ]
        },
        {
          "title": "BMI",
          "notes": [
            {
              "id": 22,
              "content": "BMI (Body Mass Index) to wskaźnik masy ciała, obliczany jako masa ciała (kg) podzielona przez wzrost (w m^2)."
            },
            {
              "id": 23,
              "content": "Wartości BMI pozwalają określić, czy mamy do czynienia z niedowagą, prawidłową wagą, nadwagą czy otyłością."
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

