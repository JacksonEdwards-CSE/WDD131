const tracks = [
    { tag: "circuit", name: "Albert Park Circuit", country: "Australia", length: "5.278 km", laps: 58, image: "track_images/2026trackmelbournedetailed.avif" },

    { tag: "circuit", name: "Shanghai International Circuit", country: "China", length: "5.451 km", laps: 56, image: "track_images/2026trackshanghaidetailed.avif" },

    { tag: "circuit", name: "Suzuka Circuit", country: "Japan", length: "5.807 km", laps: 53, image: "track_images/2026tracksuzukadetailed.avif" },

    { tag: "circuit", name: "Bahrain International Circuit", country: "Bahrain", length: "5.412 km", laps: 57, image: "track_images/2026trackbahrainedetailed.avif" },

    { tag: "circuit", name: "Jeddah Corniche Circuit", country: "Saudi Arabia", length: "6.174 km", laps: 50, image: "track_images/2026trackjeddahdetailed.avif" },

    { tag: "circuit", name: "Miami International Autodrome", country: "United States", length: "5.412 km", laps: 57, image: "track_images/2026trackmiamidetailed.avif" },

    { tag: "circuit", name: "Imola Circuit", country: "Italy", length: "4.909 km", laps: 63, image: "track_images/2026trackimoladetailed.avif" },

    { tag: "circuit", name: "Circuit de Monaco", country: "Monaco", length: "3.337 km", laps: 78, image: "track_images/2026trackmontecarlodetailed.avif" },

    { tag: "circuit", name: "Circuit de Barcelona-Catalunya", country: "Spain", length: "4.657 km", laps: 66, image: "track_images/2026trackcatalunyadetailed.avif" },

    { tag: "circuit", name: "Circuit Gilles Villeneuve", country: "Canada", length: "4.361 km", laps: 70, image: "track_images/2026trackmontrealdetailed.avif" },

    { tag: "circuit", name: "Red Bull Ring", country: "Austria", length: "4.318 km", laps: 71, image: "track_images/2026trackaustriadetailed.avif" },

    { tag: "circuit", name: "Silverstone Circuit", country: "United Kingdom", length: "5.891 km", laps: 52, image: "track_images/2026tracksilverstonedetailed.avif" },

    { tag: "circuit", name: "Circuit de Spa-Francorchamps", country: "Belgium", length: "7.004 km", laps: 44, image: "track_images/2026trackspafrancorchampsdetailed.avif" },

    { tag: "circuit", name: "Hungaroring", country: "Hungary", length: "4.381 km", laps: 70, image: "track_images/2026trackhungaroringdetailed.avif" },

    { tag: "circuit", name: "Circuit Zandvoort", country: "Netherlands", length: "4.259 km", laps: 72, image: "track_images/2026trackzandvoortdetailed.avif" },

    { tag: "circuit", name: "Autodromo Nazionale Monza", country: "Italy", length: "5.793 km", laps: 53, image: "track_images/2026trackmonzadetailed.avif" },

    { tag: "circuit", name: "Baku City Circuit", country: "Azerbaijan", length: "6.003 km", laps: 51, image: "track_images/2026trackbakudetailed.avif" },

    { tag: "circuit", name: "Marina Bay Street Circuit", country: "Singapore", length: "4.940 km", laps: 62, image: "track_images/2026trackmarinabaystreetcircuitdetailed.avif" },

    { tag: "circuit", name: "Circuit of the Americas", country: "United States", length: "5.513 km", laps: 56, image: "track_images/2026trackaustindetailed.avif" },

    { tag: "circuit", name: "Autódromo Hermanos Rodríguez", country: "Mexico", length: "4.304 km", laps: 71, image: "track_images/2026trackmexicocitydetailed.avif" },

    { tag: "circuit", name: "Interlagos", country: "Brazil", length: "4.309 km", laps: 71, image: "track_images/2026trackinterlagosdetailed.avif" },

    { tag: "circuit", name: "Las Vegas Strip Circuit", country: "United States", length: "6.201 km", laps: 50, image: "track_images/2026tracklasvegasdetailed.avif" },

    { tag: "circuit", name: "Lusail International Circuit", country: "Qatar", length: "5.419 km", laps: 57, image: "track_images/2026tracklusaildetailed.avif" },

    { tag: "circuit", name: "Yas Marina Circuit", country: "United Arab Emirates", length: "5.281 km", laps: 58, image: "track_images/2026trackyasmarinadetailed.avif" }
];

