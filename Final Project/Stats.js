const tracks = [
    { tag: "circuit", name: "Circuit of the Americas", country: "United States", length: 5.513, laps: 56, image: "track_images/2026trackaustindetailed" },
    
    { tag: "circuit", name: "Baku City Circuit", country: "Azerbaijan", length: 6.003, laps: 51, image: "track_images/2026trackbakudetailed" },
    
    { tag: "circuit", name: "Circuit de Barcelona-Catalunya", country: "Spain", length: 4.657, laps: 66, image: "track_images/2026trackcatalunyadetailed" },
    
    { tag: "circuit", name: "Hungaroring", country: "Hungary", length: 4.381, laps: 70, image: "track_images/2026trackhungaroringdetailed" },
    
    { tag: "circuit", name: "Imola Circuit", country: "Italy", length: 4.909, laps: 63, image: "track_images/2026trackimoladetailed" },
    
    { tag: "circuit", name: "Interlagos", country: "Brazil", length: 4.309, laps: 71, image: "track_images/2026trackinterlagosdetailed" },
    
    { tag: "circuit", name: "Las Vegas Strip Circuit", country: "United States", length: 6.201, laps: 50, image: "track_images/2026tracklasvegasdetailed" },
    
    { tag: "circuit", name: "Lusail International Circuit", country: "Qatar", length: 5.419, laps: 57, image: "track_images/2026tracklusaildetailed" },

    { tag: "circuit", name: "Albert Park Circuit", country: "Australia", length: 5.278, laps: 58, image: "track_images/2026trackmelbournedetailed" },
    
    { tag: "circuit", name: "Autódromo Hermanos Rodríguez", country: "Mexico", length: 4.304, laps: 71, image: "track_images/2026trackmexicocitydetailed" },
    
    { tag: "circuit", name: "Miami International Autodrome", country: "United States", length: 5.412, laps: 57, image: "track_images/2026trackmiamidetailed" },
    
    { tag: "circuit", name: "Circuit de Monaco", country: "Monaco", length: 3.337, laps: 78, image: "track_images/2026trackmontecarlodetailed" },
    
    { tag: "circuit", name: "Circuit Gilles Villeneuve", country: "Canada", length: 4.361, laps: 70, image: "track_images/2026trackmontrealdetailed" },
    
    { tag: "circuit", name: "Autodromo Nazionale Monza", country: "Italy", length: 5.793, laps: 53, image: "track_images/2026trackmonzadetailed" },

    { tag: "circuit", name: "Bahrain International Circuit", country: "Bahrain", length: 5.412, laps: 57, image: "track_images/2026tracksakhirdetailed" },
    
    { tag: "circuit", name: "Shanghai International Circuit", country: "China", length: 5.451, laps: 56, image: "track_images/2026trackshanghaidetailed" },
    
    { tag: "circuit", name: "Silverstone Circuit", country: "United Kingdom", length: 5.891, laps: 52, image: "track_images/2026tracksilverstonedetailed" },

    { tag: "circuit", name: "Marina Bay Street Circuit", country: "Singapore", length: 4.940, laps: 62, image: "track_images/2026tracksingaporedetailed" },
    
    { tag: "circuit", name: "Circuit de Spa-Francorchamps", country: "Belgium", length: 7.004, laps: 44, image: "track_images/2026trackspafrancorchampsdetailed" },

    { tag: "circuit", name: "Red Bull Ring", country: "Austria", length: 4.318, laps: 71, image: "track_images/2026trackspielbergdetailed" },
    
    { tag: "circuit", name: "Suzuka Circuit", country: "Japan", length: 5.807, laps: 53, image: "track_images/2026tracksuzukadetailed" },

    { tag: "circuit", name: "Yas Marina Circuit", country: "United Arab Emirates", length: 5.281, laps: 58, image: "track_images/2026trackyasmarinacircuitdetailed" },
    
    { tag: "circuit", name: "Circuit Zandvoort", country: "Netherlands", length: 4.259, laps: 72, image: "track_images/2026trackzandvoortdetailed" }
];

