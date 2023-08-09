//GESTIONE LOGIN, REGISTRAZIONE E COMPARSA/SCOMPARSA POPUP//

const pulsanteLogin = document.querySelector(".wrapper p")
const formLogin = document.getElementById("entrata")
const sfondoLogin = document.querySelector(".opaco")
const nuovoformLogin = document.getElementById("registra")
const containerButton = document.querySelectorAll(".containers button")
const main = document.querySelector("main")
const accedi = document.getElementById("accedi")
const registrati = document.getElementById("registrati")
const cliente = document.getElementById("cliente")
const nuovoCliente = document.getElementById("nuovo-cliente")
const ritornaLogin = document.getElementById("torna-login")
const xbutton = document.querySelectorAll(".fa-solid")

pulsanteLogin.addEventListener("click", comparsa) //azione click sul tasto login/registrati

function comparsa(){ //funzione comparsa modulo login e scomparsa bottone login in secondo piano
    formLogin.style.display = "block"
    pulsanteLogin.style.opacity = "0"
    pulsanteLogin.style.cursor = "default"
    sfondoLogin.style.display = "block"
}

registrati.onclick = function(){ //azione click su "registrati!" e cambio modulo da login a registrazione
    cliente.style.display = "none"
    nuovoCliente.style.display = "block"
}

ritornaLogin.onclick = function(){ //azione click su "hai già un account?" e cambio modulo da registrazione a login
    cliente.style.display = "block"
    nuovoCliente.style.display = "none"
    email.value = ""
    password.value = ""
    campoEmail.innerHTML = ""
    campoPass.innerHTML = ""
    campoEmail2.innerHTML = ""
    campoPass2.innerHTML = ""
    campoRipass.innerHTML = ""
    email2.value = ""
    password2.value = ""
    ripassword.value = ""
    email2.classList.remove("errore")
    password2.classList.remove("errore")
    ripassword.classList.remove("errore")
    email.classList.remove("errore")
    password.classList.remove("errore")
    privacy.innerHTML = ""
    informativa.checked = false
}

for(let i = 0; i<xbutton.length; i++){ //ciclo for per assegnare la funzione blackout al click su ogni elemento "X" all'interno della card
xbutton[i].addEventListener("click", ()=>{
    blackout()
})}

sfondoLogin.onclick = blackout //assegnazione funzione blackout al div opaco che permette la classica chiusura del popup appena aperto

function blackout(){ //funzione di "reset" di ogni possibile azione avviata in precedenza
    formLogin.style.display = "none"
    pulsanteLogin.style.opacity = "1"
    pulsanteLogin.style.cursor = "pointer"
    sfondoLogin.style.display = "none"
    card.style.display = "none"
    email.value = ""
    password.value = ""
    campoEmail.innerHTML = ""
    campoPass.innerHTML = ""
    campoEmail2.innerHTML = ""
    campoPass2.innerHTML = ""
    campoRipass.innerHTML = ""
    email2.value = ""
    password2.value = ""
    ripassword.value = ""
    email2.classList.remove("errore")
    password2.classList.remove("errore")
    ripassword.classList.remove("errore")
    email.classList.remove("errore")
    password.classList.remove("errore")
    privacy.innerHTML = ""
    informativa.checked = false
    moduloContatti.style.transform = "translate(2800px,0)"
    contatti.style.display = "block"
    nomeContatti.classList.remove("errore")
    cognomeContatti.classList.remove("errore")
    emailContatti.classList.remove("errore")
    telefonoContatti.classList.remove("errore")
    condizioniContatti.checked = false
    spanNomeContatti.innerHTML=""
    spanCognomeContatti.innerHTML=""
    spanEmailContatti.innerHTML=""
    spanTelefonoContatti.innerHTML=""
    spanCondizioniContatti.innerHTML=""
    videoTrailer.innerHTML = ""
    imgCard.classList.remove("ordine2")
    testiCard.classList.remove("ordine")
    episodi.style.display = "none"
    stagioni.style.display="none"
}

//================================================================================================================

//GESTIONE INFORMAZIONI FILM/SERIE TV//

