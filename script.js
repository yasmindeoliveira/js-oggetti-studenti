// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
let yuji ={
    name: "Yuji Itadori",
    age: 15,
    occupation: "Jujutsu Sorcer"
}


//3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).

let tokyoJujutsuHigh = [

    yuji ={
        name: "Yuji Itadori",
        age: 15,
        occupation: "Jujutsu Sorcer"
    },
    
    megumi ={
        name: "Megumi Fushiguro",
        age: 15,
        occupation: "Jujutsu Sorcer"
    },
    
    nobara ={
        name: "Nobara Kugisaki",
        age: 16,
        occupation: "Jujutsu Sorcer"
    },
    
    maki ={
        name: "Maki Zenin",
        age: 16,
        occupation: "Jujutsu Sorcer"
    },
    
    toge ={
        name: "Toge Inumaki",
        age: 17,
        occupation: "Jujutsu Sorcer"
    },
    
    panda ={
        name: "Panda",
        age: 17,
        occupation: "Jujutsu Sorcer"
    },
    
    yuta ={
        name: "Yuta Okkotsu",
        age: 17,
        occupation: "Jujutsu Sorcer"
    }

];

// 2. Stampare a schermo attraverso un ciclo for (o eventualmente con for-in) tutte le proprietà dell'oggetto.

for (let chiave in yuji){

    console.log(chiave);
    console.log(yuji[chiave]);
}

//4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.

printTokyoJujutsuHigh (tokyoJujutsuHigh);

//5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

let nameUtente = prompt("Nome completo:");
let ageUtente = Math.floor(prompt("Età:"));

tokyoJujutsuHigh.push (

    utente ={
        name: nameUtente,
        age: ageUtente,
        occupation: "Jujutsu Sorcer"
    }

)

console.log (utente)





// -------------------- Funzioni ---------------------------

function printYuji (yuji){

    console.log(
        `
        ------------------- STUDENTE --------------------

            Nome: ${yuji[i].name}
            Età: ${yuji[i].age}
            Occupazione: ${yuji[i].occupation}

        -------------------------------------------------
        `
    )
}

// stampa array

function printTokyoJujutsuHigh (tokyoJujutsuHigh) {

    for (let i=0; i<tokyoJujutsuHigh.length; i++) {

        console.log(
            `
            ------------------- STUDENTE --------------------

                Nome: ${tokyoJujutsuHigh[i].name}
                Età: ${tokyoJujutsuHigh[i].age}
                Occupazione: ${tokyoJujutsuHigh[i].occupation}

            -------------------------------------------------
            `
        )
    };
    
}