const drivers = [
    { tag: "driver", name: "George Russell", age: 28, country: "United Kingdom", team: "Mercedes", yearsDriving: 7, image: "2026mercedesgeorus01right.avif" },
    { tag: "driver", name: "Kimi Antonelli", age: 19, country: "Italy", team: "Mercedes", yearsDriving: 1, image: "2026mercedeskimant01right.avif" },

    { tag: "driver", name: "Charles Leclerc", age: 28, country: "Monaco", team: "Ferrari", yearsDriving: 8, image: "2026ferrarichalec01right.avif" },
    { tag: "driver", name: "Lewis Hamilton", age: 41, country: "United Kingdom", team: "Ferrari", yearsDriving: 20, image: "2026ferrarilewham01right.avif" },

    { tag: "driver", name: "Lando Norris", age: 26, country: "United Kingdom", team: "McLaren", yearsDriving: 7, image: "2026mclarenlannor01right.avif" },
    { tag: "driver", name: "Oscar Piastri", age: 25, country: "Australia", team: "McLaren", yearsDriving: 4, image: "2026mclarenoscpia01right.avif" },

    { tag: "driver", name: "Max Verstappen", age: 29, country: "Netherlands", team: "Red Bull Racing", yearsDriving: 12, image: "2026redbullracingmaxver01right.avif" },
    { tag: "driver", name: "Isack Hadjar", age: 22, country: "France", team: "Red Bull Racing", yearsDriving: 2, image: "2026redbullracingisahad01right.avif" },

    { tag: "driver", name: "Pierre Gasly", age: 30, country: "France", team: "Alpine", yearsDriving: 10, image: "2026alpinepiegas01right.avif" },
    { tag: "driver", name: "Franco Colapinto", age: 23, country: "Argentina", team: "Alpine", yearsDriving: 2, image: "2026alpinefracol01right.avif" },

    { tag: "driver", name: "Liam Lawson", age: 24, country: "New Zealand", team: "Racing Bulls", yearsDriving: 3, image: "2026racingbullslialaw01right.avif" },
    { tag: "driver", name: "Arvid Lindblad", age: 19, country: "United Kingdom", team: "Racing Bulls", yearsDriving: 1, image: "2026racingbullsarvlin01right.avif" },

    { tag: "driver", name: "Esteban Ocon", age: 30, country: "France", team: "Haas", yearsDriving: 10, image: "2026haasestoco01right.avif" },
    { tag: "driver", name: "Oliver Bearman", age: 21, country: "United Kingdom", team: "Haas", yearsDriving: 2, image: "2026haasolibea01right.avif" },

    { tag: "driver", name: "Carlos Sainz", age: 32, country: "Spain", team: "Williams", yearsDriving: 12, image: "2026williamscarsai01right.avif" },
    { tag: "driver", name: "Alexander Albon", age: 30, country: "Thailand", team: "Williams", yearsDriving: 7, image: "2026williamsalealb01right.avif" },

    { tag: "driver", name: "Nico Hulkenberg", age: 39, country: "Germany", team: "Audi", yearsDriving: 15, image: "2026audinichul01right.avif" },
    { tag: "driver", name: "Gabriel Bortoleto", age: 22, country: "Brazil", team: "Audi", yearsDriving: 2, image: "2026audigabbor01right.avif" },

    { tag: "driver", name: "Fernando Alonso", age: 45, country: "Spain", team: "Aston Martin", yearsDriving: 24, image: "2026astonmartinferalo01right.avif" },
    { tag: "driver", name: "Lance Stroll", age: 28, country: "Canada", team: "Aston Martin", yearsDriving: 10, image: "2026astonmartinlanstr01right.avif" },

    { tag: "driver", name: "Sergio Perez", age: 36, country: "Mexico", team: "Cadillac", yearsDriving: 16, image: "2026cadillacserper01right.avif" },
    { tag: "driver", name: "Valtteri Bottas", age: 37, country: "Finland", team: "Cadillac", yearsDriving: 14, image: "2026cadillacvalbot01right.avif" }
];

