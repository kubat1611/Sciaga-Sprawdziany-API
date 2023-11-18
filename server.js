const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get("/*", (req, res) => {
    res.json(
      {
        "topics": [
          {
            "title": "Polska w XVI wieku",
            "subtopics": [
              {
                "title": "Najważniejsze osoby",
                "notes": [
                  {
                    "id": 1,
                    "content": "Zygmunt I Stary - król Polski w latach 1506–1548"
                  },
                  {
                    "id": 2,
                    "content": "Bona Sforza - żona Zygmunta I, wpływowa królowa Polski"
                  },
                  {
                    "id": 3,
                    "content": "Mikołaj Kopernik - astronom, autor teorii heliocentrycznej"
                  },
                  {
                    "id": 4,
                    "content": "Andrzej Frycz Modrzewski - myśliciel, autor dzieła 'O poprawie Rzeczypospolitej'"
                  },
                  {
                    "id": 5,
                    "content": "Jan Kochanowski - poeta i humanista, autor 'Trenów' i 'Odprawy posłów greckich'"
                  },
                  {
                    "id": 6,
                    "content": "Zygmunt II August - ostatni król z dynastii Jagiellonów, panujący w latach 1548–1572"
                  },
                  {
                    "id": 7,
                    "content": "Barbara Radziwiłłówna - druga żona Zygmunta II Augusta, królowa Polski"
                  },
                  {
                    "id": 8,
                    "content": "Mikołaj Rej - pisarz, satyryk, autor 'Żywota człowieka poczciwego'"
                  },
                  {
                    "id": 9,
                    "content": "Stanisław Hozjusz - biskup warmiński, uczestnik Soboru Trydenckiego"
                  },
                  {
                    "id": 10,
                    "content": "Piotr Skarga - jezuita, kaznodzieja, autor 'Sejmu Czteroletniego'"
                  }
                ]
              },
              {
                "title": "Najważniejsze daty",
                "notes": [
                  {
                    "id": 11,
                    "content": "1525 - Hołd pruski, formalne przyłączenie Prus Książęcych do Polski"
                  },
                  {
                    "id": 12,
                    "content": "1569 - Unia Lubelska, zjednoczenie Polski i Litwy w Rzeczpospolitą Obojga Narodów"
                  },
                  {
                    "id": 13,
                    "content": "1573 - Pierwsza wolna elekcja, ustanowienie zasady wolnego wyboru króla"
                  },
                  {
                    "id": 14,
                    "content": "1596 - Unia brzeska, zjednoczenie Kościoła prawosławnego z Kościołem katolickim"
                  },
                  {
                    "id": 15,
                    "content": "1588 - Koronacja Zygmunta III Wazy, początek panowania dynastii Wazów"
                  },
                  {
                    "id": 16,
                    "content": "1565 - Pokój w Toruniu, zakończenie wojny polsko-krzyżackiej"
                  },
                  {
                    "id": 17,
                    "content": "1599 - Utworzenie Akademii Zamojskiej, jednej z pierwszych polskich uczelni wyższych"
                  },
                  {
                    "id": 18,
                    "content": "1555 - Sejm piotrkowski, uchwalenie postanowień o równouprawnieniu wszystkich wyznań"
                  },
                  {
                    "id": 19,
                    "content": "1518 - Zakładanie mennic królewskich, rozwój gospodarczy kraju"
                  },
                  {
                    "id": 20,
                    "content": "1564 - Akademia Krakowska otrzymuje przywileje uniwersytetu, wzrost znaczenia ośrodków naukowych"
                  }
                ]
              },
              {
                "title": "Aspekty życia",
                "notes": [
                  {
                    "id": 21,
                    "content": "Rozwój sztuki i architektury, budowa zamków i kościołów renesansowych"
                  },
                  {
                    "id": 22,
                    "content": "Eksploracja geograficzna, udział Polaków w podróżach i odkryciach"
                  },
                  {
                    "id": 23,
                    "content": "Rola kobiet w społeczeństwie, wzrost znaczenia edukacji dla dziewcząt"
                  },
                  {
                    "id": 24,
                    "content": "Dwór królewski i magnateria, życie na dworze królewskim i w rezydencjach magnackich"
                  },
                  {
                    "id": 25,
                    "content": "Rozwój rzemiosła i handlu, organizacja cechów i gildii"
                  }
                ]
              },
              {
                "title": "Najważniejsze wydarzenia",
                "notes": [
                  {
                    "id": 26,
                    "content": "Bitwa pod Kircholmem (1605) - zwycięstwo Polski nad Szwecją w czasie wojny polsko-szwedzkiej"
                  },
                  {
                    "id": 27,
                    "content": "Rozbicie dzielnicowe (1562-1572) - próba zreformowania systemu politycznego"
                  },
                  {
                    "id": 28,
                    "content": "Wojna inflancka (1558–1583) - konflikt z Moskwą o Inflanty, zakończony pokojem w Jamie Zapolskim"
                  },
                  {
                    "id": 29,
                    "content": "Utworzenie Kolegium Jezuickiego w Krakowie (1579) - rozwój edukacji jezuickiej"
                  },
                  {
                    "id": 30,
                    "content": "Zakaz druku w języku polskim w Prusach (1520) - próba kontrolowania przepływu informacji przez władze zakonne"
                  }
                ]
              },
              {
                "title": "Kultura i nauka",
                "notes": [
                  {
                    "id": 31,
                    "content": "Rozkwit kultury renesansowej, wpływ włoskich wzorców artystycznych"
                  },
                  {
                    "id": 32,
                    "content": "Rola Akademii Krakowskiej i innych ośrodków naukowych w XVI wieku"
                  },
                  {
                    "id": 33,
                    "content": "Działalność humanistów, takich jak Jan Dantyszek czy Marcin Kromer"
                  },
                  {
                    "id": 34,
                    "content": "Księgi jedyństwa - pierwszy polski podręcznik matematyki autorstwa Jana Łaskiego"
                  },
                  {
                    "id": 35,
                    "content": "Rozwój literatury polskiej, w tym twórczość Mikołaja Reja i Jana Kochanowskiego"
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