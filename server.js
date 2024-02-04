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
                }
            ]
        },

        )
});



app.listen(5000, () => {
    console.log("Server started on port 5000");
});

