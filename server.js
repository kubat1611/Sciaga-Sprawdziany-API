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
          "title": "Podwójna elekcja",
          "notes": [
            {
              "id": 1,
              "content": "Podwójna elekcja to wydarzenie historyczne związane z wyborem dwóch monarchów dla jednego kraju w Polsce. W kontekście, który przedstawiłeś, chodzi o sytuację\n" +
                  "z lat 1575-1576, z udziałem Henryka Walezego:"
            },
            {
              "id": 2,
              "content": "1574 - Ucieczka Henryka Walezego:\n" +
                  "    Henryk Walezy, brat króla Francji Karola IX, uciekł do Polski w 1574 roku. Jego przybycie miało związek z nadziejami na objęcie polskiego tronu.\n"
            },
            {
              "id": 3,
              "content": "    1575 - Sejm Konwokacyjny:\n" +
                  "    Sejm konwokacyjny został zwołany w 1575 roku, aby wybrać nowego króla po śmierci króla Zygmunta II Augusta. To właśnie na tym sejmie rozpoczęły się\n" +
                  "wybory, które później przekształciły się w podwójną elekcję."
            }
          ]
        },
        {
          "title": "Stefan Batory (1533-1586)",
          "notes": [
            {
              "id": 4,
              "content": "Stefan Batory (1533-1586) był królem Polski od 1576 do 1586 roku. Pochodził z Transylwanii. Jego panowanie było okresem istotnych reform i konfliktów zbrojnych. Batory znany jest przede \n" +
                  "wszystkim z odniesienia zwycięstwa w wojnie z Moskwą oraz prób modernizacji kraju. Był także mężem Anny Jagiellonki, co miało znaczenie dla jednoczenia dwóch gałęzi dynastii Jagiellonów."
            }
          ]
        },
        {
          "title": "Jan Zamojski (1542-1605)",
          "notes": [
            {
              "id": 5,
              "content": "Jan Zamojski (1542-1605) był polskim magnatem, hetmanem wielkim koronnym, kanclerzem wielkim koronnym i fundatorem Akademii Zamojskiej. Był jednym z najważniejszych\n" +
                  "polityków okresu renesansu w Polsce. Zamojski wyróżniał się zarówno talentem wojskowym, jak i zdolnościami administracyjnymi. Jego postawa w czasie elekcji po śmierci\n" +
                  "Zygmunta II Augusta przyczyniła się do wyboru Stefana Batorego na króla Polski. Aktywnie uczestniczył także w wojnach z Moskwą i Turcją."
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
    },
    {
      "title": "Układ krwionośny i odpornościowy",
      "subtopics": [
        {
          "title": "Układ krwionośny",
          "notes": [
            {
              "id": 1,
              "content": "Układ krwionośny składa się z serca, krwi i naczyń krwionośnych i pełni kluczową rolę w transporcie składników odżywczych, gazów oraz hormonów."
            },
            {
              "id": 2,
              "content": "Serce jest centralnym organem układu krwionośnego, pompującym krew do całego ciała, co umożliwia dostarczanie tlenu i usuwanie dwutlenku węgla."
            },
            {
              "id": 3,
              "content": "Krew składa się z płynnego osocza i elementów morfotycznych, takich jak czerwone krwinki, białe krwinki i płytki krwi, które pełnią różnorodne funkcje."
            },
            {
              "id": 4,
              "content": "Naczynia krwionośne, w tym arterie, żyły i naczynia włosowate, tworzą rozległą sieć, przez którą krew przepływa do i z różnych części ciała."
            },
            {
              "id": 5,
              "content": "Regulacja ciśnienia krwi jest kluczowa dla utrzymania prawidłowego przepływu krwi i dotlenienia tkanek."
            }
          ]
        }
      ]
    },
    {
      "title": "Genetyka",
      "subtopics": [
        {
          "title": "Abberacje chromosomowe",
          "notes": [
            {
              "id": 1,
              "content": "Zespół Turnera X 0 45 chromosomów, "
            },
            {
              "id": 2,
              "content": "Zespół Klinofeltera XXY"
            },
            {
              "id": 3,
              "content": "Zespół Downa 21 para - 3 chromosomy"
            }
          ]
        },
        {
          "title": "Biosynteza Białka",
          "notes": [
            {
              "id": 1,
              "content": "Biosynteza - tworzenie się białka"
            },
            {
              "id": 2,
              "content": "Transkrypcja (jądro komórkowe)"
            },
            {
              "id": 3,
              "content": "DNA -----------> mRNA   polimeraza(enzym)"
            },
            {
              "id": 4,
              "content": "Transalacja (cytpolazma)"
            },
            {
              "id": 5,
              "content": "mRNA ---------> białko    = tRNA"
            },
            {
              "id": 5,
              "content": "1. inicjacja 2. a 3. terminacja"
            },
            {
              "id": 6,
              "content": "autosomy 44 - 22 pary, chromosomy - 2 (1 para płci)"
            },
            {
              "id" : 7,
              "content": "AA - homozygota dominująca, aa - homozygota recesywna, Aa - heterozygota"
            },
            {
              "id" : 8,
              "content": "Niebieskooka kobieta poślubiła mężczyzne o brązowych oczach. Z tego związku urodziło się dziecko o niebieskich oczach. Rodzice matki mieli oczy brązowe, a rodzice mężczyzny matka niebieskie, a ojciec brązowe. Podaj genotypy wszystkich w tej rodzinie."
            },
            {
              "id" : 9,
              "content" : "**Cechy dominujące u człowieka**: - ciemne włosy - kręcone włosy - długie rzęsy - ciemne oczy - ciemny kolor skóry - odstające uszy - piegi - orli nos - grupa krwi Rh+"
            }
          ]
        },
        {
          "title": "Cechy sprężone z płcią",
          "notes": [
            {
              "id": 1,
              "content": "XX - kobieta, XY - mężczyzna"
            },
            {
              "id": 2,
              "content": "Dd - daltonizm, Hh - hemofilia, dd - recesywne allele"
            },
            {
              "id": 3,
              "content": "Y zawiera tylko męskie cechy, ale nic więcej"
            },
            {
              "id": 4,
              "content": "$X^D$$X^D$ - zdrowa kobieta, $X^D$$X^d$ - nosicielka, $X^d$$X^d$ - chora kobieta"
            },
            {
              "id": 5,
              "content": "$X^D$$Y$ - zdrowy mężczyzna, $X^d$$Y$ - chory mężczyzna"
            },
            {
              "id": 6,
              "content": "Kwadrat - osoba płci męskiej, Koło - osoba płci żeńskiej, Romb - osoba płci nieznanej"
            },
            {
              "id": 7,
              "content": "Zamalowane - osoby chore, Półzamalowane - nosiciele, Kropka w środku - choroba sprzężona z płcią"
            },
            {
              "id": 8,
              "content": "Choroba autosomalna - dominująca - 22 para chromosomów"
            }
          ]
        },
        {
          "title": "Mutacje",
          "notes": [
            {
              "id": 1,
              "content": "Mutacja - nagła, trwała zmiana w materiale genetycznym, która w zależności od miejsca zachodzenia będzie dziedziczna lub niedziedziczna."
            },
            {
              "id": 2,
              "content": "Niedziedziczna mutacja zachodzi w komórkach somatycznych."
            },
            {
              "id": 3,
              "content": "Mutacje niekorzystne dla organizmu: - te wywołujące choroby"
            },
            {
              "id": 4,
              "content": "Mutacje korzystne dla organizmu: - te, które sprawiają, że organizm lepiej przystosowuje się do środowiska"
            },
            {
              "id": 5,
              "content": "Czynniki wpływające na mutacje: - fizyczne (np. promieniowanie) - chemiczne (np. konserwanty żywności) - biologiczne"
            },
            {
              "id": 6,
              "content": "Sposoby mutacji: - wstawienie nukleotydu - usunięcie nukleotydu - zamiana nukleotydu"
            },
            {
              "id": 7,
              "content": "Skutki mutacji genowych: - Zmiana sensu: zmiana trójki kodonów odczytujących aminokwas, powodująca powstanie innego aminokwasu - mutacja milcząca"
            },
            {
              "id": 8,
              "content": "Aberacje chromosomowe dotyczą: - budowy (strukturalne) - liczby chromosomów (liczbowe)"
            },
            {
              "id": 9,
              "content": "Trisomia: - XXY - zespół Klinefeltera - 21 - zespół Downa"
            },
            {
              "id": 10,
              "content": "Monosomia: - zespół Turnera"
            },
            {
              "id": 11,
              "content": "Poliploidalność: - 3n - 4n - 5n - ..."
            },
            {
              "id": 12,
              "content": "Choroby jednogenowe u człowieka:"
            },
            {
              "id": 13,
              "content": "- Sprzężone z płcią: - hemofilia - daltonizm - dystrofia mięśniowa - krzywica"
            },
            {
              "id": 14,
              "content": "- Niesprzężone recesywne: - mukowiscydoza: - dotyczy dróg oddechowych - nadmiar śluzu blokującego drogi oddechowe, oskrzela i oskrzeliki - powoduje duszności - fenyloketonuria: - jeden z aminokwasów nie jest prawidłowo rozkładany (głównie w mózgu), prowadząc do uszkodzenia nerwów - stosowanie odpowiedniej diety może zapobiec chorobie (dotyczy głównie młodych) - anemia sierpowata: - krwinki czerwone przybierają kształt sierpa zamiast być okrągłe - organizm jest niedotleniony - występuje niedokrwistość - albinizm: - brak produkcji barwnika w organizmie - choroba Huntingtona: - neurodegeneracyjna choroba genetyczna"
            },
            {
              "id": 15,
              "content": "- Niesprzężone dominujące: - pląsawica Huntingtona"
            }
          ] 
        },
        {
          "title": "Inne sposoby dziedziczenia",
          "notes": [
            {
              "id": 1,
              "content": "**Niepełna dominacja**"
            },
            {
              "id": 2,
              "content": "**Kodominacja** - równorzędność alleli względem siebie: - żaden nie dominuje - żaden nie jest recesywny"
            },
            {
              "id": 3,
              "content": "| Genotyp | Grupa krwi | \n| ------- | ---------- | \n| AA ; Ai | A          | \n| BB ; Bi | B          | \n| AB      | AB         | \n| ii      | 0          |"
            },
            {
              "id": 4,
              "content": "**Dziedziczenie wielogenowe** - kilka genów określa daną cechę"
            },
            {
              "id": 5,
              "content": "Chromosomy homologiczne - identyczne chromosomy, tworzą parę"
            },
            {
              "id": 6,
              "content": "**Chromosomowa teoria dziedziczenia** Thomasa Morgana: - geny znajdują się w chromosomach - wszystkie geny ułożone są liniowo, jeden za drugim - każdy gen zajmuje ściśle określone miejsce (locus) na chromosomie - geny znajdujące się na jednym chromosomie nazywamy genami sprzężonymi, które dziedziczą się zależnie od siebie; najczęściej trafiają do jednej gamety i jedynie mogą być rozdzielone poprzez crossing-over w trakcie mejozy"
            }
          ]          
        },
        {
          "title": "Inne sposoby dziedziczenia",
          "notes": [
            {
              "id": 1,
              "content": "Genetyka - nauka o dziedziczeniu, przekazywaniu informacji i zmienności organizmów"
            },
            {
              "id": 2,
              "content": "**Gen** - podstawowa jednostka dziedziczenia, fragment *DNA*, który zawiera informację genetyczną o budowie białka (cecha) lub cząsteczki *RNA*"
            },
            {
              "id": 3,
              "content": "# DNA\nDNA - kwas deoksyrybonukleinowy"
            },
            {
              "id": 4,
              "content": "A - reszta kwasu fosforowego\nB - cukier (ryboza/deoksyryboza)"
            },
            {
              "id": 5,
              "content": "**Zasady azotowe**\n- DNA: - adenina, guanina - tymina, cytozyna\n- RNA: - uracyl - adenina - guanina - cytozyna"
            },
            {
              "id": 6,
              "content": "**Zasada komplementarności**\n- Adenina = Tymina / Adenina - Uracyl\n- Guanina --- Cytozyna"
            },
            {
              "id": 7,
              "content": "Przykład komplementarnego zapisu:\nA G C T A A G C C T A A\nU C G A U U C G G A U U"
            }
          ]
            
        }
      ]
    },
    {
      "title": "Białka - Chemia",
      "subtopics": [
      {
      "title": "Budowa i właściwości białek",
      "notes": [
      {
      "id": 1,
      "content": "Białka - wielkocząsteczkowe polimery zbudowane z aminokwasów."
      },
      {
      "id": 2,
      "content": "Podstawową jednostką białek są aminokwasy połączone wiązaniami peptydowymi."
      },
      {
      "id": 3,
      "content": "Struktura aminokwasu: - grupa aminowa (-NH2) - grupa karboksylowa (-COOH) - podstawnik (R)"
      },
      {
      "id": 4,
      "content": "Właściwości białek: - denaturacja - koagulacja - rozpuszczalność"
      }
      ]
      },
      {
      "title": "Struktura białek",
      "notes": [
      {
      "id": 1,
      "content": "Struktura pierwszorzędowa - kolejność aminokwasów w łańcuchu polipeptydowym."
      },
      {
      "id": 2,
      "content": "Struktura drugorzędowa - alfa-helisa i beta-harmonijka, stabilizowane wiązaniami wodorowymi."
      },
      {
      "id": 3,
      "content": "Struktura trzeciorzędowa - przestrzenne ułożenie łańcucha polipeptydowego."
      },
      {
      "id": 4,
      "content": "Struktura czwartorzędowa - sposób połączenia kilku łańcuchów polipeptydowych."
      }
      ]
      },
      {
      "title": "Funkcje białek",
      "notes": [
      {
      "id": 1,
      "content": "Białka enzymatyczne - przyspieszają reakcje chemiczne (np. amylaza, pepsyna)."
      },
      {
      "id": 2,
      "content": "Białka transportowe - przenoszą substancje (np. hemoglobina)."
      },
      {
      "id": 3,
      "content": "Białka strukturalne - budują organizmy (np. kolagen, keratyna)."
      },
      {
      "id": 4,
      "content": "Białka odpornościowe - przeciwciała chroniące organizm."
      },
      {
      "id": 5,
      "content": "Białka regulatorowe - regulują procesy w organizmie (np. hormony białkowe)."
      }
      ]
      },
      {
      "title": "Podział białek",
      "notes": [
      {
      "id": 1,
      "content": "Białka proste - zbudowane wyłącznie z aminokwasów (np. albuminy, histony)."
      },
      {
      "id": 2,
      "content": "Białka złożone - zawierają dodatkowe grupy chemiczne (np. hemoglobina, glikoproteiny)."
      }
      ]
      },
      {
      "title": "Denaturacja i koagulacja białek",
      "notes": [
      {
      "id": 1,
      "content": "Denaturacja - trwałe zniszczenie struktury białka pod wpływem czynników fizycznych lub chemicznych."
      },
      {
      "id": 2,
      "content": "Czynniki denaturujące: - wysoka temperatura - promieniowanie UV - kwasy i zasady - metale ciężkie"
      },
      {
      "id": 3,
      "content": "Koagulacja - proces wytrącania białek z roztworu. Może być odwracalna (np. wysalanie) lub nieodwracalna."
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