let infoFilm = { //creazione in locale dell'oggetto con le informazioni da richiedere
    "1":{
        "titolo": "Avengers: endgame",
        "sinossi":"Alla deriva nello spazio senza cibo o acqua, Tony Stark vede la propria scorta di ossigeno diminuire di minuto in minuto. Nel frattempo, i restanti Vendicatori affrontano un epico scontro con Thanos.",
        "img":"src/film/avengers-endgame.jpg",
        "rating":"8.4",
        "trailer":"https://www.youtube.com/embed/CcoMZHqxA_U",
        "anno": "2019",
        "durata": "182",
        "genere": "Azione, Avventura"

    },
    "2":{
        "titolo":"Shining",
        "sinossi":"Jack Torrance, aspirante scrittore, accetta l'incarico di guardiano invernale di un albergo in un luogo isolato sulle montagne del Colorado. Ma suo figlio Danny inizia a sperimentare delle visioni riguardo i terribili eventi accaduti nella struttura.",
        "img":"src/film/shining.jpg",
        "rating":"8.4",
        "anno": "1980",
        "durata": "146",
        "genere": "Horror, Thriller",
        "trailer":"https://www.youtube.com/embed/XGqfei5GGDo"
    },
    "3":{
        "titolo":"Rocky",
        "sinossi":"Il pugile dilettante Rocky Balboa ha l'opportunità di raggiungere il successo quando è chiamato a sfidare il campione dei pesi massimi, Apollo Creed. Primo capitolo della fortunata serie, vincitore di tre premi Oscar nel 1977.",
        "img":"src/film/rocky.jpg",
        "rating":"8.1",
        "anno": "1976",
        "durata": "119",
        "genere": "Drammatico",
        "trailer":"https://www.youtube.com/embed/0AE6TnTQkvU"
    },
    "4":{
        "titolo":"Ritorno al futuro",
        "sinossi":"Il diciottenne Marty ha come amico un bislacco scienziato che ha inventato una macchina per viaggiare nel tempo. Grazie ad essa Marty tornerà indietro nel tempo, fino al 1955.",
        "img":"src/film/back-to-the-future.jpg",
        "rating":"8.5",
        "anno": "1985",
        "durata": "116",
        "genere": "Avventura, Commedia, Fantascienza",
        "trailer":"https://www.youtube.com/embed/LjCCDFkECv4"
    },
    "5":{
        "titolo":"Matrix Resurrections",
        "sinossi":"Afflitto da strani ricordi, la vita di Neo prende una svolta inaspettata quando si ritrova all'interno di Matrix, ma non ne è consapevole. Questo cambia quando un uomo entra nel mondo di Neo per fargli capire che la realtà in cui vive non è reale.",
        "img":"src/film/the-matrix-resurrections.jpg",
        "rating":"5.7",
        "anno": "2021",
        "durata": "148",
        "genere": "Azione, Fantascienza",
        "trailer":"https://www.youtube.com/embed/8-UEA3SLKQI"
    },
    "6":{
        "titolo":"Pulp Fiction",
        "sinossi":"Si incrociano le strade di personaggi legati al crimine. Un pugile che mente a un capo banda, due sicari che discutono massaggi ai piedi e panini, una coppia che rapina una caffetteria e altri danno vita a un dramma criminale comico quanto brutale.",
        "img":"src/film/pulp.jpg",
        "rating":"8.9",
        "anno": "1994",
        "durata": "153",
        "genere": "Drammatico, Thriller",
        "trailer":"https://www.youtube.com/embed/mg0GqZmoM9M"
    },
    "7":{
        "titolo":"Jaws - Lo squalo",
        "sinossi":"Un feroce squalo terrorizza una spiaggia del New England. Ad affrontarlo ci sono un poliziotto locale e degli scienziati, che devono lottare anche contro l'ostruzionismo del sindaco.",
        "img":"src/film/jaws.jpg",
        "rating":"8.1",
        "anno": "1975",
        "durata": "125",
        "genere": "Thriller, Drammatico",
        "trailer":"https://www.youtube.com/embed/U1fu_sA7XhE"
    },
    "8":{
        "titolo":"Il Re Leone",
        "sinossi":"Tradito dallo zio che ha ordito un terribile complotto per prendere il potere, il piccolo Simba, leoncino figlio del re della foresta, affronta il proprio destino nel cuore della savana.",
        "img":"src/film/il-re-leone.jpg",
        "rating":"8.5",
        "anno": "2019",
        "durata": "118",
        "genere": "Animazione, Avventura, Azione",
        "trailer":"https://www.youtube.com/embed/DLwmEdOsW8s"
    },
    "9":{
        "titolo":"007 - No Time to Die",
        "sinossi":"Dopo aver lasciato i servizi segreti, Bond si gode una vita tranquilla in Giamaica. Tuttavia, la pace conquistata si rivela di breve durata quando il suo vecchio amico Felix Leiter gli chiede aiuto.",
        "img":"src/film/james-bond-no-time-to-die.jpg",
        "rating":"7.3",
        "anno": "2021",
        "durata": "163",
        "genere": "Azione, Avventura, Thriller",
        "trailer":"https://www.youtube.com/embed/BIhNsAtPbPI"
    },
    "10":{
        "titolo":"The Batman",
        "sinossi":"L'Enigmista, un sadico assassino seriale, inizia a uccidere le principali figure politiche di Gotham. Batman si vede quindi costretto a indagare sulla corruzione in città e a mettere in discussione il passato della propria famiglia.",
        "img":"src/film/the-batman.jpg",
        "rating":"7.8",
        "anno":"2022",
        "durata":"175",
        "genere":"Fantasy, Noir, Azione",
        "trailer":"https://www.youtube.com/embed/JKjSqs5czLA"
    },
    "11":{
        "titolo":"Il cavaliere oscuro (The Dark Knight)",
        "sinossi":"Batman e Jim Gordon si alleano con il nuovo procuratore di Gotham City, Harvey Dent, per combattere il crimine organizzato che dilaga in città e fermare un pericoloso rapinatore, il Joker, che ha gettato la città nell'anarchia.",
        "img":"src/film/dark-knight.jpg",
        "rating":"9.0",
        "anno":"2008",
        "durata":"152",
        "genere":"Azione, Fantasy",
        "trailer":"https://www.youtube.com/embed/yqcDBdk8wpo"
    },
    "12":{
        "titolo":"Scarface",
        "sinossi":"Tony Montana beneficia di un'amnistia da parte del governo cubano per giungere in Florida. Ambizioso e senza scrupoli, escogita un piano per eliminare un boss della mafia locale e prendere il suo posto nel traffico di droga.",
        "img":"src/film/scarface.jpg",
        "rating":"8.3",
        "anno":"1983",
        "durata":"170",
        "genere":"Drammatico",
        "trailer":"https://www.youtube.com/embed/57kRgZK-iAU"
    },
    "13":{
        "titolo":"Top Gun",
        "sinossi":"Un pilota di caccia si innamora della propria bionda istruttrice, Charlotte Blackwood, e si crede responsabile della morte del copilota. L'esperienza nel programma di formazione lo forza a crescere.",
        "img":"src/film/top-gun.jpg",
        "rating":"6.9",
        "anno":"1986",
        "durata":"109",
        "genere":"Avventura, Azione, Drammatico",
        "trailer":"https://www.youtube.com/embed/PqvPtrw3KEQ"
    },
    "14":{
        "titolo":"Ghostbusters - Acchiappafantasmi",
        "sinossi":"Peter, Raymond ed Egon sono stati cacciati dall'università, ma il loro sodalizio contro i fantasmi che popolano New York funziona a meraviglia. E' una lotta dura, ma i nostri eroi non temono nulla, neppure il maligno Gozer il Gozeriano.",
        "img":"src/film/ghostbusters.jpg",
        "rating":"7.8",
        "anno":"1984",
        "durata":"107",
        "genere":"Commedia, Fantasy",
        "trailer":"https://www.youtube.com/embed/6hDkhw5Wkas"
    },
    "A":{
        "titolo":"Peaky Blinders",
        "sinossi":"Tornati nei bassifondi di Birmingham dai campi di battaglia della Prima Guerra Mondiale, i fratelli Tommy e Arthur Shelby sono pronti ad affermarsi nel mondo della criminalità locale con le scommesse illegali e il mercato nero.",
        "puntate": "36",
        "stagioni":"6",
        "genere":"Serie TV",
        "durata":"55-65 minuti circa",
        "sottogenere":"Storico, Gangster, Drammatico, Noir",
        "anno":"2013-2022",
        "rating":"8.8",
        "img":"src/film/peaky-blinders.jpg",
        "a1":"src/film/peaky-blinders.jpg",
        "a2":"src/film/peaky-blinders.jpg",
        "a3":"src/film/peaky-blinders.jpg",
        "a4":"src/film/peaky-blinders.jpg",
        "a5":"src/film/peaky-blinders.jpg",
        "trailer":"https://www.youtube.com/embed/oVzVdvGIC7U"
    },
    "B":{
        "titolo":"Breaking Bad",
        "sinossi":"Un professore di chimica, Walter White, scopre di avere un cancro ai polmoni giudicato incurabile e decide di diventare socio di uno spacciatore di droga, Jesse, nella produzione di anfetamine, di modo da garantire benessere alla famiglia.",
        "puntate": "62",
        "stagioni":"5",
        "genere":"Serie TV",
        "durata":"43-58 minuti circa",
        "sottogenere":"Drammatico, Poliziesco, Thriller",
        "anno":"2008-2013",
        "rating":"9.5",
        "img":"src/film/bb.jpg",
        "a1":"src/film/bb.jpg",
        "a2":"src/film/bb.jpg",
        "a3":"src/film/bb.jpg",
        "a4":"src/film/bb.jpg",
        "a5":"src/film/bb.jpg",
        "trailer":"https://www.youtube.com/embed/HhesaQXLuRY"
    },
    "C":{
        "titolo":"Il Trono di Spade",
        "sinossi":"La lotta per il potere tra sette casate nobiliari provoca massacri e disastri, lasciando la popolazione nella povertà e nel degrado, mentre il mondo è minacciato dall'avvento di un'era glaciale che risveglia forze oscure e creature leggendarie.",
        "puntate": "73",
        "stagioni":"8",
        "genere":"Serie TV",
        "durata":"49-81 minuti circa",
        "sottogenere":"Azione, Avventura, Drammatico",
        "anno":"2011-2019",
        "rating":"9.2",
        "img":"src/film/got.webp",
        "a1":"src/film/got.webp",
        "a2":"src/film/got.webp",
        "a3":"src/film/got.webp",
        "a4":"src/film/got.webp",
        "a5":"src/film/got.webp",
        "trailer":"https://www.youtube.com/embed/KPLWWIOCOOQ"
    },
    "D":{
        "titolo":"Friends",
        "sinossi":"Le vicende di sei amici che vivono a New York nello stesso palazzo e affrontano le giornate insieme. Situazioni problematiche, avventure divertenti e storie d'amore rafforzando sempre di più il loro legame.",
        "puntate": "235",
        "stagioni":"10",
        "genere":"Serie TV",
        "durata":"22 minuti circa",
        "sottogenere":"Sitcom",
        "anno":"1994-2004",
        "rating":"8.9",
        "img":"src/film/friends.jpg",
        "a1":"src/film/friends.jpg",
        "a2":"src/film/friends.jpg",
        "a3":"src/film/friends.jpg",
        "a4":"src/film/friends.jpg",
        "a5":"src/film/friends.jpg",
        "trailer":"https://www.youtube.com/embed/IEEbUzffzrk"
    },
    "E":{
        "titolo":"BoJack Horseman",
        "sinossi":"BoJack è un attore dimenticato che ha vissuto i suoi giorni di gloria grazie a una commedia televisiva. Adesso, affronta crisi esistenziali e dipendenze, mentre cerca di tornare in vetta.",
        "puntate": "77",
        "stagioni":"6",
        "genere":"Serie TV",
        "durata":"25 minuti circa",
        "sottogenere":"Commedia Drammatica, Commedia Nera, Satira",
        "anno":"2014-2020",
        "rating":"8.8",
        "img":"src/film/bojack.jpg",
        "a1":"src/film/bojack.jpg",
        "a2":"src/film/bojack.jpg",
        "a3":"src/film/bojack.jpg",
        "a4":"src/film/bojack.jpg",
        "a5":"src/film/bojack.jpg",
        "trailer":"https://www.youtube.com/embed/i1eJMig5Ik4"
    },
    "F":{
        "titolo":"Rick and Morty",
        "sinossi":"Rick, uno scienziato sociopatico, e il nipote Morty, un adolescente, si trovano coinvolti in avventure bizzarre in luoghi sconosciuti dell'universo, a contatto con realtà oltre ogni possibile immaginazione.",
        "puntate": "61",
        "stagioni":"6",
        "genere":"Serie TV",
        "durata":"22 minuti circa",
        "sottogenere":"Fantascienza, Avventura, Commedia nera",
        "anno":"2013 - in corso",
        "rating":"9.1",
        "img":"src/film/rick.jpg",
        "a1":"src/film/rick.jpg",
        "a2":"src/film/rick.jpg",
        "a3":"src/film/rick.jpg",
        "a4":"src/film/rick.jpg",
        "a5":"src/film/rick.jpg",
        "trailer":"https://www.youtube.com/embed/_uUcMwsR5hg"
    },
    "G":{
        "titolo":"The Boys",
        "sinossi":"Quando i supereroi fanno un uso improprio dei loro poteri, una squadra speciale si lancia in un'eroica missione per svelare tutti i loro segreti e infliggere loro la giusta punizione.",
        "puntate": "24",
        "stagioni":"3",
        "genere":"Serie TV",
        "durata":"54-68 minuti circa",
        "sottogenere":"Azione, Commedia nera, Satira, Supereroi",
        "anno":"2019 - in corso",
        "rating":"8.7",
        "img":"src/film/the-boys.jpg",
        "a1":"src/film/the-boys.jpg",
        "a2":"src/film/the-boys.jpg",
        "a3":"src/film/the-boys.jpg",
        "a4":"src/film/the-boys.jpg",
        "a5":"src/film/the-boys.jpg",
        "trailer":"https://www.youtube.com/embed/zQE-tZDXqP0"
    },
    "H":{
        "titolo":"Dr. House - Medical Division",
        "sinossi":"Un brillante medico con un carattere fuori dal comune risolve difficili casi clinici affidandosi al proprio intuito e a indizi poco evidenti, riuscendo così a salvare la vita di numerosi pazienti.",
        "puntate": "177",
        "stagioni":"8",
        "genere":"Serie TV",
        "durata":"45 minuti circa",
        "sottogenere":"Medico, Drammatico",
        "anno":"2004-2012",
        "rating":"8.7",
        "img":"src/film/dr-house.jpg",
        "a1":"src/film/dr-house.jpg",
        "a2":"src/film/dr-house.jpg",
        "a3":"src/film/dr-house.jpg",
        "a4":"src/film/dr-house.jpg",
        "a5":"src/film/dr-house.jpg",
        "trailer":"https://www.youtube.com/embed/64LGOCKxTdE"
    },
    "I":{
        "titolo":"Grey's Anatomy",
        "sinossi":"Le vicende di alcuni medici di Seattle che si districano tra lavoro e problemi quotidiani. Tra di essi Meredith, figlia di un noto chirurgo, costretta a gestire non solo i propri rapporti interpersonali, ma anche il peso di una importante eredità.",
        "puntate": "420",
        "stagioni":"19",
        "genere":"Serie TV",
        "durata":"45 minuti circa",
        "sottogenere":"Medico, Drammatico",
        "anno":"2005 - in corso",
        "rating":"7.6",
        "img":"src/film/grey.jpg",
        "a1":"src/film/grey.jpg",
        "a2":"src/film/grey.jpg",
        "a3":"src/film/grey.jpg",
        "a4":"src/film/grey.jpg",
        "a5":"src/film/grey.jpg",
        "trailer":"https://www.youtube.com/embed/q1pcpgREQ5c"
    }
}

