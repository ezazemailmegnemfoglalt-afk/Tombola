let egyesTombola = document.getElementById("kep1");
let gombok = document.getElementById("gombok");
let meger = document.getElementById("meger");
let megerosites = document.getElementById("megerosites");
let elfogad = document.getElementById("elfogad");
let nemfogad = document.getElementById("nemfogad");
//fizetés cuccai (áfára igényt tartok){oiára meg méginkább}
let fizetesMenuGombok =  document.getElementById("fizetesMenu");
let ar =  document.getElementById("ar");
let peez =  document.getElementById("peez"); //ennek am nincs értelme, nem baj, kell a sorszám (Elo MUsk, 25.07)
let fizetsz = document.getElementById("fizetsz");
let megsemNem = document.getElementById("megsem");
let fizetted = document.getElementById("fizettel");
let tenylegesFizetesMenu = document.getElementById("tenylegesFizetesMenu");
let kuldes = document.getElementById("kuldesgomb")
let neve = document.getElementById("nev");
let kartyaszam = document.getElementById("kartyaSzam");
let hitkod = document.getElementById("hitKod")
let checkbok = document.getElementById("csecsboksz")

let neved = document.getElementById("nev");
let kartyaSzam = document.getElementById("kartyaSzam");
let hitKod = document.getElementById("hitKod");
let lejDat = document.getElementById("lejDat");
let elfogadPipa = document.getElementById("csecsboksz")

let valasztott = 0;
let ara = 500;
let valasztottGomb = 0;


let valasztottId = "kep" + valasztott;
let gombId = "gomb" + valasztottGomb;



function Gomb(elem) {
    let id = elem.id;
    valasztott = id.match(/\d+$/);
    valasztottGomb = id.match(/\d+$/);
    gombId = "gomb" + valasztottGomb;
    valasztottId = "kep" + valasztott

    console.log(gombId);
    
    console.log(valasztott);
    console.log(valasztottId);

    let szam = valasztott
    megerosites.style.display = "block";
    meger.textContent = "Biztos, hogy a(z) " + szam +"-as/es számot választod?";

}


function elfog(){
    if(elfog){        
        fizetesMenu()
    }

}

function nemfog(){
    if(nemfog){
        console.log("akak");
        megerosites.style.display = "none";
    }
}


function fizetesMenu(){
    ar.textContent ="A tombola ára " + ara + " forint lesz";
    console.log("kwlrhgwriueh");
    megerosites.style.display = "none";
    fizetesMenuGombok.style.display = "block"
}



function fizettel(){                                    //ez csak a gyorsabb tesztelés miatt van, a véglegesbúl majd kikerül. mondjuk legegyszerűbb lesz majd a gombot kivenni
    if(fizettel){
        fizetesMenuGombok.style.display = "none";
        let tombolaId = document.getElementById(valasztottId);
        let gomb = document.getElementById(gombId);
        tombolaId.src = "used.png";
        console.log(tombolaId); 
        console.log(gombId);         
        gomb.disabled = true;

    }
}

function megsem(){
    if(megsem){
        fizetesMenuGombok.style.display = "none";
    }
}

function Fizesz(){
    if(Fizesz){
        fizetesMenuGombok.style.display = "none";
        tenylegesFizetesMenu.style.display = "block";

        kartyaSzam.value = "";
        neved.value = "";
        hitKod.value = "";
        lejDat.value = "";

        kartyaSzam.placeholder = "Kártyaszám";
        neved.placeholder = "Teljes név";
        hitKod.placeholder = "Hitelesítési kód";
        lejDat.placeholder = "Lejárati dátum";

        elfogadPipa.checked = false;

    }
}


function Kuldes(){
    if(Kuldes){
        if(kartyaszam.value.trim() != "" && neve.value.trim() != "" && hitkod.value.trim() != "" && checkbok.checked != false){
            tenylegesFizetesMenu.style.display = "none";
            let tombolaId = document.getElementById(valasztottId);
            let gomb = document.getElementById(gombId);
            tombolaId.src = "used.png";
            console.log(tombolaId); 
            console.log(gombId);         
            gomb.disabled = true;
        }

    }
}