const drivers = [
    { tag: "driver", name: "George Russell", age: 28, country: "United Kingdom", team: "Mercedes", yearsDriving: 7, image: "driver_images/2026mercedesgeorus01right.avif" },
    { tag: "driver", name: "Kimi Antonelli", age: 19, country: "Italy", team: "Mercedes", yearsDriving: 1, image: "driver_images/2026mercedeskimant01right.avif" },

    { tag: "driver", name: "Charles Leclerc", age: 28, country: "Monaco", team: "Ferrari", yearsDriving: 8, image: "driver_images/2026ferrarichalec01right.avif" },    
    { tag: "driver", name: "Lewis Hamilton", age: 41, country: "United Kingdom", team: "Ferrari", yearsDriving: 20, image: "driver_images/2026ferrarilewham01right.avif" },

    { tag: "driver", name: "Lando Norris", age: 26, country: "United Kingdom", team: "McLaren", yearsDriving: 7, image: "driver_images/2026mclarenlannor01right.avif" },
    { tag: "driver", name: "Oscar Piastri", age: 25, country: "Australia", team: "McLaren", yearsDriving: 4, image: "driver_images/2026mclarenoscpia01right.avif" },

    { tag: "driver", name: "Max Verstappen", age: 29, country: "Netherlands", team: "Red Bull Racing", yearsDriving: 12, image: "driver_images/2026redbullracingmaxver01right.avif" },
    { tag: "driver", name: "Isack Hadjar", age: 22, country: "France", team: "Red Bull Racing", yearsDriving: 2, image: "driver_images/2026redbullracingisahad01right.avif" },

    { tag: "driver", name: "Pierre Gasly", age: 30, country: "France", team: "Alpine", yearsDriving: 10, image: "driver_images/2026alpinepiegas01right.avif" },
    { tag: "driver", name: "Franco Colapinto", age: 23, country: "Argentina", team: "Alpine", yearsDriving: 2, image: "driver_images/2026alpinefracol01right.avif" },

    { tag: "driver", name: "Liam Lawson", age: 24, country: "New Zealand", team: "Racing Bulls", yearsDriving: 3, image: "driver_images/2026racingbullslialaw01right.avif" },
    { tag: "driver", name: "Arvid Lindblad", age: 19, country: "United Kingdom", team: "Racing Bulls", yearsDriving: 1, image: "driver_images/2026racingbullsarvlin01right.avif" },

    { tag: "driver", name: "Esteban Ocon", age: 30, country: "France", team: "Haas", yearsDriving: 10, image: "driver_images/2026haasestoco01right.avif" },
    { tag: "driver", name: "Oliver Bearman", age: 21, country: "United Kingdom", team: "Haas", yearsDriving: 2, image: "driver_images/2026haasolibea01right.avif" },

    { tag: "driver", name: "Carlos Sainz", age: 32, country: "Spain", team: "Williams", yearsDriving: 12, image: "driver_images/2026williamscarsai01right.avif" },
    { tag: "driver", name: "Alexander Albon", age: 30, country: "Thailand", team: "Williams", yearsDriving: 7, image: "driver_images/2026williamsalealb01right.avif" },

    { tag: "driver", name: "Nico Hulkenberg", age: 39, country: "Germany", team: "Audi", yearsDriving: 15, image: "driver_images/2026audinichul01right.avif" },
    { tag: "driver", name: "Gabriel Bortoleto", age: 22, country: "Brazil", team: "Audi", yearsDriving: 2, image: "driver_images/2026audigabbor01right.avif" },

    { tag: "driver", name: "Fernando Alonso", age: 45, country: "Spain", team: "Aston Martin", yearsDriving: 24, image: "driver_images/2026astonmartinferalo01right.avif" },
    { tag: "driver", name: "Lance Stroll", age: 28, country: "Canada", team: "Aston Martin", yearsDriving: 10, image: "driver_images/2026astonmartinlanstr01right.avif" },

    { tag: "driver", name: "Sergio Perez", age: 36, country: "Mexico", team: "Cadillac", yearsDriving: 16, image: "driver_images/2026cadillacserper01right.avif" },
    { tag: "driver", name: "Valtteri Bottas", age: 37, country: "Finland", team: "Cadillac", yearsDriving: 14, image: "driver_images/2026cadillacvalbot01right.avif" }
];