const card = document.querySelector(".my-card")
const internoCard = document.querySelector(".my-card-row")
const titoloCard = document.querySelector(".my-card-title")
const sinossiCard = document.querySelector(".my-card-text")
const imgCard = document.querySelector(".my-card-col-img")
const testiCard = document.querySelector(".my-card-col-content")
const rating = document.querySelector(".rating")
const video = document.querySelector(".video-background")
const trailerButton = document.querySelectorAll(".trailer")
const videoTrailer = document.querySelector(".video-trailer")
const vetro = document.querySelector(".vetro")
const episodi = document.querySelector(".episodi")
const stagioni = document.querySelector(".stagioni")


for (let i = 0; i < containerButton.length; i++){ //ciclo for per gestire i bottoni in hover sulle copertine
containerButton[i].addEventListener("click", ()=>{
    sfondoLogin.style.display = "block"
    card.style.display = "block"

    mostraInfo(containerButton[i].value)

    function mostraInfo(value){
    let dettagli = infoFilm[value]

if(dettagli.genere != "Serie TV"){ //gestione stampa informazioni film
    
    titoloCard.innerHTML = `<h3>${dettagli.titolo}</h3>`
    sinossiCard.innerHTML = `
    <p>${dettagli.sinossi}</p>
    <h4>Genere:  </h4>${dettagli.genere}<br>
    <h4>Anno:  </h4>${dettagli.anno}<br>
    <h4>Durata:  </h4>${dettagli.durata} min<br>
    <h4>Valutazione IMDb: </h4>${dettagli.rating}/10
    `    
    imgCard.innerHTML = `<img src="${dettagli.img}" class="my-card-img" alt="..."></img>`
         
} else{ //gestione stampa informazioni serie tv
    testiCard.classList.add("ordine")
    titoloCard.innerHTML = `<h3>${dettagli.titolo}</h3>`
    sinossiCard.innerHTML = `
    <p>${dettagli.sinossi}</p>
    <h4>Genere:  </h4>${dettagli.genere}, ${dettagli.sottogenere}<br>
    <h4>Anno:  </h4>${dettagli.anno}<br>
    <h4>Durata puntata:  </h4>${dettagli.durata}<br>
    <h4>Valutazione IMDb: </h4>${dettagli.rating}/10<br>
    <h4>Stagioni:</h4>  ${dettagli.stagioni} - 
    <h4>Episodi:</h4>  ${dettagli.puntate}
    `    
    imgCard.classList.add("ordine2")
    imgCard.innerHTML = `<img src="${dettagli.img}" class="my-card-img fotoserie" alt="..."></img>`
    episodi.style.display="flex"
    stagioni.style.display="block"
    stagioni.innerHTML=`
    <select>
    <option selected>Stagione 1</option>
    <option>Stagione 2</option>
    <option>Stagione 3</option>
    <option>Stagione 4</option>
    <option>Stagione 5</option>
    <option>Stagione 6</option>
    </select>
    `
    episodi.innerHTML = `
    <div class="div-episodi"><img src="${dettagli.a1}" class="" alt="..."></img>
    <p>Episodio 1</p>
    <i class="fa-solid fa-circle-play" style="color: #ffffff;"></i>
    </div>

    <div class="div-episodi"><img src="${dettagli.a1}" class="" alt="..."></img>
    <p>Episodio 2</p>
    <i class="fa-solid fa-circle-play" style="color: #ffffff;"></i>
    </div>

    <div class="div-episodi"><img src="${dettagli.a1}" class="" alt="..."></img>
    <p>Episodio 3</p>
    <i class="fa-solid fa-circle-play" style="color: #ffffff;"></i>
    </div>

    <div class="div-episodi"><img src="${dettagli.a1}" class="" alt="..."></img>
    <p>Episodio 4</p>
    <i class="fa-solid fa-circle-play" style="color: #ffffff;"></i>
    </div>

    <div class="div-episodi"><img src="${dettagli.a1}" class="" alt="...">
    <p>Episodio 5</p>
    <i class="fa-solid fa-circle-play" style="color: #ffffff;"></i></img>
    </div>

    <div class="div-episodi"><img src="${dettagli.a1}" class="" alt="...">
    <p>Episodio 6</p>
    <i class="fa-solid fa-circle-play" style="color: #ffffff;"></i></img>
    </div>

    <div class="div-episodi"><img src="${dettagli.a1}" class="" alt="...">
    <p>Episodio 7</p>
    <i class="fa-solid fa-circle-play" style="color: #ffffff;"></i></img>
    </div>
    `
}



for (let i = 0; i < trailerButton.length; i++){
        trailerButton[i].addEventListener("click", ()=>{

            videoTrailer.innerHTML = `
            <div class="vetro">
            <i class="fa-solid fa-xmark" style="color: #ccc;" id="xtrailer"></i>
            <iframe width="595" height="350" src="${dettagli.trailer}?autoplay=1&rel=0&mute=1" frameborder="0" allow="accelerometer; autoplay" allowfullscreen></iframe></div>
            `

            let xtrailer = document.querySelector("#xtrailer")

            xtrailer.onclick = ()=>{
                videoTrailer.innerHTML=""
            }
            

        })
}

    

}
})

}

