const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get("/*", (req, res) => {
    res.json(
      {
        "topics": [
          {
            "title": "Układ kostny",
            "subtopics": [
              {
                "title": "Budowa Kości",
                "notes": [
                  {
                    "id": 1,
                    "content": "Kość to tkanka twarda, zbudowana z substancji organicznej (kolagen) i nieorganicznej (węglan wapnia)."
                  },
                  {
                    "id": 2,
                    "content": "Kostnina dzieli się na tkankę gąbczastą i zbitą. W tkance gąbczastej znajdują się szpik kostny i komórki kostne, natomiast tkanka zbita tworzy warstwę zewnętrzną kości."
                  },
                  {
                    "id": 3,
                    "content": "Periost - błona pokrywająca z zewnątrz kość, zawiera naczynia krwionośne i nerwy, odpowiada za wzrost i odżywianie kości."
                  },
                  {
                    "id": 4,
                    "content": "Kanały Haversa to mikroskopijne kanały w kościach, przez które przechodzą naczynia krwionośne, nerwy i komórki kostne."
                  },
                  {
                    "id": 5,
                    "content": "Komórki kostne to osteocyty, osteoblasty i osteoklasty, odpowiedzialne za budowę i rozkładanie substancji kostnej."
                  },
                  {
                    "id": 6,
                    "content": "Kość jest dynamiczną strukturą, podlegającą procesom remodelingu, czyli ciągłej przebudowie w odpowiedzi na obciążenia i uszkodzenia."
                  }
                ]
              },
              {
                "title": "Rodzaje Kości",
                "notes": [
                  {
                    "id": 7,
                    "content": "Kości długie, krótkie, płaskie i pneumatyczne (z jamkami powietrznymi). Przykłady: kość ramieniowa, kręgosłup, kość miednicza, kość sitowa."
                  },
                  {
                    "id": 8,
                    "content": "Kości jamiste zawierają szpik kostny czerwony, produkujący krew. Kości gąbczaste stanowią miejsce magazynowania tłuszczu i szpiku żółtego."
                  },
                  {
                    "id": 9,
                    "content": "Kość compacta to gęsta, zbita tkanka kostna, zapewniająca sztywność i wytrzymałość kości."
                  },
                  {
                    "id": 10,
                    "content": "Kości sutkowe to kości, które nie są połączone stawowo, ale elastycznie ze sobą współpracują, umożliwiając ruchy klatki piersiowej."
                  },
                  {
                    "id": 11,
                    "content": "Kość wormia to kręgi kręgosłupa, stanowiące odcinek szyjny."
                  }
                ]
              },
              {
                "title": "Funkcje Układu Kostnego",
                "notes": [
                  {
                    "id": 12,
                    "content": "Podpora dla ciała, umożliwia ruchy dzięki połączeniom stawowym."
                  },
                  {
                    "id": 13,
                    "content": "Ochrona narządów wewnętrznych, np. czaszka chroni mózg, żebra osłaniają narządy w klatce piersiowej."
                  },
                  {
                    "id": 14,
                    "content": "Produkcja krwinek, takich jak erytrocyty, leukocyty i trombocyty, oraz magazynowanie minerałów, zwłaszcza wapnia."
                  },
                  {
                    "id": 15,
                    "content": "Kość jest miejscem, w którym zachodzi proces hemopoezy, czyli produkcji krwi."
                  },
                  {
                    "id": 16,
                    "content": "Regulacja poziomu wapnia i fosforu we krwi poprzez procesy resorpcji i odkładania minerałów w kościach."
                  },
                  {
                    "id": 17,
                    "content": "Biorą udział w homeostazie, utrzymując równowagę mineralną organizmu."
                  }
                ]
              },
              {
                "title": "Zaburzenia i Choroby",
                "notes": [
                  {
                    "id": 18,
                    "content": "Osteoporoza - zmniejszona gęstość kości, zwiększaryzyko złamań."
                  },
                  {
                  "id": 19,
                  "content": "Artretyzm - choroba stawów, może wpływać na ruchliwość i wytrzymałość kości."
                  },
                  {
                  "id": 20,
                  "content": "Skolioza - boczne skrzywienie kręgosłupa, może wpływać na równowagę ciała."
                  },
                  {
                  "id": 21,
                  "content": "Złamania kości - uszkodzenia struktury kostnej, mogą być skutkiem urazu lub osteoporozy."
                  },
                  {
                  "id": 22,
                  "content": "Osteogeneza - proces gojenia się złamanej kości, obejmuje tworzenie kalusu kostnego i remodelowanie tkanki kostnej."
                  },
                  {
                  "id": 23,
                  "content": "Zespół stawu skroniowo-żuchwowego (TMJ) - schorzenie dotyczące stawów żuchwowych, prowadzące do bólu i ograniczenia ruchomości szczęki."
                  },
                  {
                  "id": 24,
                  "content": "Rachitis - krzywica u dzieci, spowodowana niedoborem witaminy D i wapnia, prowadzi do zniekształceń kości."
                  },
                  {
                  "id": 25,
                  "content": "Nowotwory kości - mogą być zarówno łagodne, jak i złośliwe, wpływając na strukturę i funkcję kości."
                  },
                  {
                  "id": 26,
                  "content": "Choroba Pageta - zaburzenie, charakteryzujące się nadmiernym rozrostem kości, prowadzącym do deformacji i osłabienia struktury."
                  }
                  ]
                  },
                  {
                  "title": "Badania i Diagnostyka",
                  "notes": [
                  {
                  "id": 27,
                  "content": "RTG - najczęściej stosowane badanie do oceny struktury kostnej i wykrywania złamań."
                  },
                  {
                  "id": 28,
                  "content": "Densytometria kości - pomiar gęstości mineralnej kości, pomocna w diagnozowaniu osteoporozy."
                  },
                  {
                  "id": 29,
                  "content": "Badania krwi - ocena poziomu substancji mineralnych i wskaźników procesów kostnych."
                  },
                  {
                  "id": 30,
                  "content": "Tomografia komputerowa (CT) - szczegółowe badanie struktury kości, przydatne w diagnostyce nowotworów i urazów."
                  },
                  {
                  "id": 31,
                  "content": "Rezonans magnetyczny (MRI) - obrazowanie struktur miękkich i kości, stosowane w diagnostyce urazów stawów."
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