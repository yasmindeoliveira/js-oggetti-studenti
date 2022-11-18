// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

/* let yuji = {
    name: "Yuji",
    surname: "Itadori",
    age: 15,
    occupation: "Jujutsu Sorcer"
};


// 2. Stampare a schermo attraverso un ciclo for (o eventualmente con for-in) tutte le proprietà dell'oggetto.

for (let key in yuji) {

    console.log(key);
    console.log(yuji[key]);

}; */



//3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).

let tokyoJujutsuHigh = [

    {
        name: "Yuji",
        surname: "Itadori",
        age: 15,
        occupation: "Jujutsu Sorcer",
        photo: "./img/Yuji_Itadori_29.webp"
    },

    {
        name: "Megumi",
        surname: "Fushiguro",
        age: 15,
        occupation: "Jujutsu Sorcer",
        photo: "./img/Megumi_Fushiguro_29.webp"
    },

    {
        name: "Nobara",
        surname: "Kugisaki",
        age: 16,
        occupation: "Jujutsu Sorcer",
        photo: "./img/Nobara_Kugisaki_29.webp"
    },

    {
        name: "Maki",
        surname: "Zenin",
        age: 16,
        occupation: "Jujutsu Sorcer",
        photo: "./img/Maki_Zenin_29.webp"
    },

    {
        name: "Toge",
        surname: "Inumaki",
        age: 17,
        occupation: "Jujutsu Sorcer",
        photo: "./img/Toge_Inumaki_29.webp"
    },   
    {
        name: "Panda",
        surname: "",
        age: 17,
        occupation: "Jujutsu Sorcer",
        photo: "./img/Panda_29.webp"
    },

    {
        name: "Yuta",
        surname: "Okkotsu",
        age: 17,
        occupation: "Jujutsu Sorcer",
        photo:"./img/Yuta_Okkotsu_29.webp"
    }

];



//4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.

printTokyoJujutsuHigh(tokyoJujutsuHigh);

//5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

let genere = prompt("Sei maschio o femmina?");
let nameUtente = prompt("Nome:");
let surnameUtente = prompt("Cognome:");
let ageUtente = Math.floor(prompt("Età:"));


if (genere == "maschio") {
    tokyoJujutsuHigh.push(

        utente = {
            name: nameUtente,
            surname: surnameUtente,
            age: ageUtente,
            occupation: "Jujutsu Sorcer",
            photo: "./img/Noritoshi_Kamo_29.webp"
        }
    
    );
} else if (genere == "femmina") {
    tokyoJujutsuHigh.push(

        utente = {
            name: nameUtente,
            surname: surnameUtente,
            age: ageUtente,
            occupation: "Jujutsu Sorcer",
            photo: "./img/Kasumi_Miwa_29.webp"
        }
    
    );
} else {

    tokyoJujutsuHigh.push(

        utente = {
            name: nameUtente,
            surname: surnameUtente,
            age: ageUtente,
            occupation: "Jujutsu Sorcer",
            
        }
    
    );

};


/* console.log(utente); */

console.log(
    `
    ------------------- STUDENTE --------------------

        Nome: ${utente.name}
        Cognome: ${utente.surname}
        Età: ${utente.age}
        Occupazione: ${utente.occupation}

    -------------------------------------------------
    `
);

printCard (tokyoJujutsuHigh);





// -------------------- Funzioni ---------------------------

function printYuji(yuji) {

    console.log(
        `
        ------------------- STUDENTE --------------------

            Nome: ${yuji[i].name}
            Cognome: ${yuji[i].surname}
            Età: ${yuji[i].age}
            Occupazione: ${yuji[i].occupation}

        -------------------------------------------------
        `
    )
}

// stampa array

function printTokyoJujutsuHigh(tokyoJujutsuHigh) {

    /* for (let element of tokyoJujutsuHigh) {

        console.log(element);

        for (let key in element) {

            console.log(key);
            console.log(element[key]);
        };


    }; */


    for (let i = 0; i < tokyoJujutsuHigh.length; i++) {

        console.log(
            `
            ------------------- STUDENTE --------------------

                Nome: ${tokyoJujutsuHigh[i].name}
                Cognome: ${tokyoJujutsuHigh[i].surname}
                Età: ${tokyoJujutsuHigh[i].age}
                Occupazione: ${tokyoJujutsuHigh[i].occupation}

            -------------------------------------------------
            `
        );
    };

};

// Bonus
function printCard (tokyoJujutsuHigh) {

    for (let i=0; i<tokyoJujutsuHigh.length; i++) {

        document.getElementById("studentCard").innerHTML += 
        `
        <div class="card m-4" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 pt-3">
            <img src="${tokyoJujutsuHigh[i].photo}" class="img-fluid rounded-start" alt="${tokyoJujutsuHigh[i].surname} ${tokyoJujutsuHigh[i].name}">
          </div>
          <div class="col-md-8 text-center">
            <div class="card-body">
              <h3 class="card-title">${tokyoJujutsuHigh[i].surname} ${tokyoJujutsuHigh[i].name}</h3>
              <h5 class="card-text">${tokyoJujutsuHigh[i].age}</h5>
              <h5 class="card-text">${tokyoJujutsuHigh[i].occupation}</h5>
              
              
              <img src="./img/code bar.png" class="img-fluid rounded-start" alt="Yuji Itadori">
              

            </div>
          </div>
        </div>
        </div>
        `

    };

}