//================================================================================================================

//GESTIONE VALIDAZIONE CAMPI LOGIN E REGISTRAZIONE//

const email = document.querySelector("#email")
const password = document.querySelector("#password")
const email2 = document.querySelector("#email2")
const password2 = document.querySelector("#password2")
const ripassword = document.querySelector("#ripassword")
const campoEmail = document.querySelector("#campo-email")
const campoPass = document.querySelector("#campo-pass")

formLogin.addEventListener("submit", (event)=>{ //preventDefault del submit, regExp e gestione errore del form login
    
    for(let i=0; i<formLogin.elements.length - 1; i++){
        formLogin.elements[i].addEventListener("focus", gestisciResetCampo)
    }
    
    function gestisciResetCampo(){
        campoEmail.innerHTML = ""
        campoPass.innerHTML = ""
        email.classList.remove("errore")
        password.classList.remove("errore")
    }

    event.preventDefault()
   
    if(isValidModulo() == true){
        alert("Log-in effettutato correttamente")
        email.value=""
        password.value=""
    }

    function isValidModulo(){
        return isValidUser() & isValidPassword()
    }
    
    function isValidUser(){
        let regExpEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
        
        let validityUser = regExpEmail.test(email.value.trim())
    
        gestisciErroreCampo(campoEmail, email, validityUser, "l'email inserita non è valida")
    
        return validityUser
    }
    
    
    function isValidPassword(){
        let regExpPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
    
        let validityPass = regExpPassword.test(password.value.trim())
        gestisciErroreCampo(campoPass, password, validityPass, "La password deve contenere almeno un numero, una lettera e lunga almeno 8 caratteri")
    
        return validityPass
    
    }
    

function gestisciErroreCampo(campoX, campoY, validityCampoX, messaggioErrore){
        if(validityCampoX == true){
            rimuoviErrore(campoX)
        } else{
            aggiungiErrore(campoX, messaggioErrore, campoY)
        }
    }
    
    function rimuoviErrore(campoX){
        campoX.classList.remove("errore")
    }
    
    function aggiungiErrore(campoX, messaggioErrore, campoY){
        campoX.innerHTML = messaggioErrore
        campoY.classList.add("errore")

    }
   
    
})

