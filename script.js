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
        occupation: "Jujutsu Sorcer"
    },

    {
        name: "Megumi",
        surname: "Fushiguro",
        age: 15,
        occupation: "Jujutsu Sorcer"
    },

    {
        name: "Nobara",
        surname: "Kugisaki",
        age: 16,
        occupation: "Jujutsu Sorcer"
    },

    {
        name: "Maki",
        surname: "Zenin",
        age: 16,
        occupation: "Jujutsu Sorcer"
    },

    {
        name: "Toge",
        surname: "Inumaki",
        age: 17,
        occupation: "Jujutsu Sorcer"
    },

    {
        name: "Panda",
        surname: "",
        age: 17,
        occupation: "Jujutsu Sorcer"
    },

    {
        name: "Yuta",
        surname: "Okkotsu",
        age: 17,
        occupation: "Jujutsu Sorcer"
    }

];



//4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.

printTokyoJujutsuHigh(tokyoJujutsuHigh);

//5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

let nameUtente = prompt("Nome:");
let surnameUtente = prompt("Cognome:");
let ageUtente = Math.floor(prompt("Età:"));

tokyoJujutsuHigh.push(

    utente = {
        name: nameUtente,
        surname: surnameUtente,
        age: ageUtente,
        occupation: "Jujutsu Sorcer"
    }

);

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