const filterMenu = document.querySelector("#filter-menu");
const filterForm = document.querySelector("#filter-form");

let value = document.querySelector('input[name="filter"]:checked').value;

const content = document.querySelector("#content")

const page = document.querySelector(".page-number").textContent;


function displayTracks (trackList){
    trackList.forEach(track => {
        
    content.innerHTML += `
    <div class="card">
        <img src="${track.image}.avif" alt="${track.name}" class="base-img">
        <img src="${track.image} - Copy.avif" alt="${track.name}" class="rotated-img">
            <div class="track-info">
                <h2>${track.name}</h2>  
                <div class="track-stats">
                    <p>Country: ${track.country}</p>
                    <p>Laps: ${track.laps}</p>
                    <p>Length: ${track.length} km</p>
                </div>   
            </div>
    </div>`
    
    });
};

function displayDrivers (driverList){
    driverList.forEach(driver => {
    
    content.innerHTML += `
    <div class="card">
        <img src="${driver.image}" alt="${driver.name}" class="driver-img">
            <div class="driver-info">
                <h2>${driver.name}</h2>  
                <div class="driver-stats">
                    <p>Country: ${driver.country}</p>
                    <p>Age: ${driver.age}</p>
                    <p>Team: ${driver.team}</p>
                </div>   
            </div>
    </div>`
        
    });
};

filterMenu.addEventListener("click", event => {
        filterForm.classList.toggle("hidden");
});

if (page == 1){

    displayTracks(tracks);
    displayDrivers(drivers);

    filterForm.addEventListener("click", event => {
        value = document.querySelector('input[name="filter"]:checked').value;

        if (value === "tracks"){
            content.innerHTML = "";
            displayTracks(tracks);
        }

        else if(value === "drivers"){
            content.innerHTML = "";
            displayDrivers(drivers);
        }

        else{
            content.innerHTML = "";
            displayTracks(tracks);
            displayDrivers(drivers);
        }
    })

}

else if(page == 2){

    displayDrivers(drivers);

    filterForm.addEventListener("click", event => {
        value = document.querySelector('input[name="filter"]:checked').value;
        const driversCopy = structuredClone(drivers)

        if (value === "country"){
            content.innerHTML = "";
            let sortedList = driversCopy.sort(countrySort)
            displayDrivers(sortedList);
        }

        else if(value === "age"){
            content.innerHTML = "";
            let sortedList = driversCopy.sort(ageSort)
            displayDrivers(sortedList);
        }

        else{
            content.innerHTML = "";
            displayDrivers(drivers);
        }
    })
}

else if(page == 3){

    displayTracks(tracks);
    
    filterForm.addEventListener("click", event => {
        value = document.querySelector('input[name="filter"]:checked').value;
        const tracksCopy = structuredClone(tracks)

        if (value === "laps"){
            content.innerHTML = "";
            let sortedList = tracksCopy.sort(lapSort)
            displayTracks(sortedList);
        }

        else if(value === "length"){
            content.innerHTML = "";
            let sortedList = tracksCopy.sort(lengthSort)
            displayTracks(sortedList);
            console.log(tracksCopy.map(track => track.length));
        }

        else{
            content.innerHTML = "";
            displayTracks(tracks);
        }
    })
}

function lapSort(trackA, trackB) {
    return trackA.laps - trackB.laps;
}

function lengthSort(trackA, trackB) {
    return trackA.length - trackB.length;
}

function ageSort(driverA, driverB){
    return driverA.age - driverB.age
}

function countrySort(driverA, driverB){
    let countryComp =  driverA.country.localeCompare(driverB.country);

    if (countryComp != 0){
        return countryComp;
    }

    return driverA.name.localeCompare(driverB.name);
}