const campoEmail2 = document.querySelector("#campo-email2")
const campoPass2 = document.querySelector("#campo-pass2")
const campoRipass = document.querySelector("#campo-ripass")
const privacy = document.querySelector("#privacy-span")
const informativa = document.querySelector("#informativa")

nuovoformLogin.addEventListener("submit", (event)=>{ //preventDefault del submit, regExp e gestione errore del form di registrazione
    
    for(let i=0; i<nuovoformLogin.elements.length - 1; i++){
        nuovoformLogin.elements[i].addEventListener("focus", gestisciResetCampo)
    }
    
    function gestisciResetCampo(){
        campoEmail2.innerHTML = ""
        campoPass2.innerHTML = ""
        campoRipass.innerHTML = ""
        privacy.innerHTML = ""
        email2.classList.remove("errore")
        password2.classList.remove("errore")
        ripassword.classList.remove("errore")
        informativa.checked = false
    }

    event.preventDefault()
   
    if(isValidModulo() == true){
        alert("Registrazione effettutata correttamente!")
        email2.value=""
        password2.value=""
        ripassword.value=""
        informativa.checked = false
    }

    function isValidModulo(){
        return isValidUser() & isValidPassword() & isValidPassword2() & isValidPrivacy()
    }
    
    function isValidUser(){
        let regExpEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
        
        let validityUser = regExpEmail.test(email2.value.trim())
    
        gestisciErroreCampo(campoEmail2, email2, validityUser, "l'email inserita non è valida")
    
        return validityUser
    }
    
    
    function isValidPassword(){
        let regExpPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
    
        let validityPass = regExpPassword.test(password2.value.trim())
        gestisciErroreCampo(campoPass2, password2, validityPass, "La password deve contenere almeno un numero, una lettera e lunga almeno 8 caratteri")
    
        return validityPass
    
    }

    function isValidPassword2(){
        let regExpPassword2 = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

        let validityPass2 = regExpPassword2.test(ripassword.value.trim());
      
        if (validityPass2 && ripassword.value.trim() === password2.value.trim()) {
          return true;
        } else{
          gestisciErroreCampo(campoRipass, ripassword, false, "Le password non corrispondono!");
          return false;
        }
    
    }
    
    function isValidPrivacy(){

        if(informativa.checked == true){
            return true
        } else{
            gestisciErroreCampo(privacy, informativa, false, "Prima accetta la normativa per la privacy");
            return false;
        }

    }

function gestisciErroreCampo(campoX, campoY, validityCampoX, messaggioErrore){
        if(validityCampoX == true){
            rimuoviErrore(campoX, campoY)
        } else{
            aggiungiErrore(campoX, messaggioErrore, campoY)
        }
    }
    
    function rimuoviErrore(campoX){
        campoX.classList.remove("errore")
    }
    
    function aggiungiErrore(campoX, messaggioErrore, campoY){
        campoX.innerHTML = messaggioErrore
        campoY.classList.add("errore")
    }
   
    
})

//================================================================================================================

//GESTIONE POPUP "CONTATTACI!" E COMPARSA POPUP CONTATTI

const contatti = document.getElementById("contatti")
const moduloContatti = document.getElementById("modulo")

contatti.addEventListener("click", ()=>{ //gestione click popup "contattaci!"
    moduloContatti.style.display = "flex"
    sfondoLogin.style.display = "block"
    moduloContatti.style.transform = "translate(0)"
    contatti.style.display = "none"
})

const formContatti = document.querySelector("#form-contatti")
const spanNomeContatti = document.getElementById("campo-nome-contatti")
const spanCognomeContatti = document.getElementById("campo-cognome-contatti")
const spanEmailContatti = document.getElementById("campo-email-contatti")
const spanTelefonoContatti = document.getElementById("campo-telefono-contatti")
const spanCondizioniContatti = document.getElementById("campo-condizioni-contatti")

const nomeContatti = document.getElementById("nome-contatti")
const cognomeContatti = document.getElementById("cognome-contatti")
const emailContatti = document.getElementById("email-contatti")
const telefonoContatti = document.getElementById("telefono")
const condizioniContatti = document.getElementById("accetto-contatti")

formContatti.addEventListener("submit", (event)=>{ //preventDefault del submit, regExp e gestione errore del modulo contatti
    
    for(let i=0; i<formContatti.elements.length - 1; i++){
        formContatti.elements[i].addEventListener("focus", gestisciResetCampo)
    }
    
    function gestisciResetCampo(){
        nomeContatti.classList.remove("errore")
        cognomeContatti.classList.remove("errore")
        emailContatti.classList.remove("errore")
        telefonoContatti.classList.remove("errore")
        condizioniContatti.checked = false
        spanNomeContatti.innerHTML=""
        spanCognomeContatti.innerHTML=""
        spanEmailContatti.innerHTML=""
        spanTelefonoContatti.innerHTML=""
        spanCondizioniContatti.innerHTML=""
    }

    event.preventDefault()
   
    if(isValidModulo() == true){
        alert("Messaggio inviato correttamente!")
        nomeContatti.value=""
        cognomeContatti.value=""
        emailContatti.value=""
        telefonoContatti.value=""
        condizioniContatti.checked = false
    }

    function isValidModulo(){
        return isValidUser() & isValidCognome() & isValidEmail() & isValidTel() & isValidPrivacy()
    }
    
    function isValidUser(){
        let regExpNome = /^[a-zA-Z]+$/
        
        let validityUser = regExpNome.test(nomeContatti.value.trim())
    
        gestisciErroreCampo(spanNomeContatti, nomeContatti, validityUser, "Il nome inserito non è valido")
    
        return validityUser
    }
    
    
    function isValidCognome(){
        let regExpPassword = /^(?!^\s+$)[a-zA-Z\s]+$/
    
        let validityPass = regExpPassword.test(cognomeContatti.value.trim())
        gestisciErroreCampo(spanCognomeContatti, cognomeContatti, validityPass, "Il cognome inserito non è valido")
    
        return validityPass
    
    }

    function isValidEmail(){
        let regExpEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
        
        let validityEmail = regExpEmail.test(emailContatti.value.trim())
    
        gestisciErroreCampo(spanEmailContatti, emailContatti, validityEmail, "L'email inserita non è valida")
    
        return validityEmail
    }

    function isValidTel(){
        let regExpTel =  /^((00|\+)39[\. ]??)??3\d{2}[\. ]??\d{6,7}$/ 
        let validityTel = regExpTel.test(telefonoContatti.value.trim())
       
        gestisciErroreCampo(spanTelefonoContatti, telefonoContatti, validityTel, "Il telefono inserito non è valido")
    
        return validityTel
    }
    
    function isValidPrivacy(){

        if(condizioniContatti.checked == true){
            return true
        } else{
            gestisciErroreCampo(spanCondizioniContatti, condizioniContatti, false, "Prima accetta la normativa per la privacy");
            return false;
        }

    }

function gestisciErroreCampo(campoX, campoY, validityCampoX, messaggioErrore){
        if(validityCampoX == true){
            rimuoviErrore(campoX)
        } else{
            aggiungiErrore(campoX, messaggioErrore, campoY)
        }
    }
    
    function rimuoviErrore(campoX){
        campoX.classList.remove("errore")
    }
    
    function aggiungiErrore(campoX, messaggioErrore, campoY){
        campoX.innerHTML = messaggioErrore
        campoY.classList.add("errore")

    }
   
    
})

//================================================================================================================
