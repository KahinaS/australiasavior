const plus1 = document.getElementById("plus1");
const plus2 = document.getElementById("plus2");
const plus3 = document.getElementById("plus3");
const plus4 = document.getElementById("plus4");
const plus5 = document.getElementById("plus5");
const changeMap = document.getElementById("changeMap");
const btnClicker = document.getElementById("btnClicker");
const autoClicker = document.getElementById("autoClicker");
const display = document.getElementById("display");
const displaySecond = document.getElementById("displaySecond");
const multiplierBucket = document.getElementById("multiplierBucket");
const multiplierBucketCounts = document.getElementById("multiplierBucketCounts");
const multiplierFirefighter = document.getElementById("multiplierFirefighter");
const multiplierFirefighterCounts = document.getElementById("multiplierFirefighterCounts");
const multiplierAircraft = document.getElementById("multiplierAircraft");
const multiplierAircraftCounts = document.getElementById("multiplierAircraftCounts");
const multiplierKoala = document.getElementById("multiplierKoala");
const multiplierKoalaCounts = document.getElementById("multiplierKoalaCounts");
const multiplierZoo = document.getElementById("multiplierZoo");
const multiplierZooCounts = document.getElementById("multiplierZooCounts");
const multiplierFunds = document.getElementById("multiplierFunds");
const multiplierFundsCounts = document.getElementById("multiplierFundsCounts");
const multiplierRain = document.getElementById("multiplierRain");
const multiplierRainCounts = document.getElementById("multiplierRainCounts");
const multiplierHouse = document.getElementById("multiplierHouse");
const multiplierHouseCounts = document.getElementById("multiplierHouseCounts");
const multiplierTree = document.getElementById("multiplierTree");
const multiplierTreeCounts = document.getElementById("multiplierTreeCounts");
const multiplierAnimals = document.getElementById("multiplierAnimals");
const multiplierAnimalsCounts = document.getElementById("multiplierAnimalsCounts");
const multiplierInternational = document.getElementById("multiplierInternational");
const multiplierInternationalCounts = document.getElementById("multiplierInternationalCounts");
const multiplierDivine = document.getElementById("multiplierDivine");
const multiplierDivineCounts = document.getElementById("multiplierDivineCounts");
const multiplierAlien = document.getElementById("multiplierAlien");
const multiplierAlienCounts = document.getElementById("multiplierAlienCounts");
const tooltipBucket = document.getElementById("tooltipBucket");
const tooltipFirefighter = document.getElementById("tooltipFirefighter");
const tooltipAircraft = document.getElementById("tooltipAircraft");
const tooltipKoala = document.getElementById("tooltipKoala");
const tooltipZoo = document.getElementById("tooltipZoo");
const tooltipFunds = document.getElementById("tooltipFunds");
const tooltipRain = document.getElementById("tooltipRain");
const tooltipHouse = document.getElementById("tooltipHouse");
const tooltipTree = document.getElementById("tooltipTree");
const tooltipAnimals = document.getElementById("tooltipAnimals");
const tooltipInternational = document.getElementById("tooltipInternational");
const tooltipDivine = document.getElementById("tooltipDivine");
const tooltipAlien = document.getElementById("tooltipAlien");
<<<<<<< HEAD
let score = 0;
=======
let score = 9999999999;
>>>>>>> 431fc3d310bce3ce96ffbdafff794495356d0423
let count = 1;
let autoclickerPrice = 200;
let autoclickerCount = 1;
let multiplierBucketCount = 0;
let multiplierBucketPrice = 15;
let multiplierFirefighterCount = 0;
let multiplierFirefighterPrice = 100;
let multiplierAircraftCount = 0;
let multiplierAircraftPrice = 1100;
let multiplierKoalaCount = 0;
let multiplierKoalaPrice = 12000;
let multiplierZooCount = 0;
let multiplierZooPrice = 130000;
let multiplierFundsCount = 0;
let multiplierFundsPrice = 1400000;
let multiplierRainCount = 0;
let multiplierRainPrice = 20000000;
let multiplierHouseCount = 0;
let multiplierHousePrice = 330000000;
let multiplierTreeCount = 0;
let multiplierTreePrice = 5100000000;
let multiplierAnimalsCount = 0;
let multiplierAnimalsPrice = 75000000000;
let multiplierInternationalCount = 0;
let multiplierInternationalPrice = 1000000000000;
let multiplierDivineCount = 0;
let multiplierDivinePrice = 14000000000000;
let multiplierAlienCount = 0;
let multiplierAlienPrice = 170000000000000;
let bucketWater = "img/throw.png";
let fireman = "img/fireman.png";
let aircraft = "img/aircraft.png";
let hospital = "img/hospital.png";
let zoo = "img/zoo.png";
let collect = "img/money.png";
let rain = "img/thunderstorm.png";
let house = "img/mansion.png";
let tree = "img/forest.png";
let animal = "img/stroller.png";
let mondial = "img/earth.png";
let god = "img/jesus.png";
let alien = "img/alien.png";


function randomImageBucket() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60; // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.children.length; i++) {
        let newClass = "theBucket"+i;
        elem.classList.add(newClass);
        elem.classList.add("theBucket");
        elem.classList.add("noselect");
        if (elem.classList.contains("theBucket"+(i - 1))) {
            elem.classList.remove("theBucket"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
    elem.src = bucketWater;
    elem.setAttribute("height", "30"); // TAILLE DE NOTRE IMAGE
    elem.setAttribute("width", "30"); //LARGEUR DE NOTRE IMAGE
    elem.style.left = randomX;
    elem.style.top = randomY;
    container.appendChild(elem);
 
}

function randomImageFireman() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap");
    var availW = container.offsetWidth - 60;
    var availH = container.offsetHeight - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "fireman"+i;
        elem.classList.add(newClass);
        elem.classList.add("fireman");
        elem.classList.add("noselect");
        if (elem.classList.contains("fireman"+(i - 1))) {
            elem.classList.remove("fireman"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = fireman;
        elem.setAttribute("height", "30");
        elem.setAttribute("width", "30");
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    
}


function randomImageAircraft() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60; // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "plane"+i;
        elem.classList.add(newClass);
        elem.classList.add("plane");
        elem.classList.add("noselect");
        if (elem.classList.contains("plane"+(i - 1))) {
            elem.classList.remove("plane"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = aircraft;
        elem.setAttribute("height", "30"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "30"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    
}

function randomImageHospital() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60; // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "hospital"+i;
        elem.classList.add(newClass);
        elem.classList.add("hospital");
        elem.classList.add("noselect");
        if (elem.classList.contains("hospital"+(i - 1))) {
            elem.classList.remove("hospital"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = hospital;
        elem.setAttribute("height", "30"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "30"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    
}

function randomImageZoo() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60; // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "zoo"+i;
        elem.classList.add(newClass);
        elem.classList.add("zoo");
        elem.classList.add("noselect");
        if (elem.classList.contains("zoo"+(i - 1))) {
            elem.classList.remove("zoo"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = zoo;
        elem.setAttribute("height", "30"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "30"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    
}

function randomImageCollect() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60; // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "collectMoney"+i;
        elem.classList.add(newClass);
        elem.classList.add("collectMoney");
        elem.classList.add("noselect");
        if (elem.classList.contains("collectMoney"+(i - 1))) {
            elem.classList.remove("collectMoney"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = collect;
        elem.setAttribute("height", "30"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "30"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    
}

function randomImageRain() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60; // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "raining"+i;
        elem.classList.add(newClass);
        elem.classList.add("raining");
        elem.classList.add("noselect");
        if (elem.classList.contains("raining"+(i - 1))) {
            elem.classList.remove("raining"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = rain;
        elem.setAttribute("height", "30"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "30"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    
}

function randomImageHouse() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60; // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "homes"+i;
        elem.classList.add(newClass);
        elem.classList.add("homes");
        elem.classList.add("noselect");
        if (elem.classList.contains("homes"+(i - 1))) {
            elem.classList.remove("homes"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = house;
        elem.setAttribute("height", "30"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "30"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    
}


function randomTree() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60; // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "trees"+i;
        elem.classList.add(newClass);
        elem.classList.add("trees");
        elem.classList.add("noselect");
        if (elem.classList.contains("trees"+(i - 1))) {
            elem.classList.remove("trees"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = tree;
        elem.setAttribute("height", "30"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "30"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
   
}


function randomImageAnimal() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60; // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "animals"+i;
        elem.classList.add(newClass);
        elem.classList.add("animals");
        elem.classList.add("noselect");
        if (elem.classList.contains("animals"+(i - 1))) {
            elem.classList.remove("animals"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = animal;
        elem.setAttribute("height", "30"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "30"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    
}


function randomImageMondial() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60; // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "mondials"+i;
        elem.classList.add(newClass);
        elem.classList.add("mondials");
        elem.classList.add("noselect");
        if (elem.classList.contains("mondials"+(i - 1))) {
            elem.classList.remove("mondials"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = mondial;
        elem.setAttribute("height", "30"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "30"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    
}

function randomImageGod() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap");
    var availW = container.offsetWidth - 60;
    var availH = container.offsetHeight - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "gods"+i;
        elem.classList.add(newClass);
        elem.classList.add("gods");
        elem.classList.add("noselect");
        if (elem.classList.contains("gods"+(i - 1))) {
            elem.classList.remove("gods"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = god;
        elem.setAttribute("height", "30");
        elem.setAttribute("width", "30");
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    
}

function randomImageAlien() {
    var elem = document.createElement("img");
    var container = document.getElementById("displayRandomMap");
    var availW = container.offsetWidth - 60;
    var availH = container.offsetHeight - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';
    for (let i = 0; i < container.childElementCount; i++) {
        let newClass = "aliens"+i;
        elem.classList.add(newClass);
        elem.classList.add("aliens");
        elem.classList.add("noselect");
        if (elem.classList.contains("aliens"+(i - 1))) {
            elem.classList.remove("aliens"+(i - 1));
        }
        elem.style.opacity = "1";
    setTimeout (function () {
        elem.style.transition = "opacity 0.5s ease";
        elem.style.opacity = "0";
    }, 3000);
}
        elem.src = alien;
        elem.setAttribute("height", "30");
        elem.setAttribute("width", "30");
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    
}


btnClicker.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});

btnClicker.addEventListener("mousedown", function () {
    let random = Math.floor(Math.random() * 5);
    if (random === 0) {
        plus1.innerHTML = `+${count.toFixed(2)}<img src="img/cash.svg" class="ml-2 w-10">`;
        plus1.classList.remove("hidden");
        setTimeout(() => {
            plus1.classList.add("hidden");
        }, 600);
    }
    if (random === 1) {
        plus2.innerHTML = `+${count.toFixed(2)}<img src="img/cash.svg" class="ml-2 w-10">`;
        plus2.classList.remove("hidden");
        setTimeout(() => {
            plus2.classList.add("hidden");
        }, 600);
    }
    if (random === 2) {
        plus3.innerHTML = `+${count.toFixed(2)}<img src="img/cash.svg" class="ml-2 w-10">`;
        plus3.classList.remove("hidden");
        setTimeout(() => {
            plus3.classList.add("hidden");
        }, 600);
    }

    if (random === 3) {
        plus4.innerHTML = `+${count.toFixed(2)}<img src="img/cash.svg" class="ml-2 w-10">`;
        plus4.classList.remove("hidden");
        setTimeout(() => {
            plus4.classList.add("hidden");
        }, 600);
    }

    if (random === 4) {
        plus5.innerHTML = `+${count.toFixed(2)}<img src="img/cash.svg" class="ml-2 w-10">`;
        plus5.classList.remove("hidden");
        setTimeout(() => {
            plus5.classList.add("hidden");
        }, 600);
    }
});

function checkNumber() {
    if (score >= 1000 && score <= 1000000) {
        display.innerHTML = `<span>${(score / 1000).toFixed(2)} k de Dons</span>`;
    } else if (score >= 1000000 && score <= 1000000000) {
        display.innerHTML = `<span>${(score / 1000000).toFixed(2)} Million de Dons</span>`;
    } else if (score >= 1000000000 && score <= 1000000000000) {
        display.innerHTML = `<span>${(score / 1000000000).toFixed(2)} Billion de Dons</span>`;
    } else if (score >= 1000000000000 && score <= 1000000000000000) {
        display.innerHTML = `<span>${(score / 1000000000000).toFixed(2)} Trillion de Dons</span>`;
    } else {
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
    }
}

function addScore() {
    score = score + count;
    checkNumber();
    if (score >= multiplierBucketPrice) {
        multiplierBucket.disabled = false;
    } else {
        multiplierBucket.disabled = true;
    }

    if (score >= multiplierFirefighterPrice) {
        multiplierFirefighter.disabled = false;
    } else {
        multiplierFirefighter.disabled = true;
    }

    if (score >= multiplierAircraftPrice) {
        multiplierAircraft.disabled = false;
    } else {
        multiplierAircraft.disabled = true;
    }

    if (score >= multiplierKoalaPrice) {
        multiplierKoala.disabled = false;
    } else {
        multiplierKoala.disabled = true;
    }

    if (score >= multiplierZooPrice) {
        multiplierZoo.disabled = false;
    } else {
        multiplierZoo.disabled = true;
    }

    if (score >= multiplierFundsPrice) {
        multiplierFunds.disabled = false;
    } else {
        multiplierFunds.disabled = true;
    }

    if (score >= multiplierRainPrice) {
        multiplierRain.disabled = false;
    } else {
        multiplierRain.disabled = true;
    }

    if (score >= multiplierHousePrice) {
        multiplierHouse.disabled = false;
    } else {
        multiplierHouse.disabled = true;
    }

    if (score >= multiplierTreePrice) {
        multiplierTree.disabled = false;
    } else {
        multiplierTree.disabled = true;
    }

    if (score >= multiplierAnimalsPrice) {
        multiplierAnimals.disabled = false;
    } else {
        multiplierAnimals.disabled = true;
    }
    if (score >= multiplierInternationalPrice) {
        multiplierInternational.disabled = false;
    } else {
        multiplierInternational.disabled = true;
    }
    if (score >= multiplierDivinePrice) {
        multiplierDivine.disabled = false;
    } else {
        multiplierDivine.disabled = true;
    }
    if (score >= multiplierAlienPrice) {
        multiplierAlien.disabled = false;
    } else {
        multiplierAlien.disabled = true;
    }
    if (score >= autoclickerPrice) {
        autoClicker.disabled = false;
    } else {
        autoClicker.disabled = true;
    }
}

function multiplier1() {
    if (score >= multiplierBucketPrice) {
        multiplierBucket.innerHTML = `Seau d'eau x ${multiplierBucketCount + 1}`;
        count++;
        multiplierBucketCount++;
        score = score - multiplierBucketPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierBucketPrice = multiplierBucketPrice * 2;
        tooltipBucket.innerHTML = `Prix = ${multiplierBucketPrice}$`;
        multiplierBucketCounts.innerHTML = `${multiplierBucketCount}`;
        if (!multiplierBucketCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierBucketCounts.classList.remove("bg-gray-800");
            multiplierBucketCounts.classList.add("bg-australiandarkblue");
        }
        multiplierBucket.innerHTML = `Seau d'eau x ${multiplierBucketCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierHouse.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }

        randomImageBucket();
    }
}

function multiplier2() {
    if (score >= multiplierFirefighterPrice) {
        multiplierFirefighter.innerHTML = `Pompier x ${multiplierFirefighterCount + 1}`;
        count += 1.1;
        multiplierFirefighterCount++;
        score = score - multiplierFirefighterPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierFirefighterPrice = multiplierFirefighterPrice * 3;
        tooltipFirefighter.innerHTML = `Prix = ${multiplierFirefighterPrice}$`;
        multiplierFirefighterCounts.innerHTML = `${multiplierFirefighterCount}`;
        if (!multiplierFirefighterCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierFirefighter.classList.remove("bg-gray-800");
            multiplierFirefighterCounts.classList.add("bg-australiandarkblue");
        }
        multiplierFirefighter.innerHTML = `Pompier x ${multiplierFirefighterCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierHouse.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        randomImageFireman();
    }
}

function multiplier3() {
    if (score >= multiplierAircraftPrice) {
        multiplierAircraft.innerHTML = `Canadair x ${multiplierAircraftCount + 1}`;
        count += 1.2;
        multiplierAircraftCount++;
        score = score - multiplierAircraftPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierAircraftPrice = multiplierAircraftPrice * 5;
        tooltipAircraft.innerHTML = `Prix = ${multiplierAircraftPrice}$`;
        multiplierAircraftCounts.innerHTML = `${multiplierAircraftCount}`;
        if (!multiplierAircraftCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierAircraft.classList.remove("bg-gray-800");
            multiplierAircraftCounts.classList.add("bg-australiandarkblue");
        }
        multiplierAircraft.innerHTML = `Canadair x ${multiplierAircraftCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierHouse.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        randomImageAircraft();
    }
}

function multiplier4() {
    if (score >= multiplierKoalaPrice) {
        multiplierKoala.innerHTML = `Hopital à koala x ${multiplierKoalaCount + 1}`;
        count += 1.3;
        multiplierKoalaCount++;
        score = score - multiplierKoalaPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierKoalaPrice = multiplierKoalaPrice * 8;
        tooltipKoala.innerHTML = `Prix = ${multiplierKoalaPrice}$`;
        multiplierKoalaCounts.innerHTML = `${multiplierKoalaCount}`;
        if (!multiplierKoalaCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierKoala.classList.remove("bg-gray-800");
            multiplierKoalaCounts.classList.add("bg-australiandarkblue");
        }
        multiplierKoala.innerHTML = `Hopital à koala x ${multiplierKoalaCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierHouse.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        randomImageHospital();
    }
}

function multiplier5() {
    if (score >= multiplierZooPrice) {
        multiplierZoo.innerHTML = `Zoo hospitalier x ${multiplierZooCount + 1}`;
        count += 1.4;
        multiplierZooCount++;
        score = score - multiplierZooPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierZooPrice = multiplierZooPrice * 12;
        tooltipZoo.innerHTML = `Prix = ${multiplierZooPrice}$`;
        multiplierZooCounts.innerHTML = `${multiplierZooCount}`;
        if (!multiplierFirefighterCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierZoo.classList.remove("bg-gray-800");
            multiplierZooCounts.classList.add("bg-australiandarkblue");
        }
        multiplierZoo.innerHTML = `Zoo hospitalier x ${multiplierZooCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierHouse.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        randomImageZoo();
    }
}

function multiplier6() {
    if (score >= multiplierFundsPrice) {
        multiplierFunds.innerHTML = `Collecte de fond x ${multiplierFundsCount + 1}`;
        count += 1.5;
        multiplierFundsCount++;
        score = score - multiplierFundsPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierFundsPrice = multiplierFundsPrice * 13;
        tooltipFunds.innerHTML = `Prix = ${multiplierFundsPrice}$`;
        multiplierFundsCounts.innerHTML = `${multiplierFundsCount}`;
        if (!multiplierFundsCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierFunds.classList.remove("bg-gray-800");
            multiplierFundsCounts.classList.add("bg-australiandarkblue");
        }
        multiplierFunds.innerHTML = `Collecte de fond x ${multiplierFundsCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierHouse.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        randomImageCollect();
    }
}

function multiplier7() {
    if (score >= multiplierRainPrice) {
        multiplierRain.innerHTML = `Pluie miraculeuse x ${multiplierRainCount + 1}`;
        count += 1.6;
        multiplierRainCount++;
        score = score - multiplierRainPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierRainPrice = multiplierRainPrice * 14;
        tooltipRain.innerHTML = `Prix = ${multiplierRainPrice}$`;
        multiplierRainCounts.innerHTML = `${multiplierRainCount}`;
        if (!multiplierRainCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierRain.classList.remove("bg-gray-800");
            multiplierRainCounts.classList.add("bg-australiandarkblue");
        }
        multiplierRain.innerHTML = `Pluie miraculeuse x ${multiplierRainCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierHouse.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        randomImageRain();
    }
}

function multiplier8() {
    if (score >= multiplierHousePrice) {
        multiplierHouse.innerHTML = `Reconstruction des maisons x ${multiplierHouseCount + 1}`;
        count += 1.7;
        multiplierHouseCount++;
        score = score - multiplierHousePrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierHousePrice = multiplierHousePrice * 15;
        tooltipHouse.innerHTML = `Prix = ${multiplierHousePrice}$`;
        multiplierHouseCounts.innerHTML = `${multiplierHouseCount}`;
        if (!multiplierHouseCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierHouse.classList.remove("bg-gray-800");
            multiplierHouseCounts.classList.add("bg-australiandarkblue");
        }
        multiplierHouse.innerHTML = `Reconstruction des maisons x ${multiplierHouseCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierHouse.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        randomImageHouse();
    }
}

function multiplier9() {
    if (score >= multiplierTreePrice) {
        multiplierTree.innerHTML = `Plantation d'arbres x ${multiplierTreeCount + 1}`;
        count += 1.8;
        multiplierTreeCount++;
        score = score - multiplierTreePrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierTreePrice = multiplierTreePrice * 16;
        tooltipTree.innerHTML = `Prix = ${multiplierTreePrice}$`;
        multiplierTreeCounts.innerHTML = `${multiplierTreeCount}`;
        if (!multiplierTreeCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierTree.classList.remove("bg-gray-800");
            multiplierTreeCounts.classList.add("bg-australiandarkblue");
        }
        multiplierTree.innerHTML = `Plantation d'arbres x ${multiplierTreeCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        randomTree();
    }
}

function multiplier10() {
    if (score >= multiplierAnimalsPrice) {
        multiplierAnimals.innerHTML = `Reproduction intensives des animaux x ${multiplierAnimalsCount + 1}`;
        count += 1.9;
        multiplierAnimalsCount++;
        score = score - multiplierAnimalsPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierAnimalsPrice = multiplierAnimalsPrice * 17;
        tooltipAnimals.innerHTML = `Prix = ${multiplierAnimalsPrice}$`;
        multiplierAnimalsCounts.innerHTML = `${multiplierAnimalsCount}`;
        if (!multiplierAnimalsCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierAnimals.classList.remove("bg-gray-800");
            multiplierAnimalsCounts.classList.add("bg-australiandarkblue");
        }
        multiplierAnimals.innerHTML = `Reproduction intensives des animaux x ${multiplierAnimalsCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        randomImageAnimal();
    }
}

function multiplier11() {
    if (score >= multiplierInternationalPrice) {
        multiplierInternational.innerHTML = `Aide international x ${multiplierInternationalCount + 1}`;
        count += 2;
        multiplierInternationalCount++;
        score = score - multiplierInternationalPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierInternationalPrice = multiplierInternationalPrice * 18;
        tooltipInternational.innerHTML = `Prix = ${multiplierInternationalPrice}$`;
        multiplierInternationalCounts.innerHTML = `${multiplierInternationalCount}`;
        if (!multiplierInternationalCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierInternational.classList.remove("bg-gray-800");
            multiplierInternationalCounts.classList.add("bg-australiandarkblue");
        }
        multiplierInternational.innerHTML = `Aide international x ${multiplierInternationalCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        randomImageMondial();
    }
}


function multiplier12() {
    if (score >= multiplierDivinePrice) {
        multiplierDivine.innerHTML = `Aide divine x ${multiplierDivineCount + 1}`;
        count += 2.1;
        multiplierDivineCount++;
        score = score - multiplierDivinePrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierDivinePrice = multiplierDivinePrice * 19;
        tooltipDivine.innerHTML = `Prix = ${multiplierDivinePrice}$`;
        multiplierDivineCounts.innerHTML = `${multiplierDivineCount}`;
        if (!multiplierDivineCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierDivine.classList.remove("bg-gray-800");
            multiplierDivine.classList.add("bg-australiandarkblue");
        }
        multiplierDivine.innerHTML = `Aide divine x ${multiplierDivineCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        randomImageGod();
    }
}

function multiplier13() {
    if (score >= multiplierAlienPrice) {
        multiplierAlien.innerHTML = `Aide extra-terreste x ${multiplierAlienCount + 1}`;
        count += 2.2;
        multiplierAlienCount++;
        score = score - multiplierAlienPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierAlienPrice = multiplierAlienPrice * 20;
        tooltipAlien.innerHTML = `Prix = ${multiplierAlienPrice}$`;
        multiplierAlienCounts.innerHTML = `${multiplierAlienCount}`;
        if (!multiplierAlienCounts.classList.contains("bg-australiabdarkblue")) {
            multiplierAlien.classList.remove("bg-gray-800");
            multiplierAlienCounts.classList.add("bg-australiandarkblue");
        }
        multiplierAlien.innerHTML = `extra-terreste x ${multiplierAlienCount + 1}`;
        checkNumber();
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
    }
}

btnClicker.onmousedown = function () {
    changeMap.src = "img/australiamap.svg";
    addScore();
}

btnClicker.onmouseup = function () {
    changeMap.src = "img/australiamapborder.svg";
}

function autoClickerBonus() {
    if (score >= autoclickerPrice) {
        autoclickerCount++;
        score = score - Math.floor(autoclickerPrice);
        setInterval(() => {
            if (autoclickerCount < 4) {
                let score2 = ((autoclickerCount - 1) * 2);
                score = score + score2;
                displaySecond.innerHTML = `<span class="text-australianwhite font-semibold text-4xl mt-48 text-shadow">Dons par secondes :${score2}$</span>`;
            }
            if ( autoclickerCount >= 4 ) {
                let score8 = ((autoclickerCount - 1) * 8 );
                score = score + score8;
                displaySecond.innerHTML = `<span class="text-australianwhite font-semibold text-4xl mt-48 text-shadow">Dons par secondes : ${score8}$</span>`;
            } 
            if (autoclickerCount >= 9) {
                let score16 = ((autoclickerCount - 1) * 16);
                score = score + score16;
                displaySecond.innerHTML = `<span class="text-australianwhite font-semibold text-4xl mt-48 text-shadow">Dons par secondes : ${score16}$</span>`;
            } 
            if (autoclickerCount >= 14) {
                let score32 = ((autoclickerCount - 1) * 32);
                score = score + score32;
                displaySecond.innerHTML = `<span class="text-australianwhite font-semibold text-4xl mt-48 text-shadow">Dons par secondes : ${score32}$</span>`;
            } 

            if (autoclickerCount >= 19) {
                let score64 = ((autoclickerCount - 1) * 64);
                score = score + score64;
                displaySecond.innerHTML = `<span class="text-australianwhite font-semibold text-4xl mt-48 text-shadow">Dons par secondes : ${score64}$</span>`;
            }
            if (autoclickerCount >= 24) {
                let score128 = ((autoclickerCount - 1) * 128);
                score = score + score128;
                displaySecond.innerHTML = `<span class="text-australianwhite font-semibold text-4xl mt-48 text-shadow">Dons par secondes : ${score128}$</span>`;
            } 
            if (autoclickerCount >= 29) {
                let score256 = ((autoclickerCount - 1) * 256);
                score = score + score256;
                displaySecond.innerHTML = `<span class="text-australianwhite font-semibold text-4xl mt-48 text-shadow">Dons par secondes : ${score256}$</span>`;
            } 
            if (autoclickerCount >= 34) {
                let score512 = ((autoclickerCount - 1) * 512);
                score = score + score512;
                displaySecond.innerHTML = `<span class="text-australianwhite font-semibold text-4xl mt-48 text-shadow">Dons par secondes : ${score512}$</span>`;
            } 
            checkNumber();
        }, 1000);
        checkNumber();
        autoclickerPrice = autoclickerPrice * 1.5;
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
        if (score < multiplierBucketPrice) {
            multiplierBucket.disabled = true;
        }
        if (score < multiplierFirefighterPrice) {
            multiplierFirefighter.disabled = true;
        }
        if (score < multiplierAircraftPrice) {
            multiplierAircraft.disabled = true;
        }
        if (score < multiplierKoalaPrice) {
            multiplierKoala.disabled = true;
        }
        if (score < multiplierZooPrice) {
            multiplierZoo.disabled = true;
        }
        if (score < multiplierFundsPrice) {
            multiplierFunds.disabled = true;
        }
        if (score < multiplierRainPrice) {
            multiplierRain.disabled = true;
        }
        if (score < multiplierHousePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierTreePrice) {
            multiplierTree.disabled = true;
        }
        if (score < multiplierAnimalsPrice) {
            multiplierAnimals.disabled = true;
        }
        if (score < multiplierInternationalPrice) {
            multiplierInternational.disabled = true;
        }
        if (score < multiplierDivinePrice) {
            multiplierDivine.disabled = true;
        }
        if (score < multiplierAlienPrice) {
            multiplierAlien.disabled = true;
        }
        
    }
}

autoClicker.onclick = autoClickerBonus;
multiplierBucket.onclick = multiplier1;
multiplierFirefighter.onclick = multiplier2;
multiplierAircraft.onclick = multiplier3;
multiplierKoala.onclick = multiplier4;
multiplierZoo.onclick = multiplier5;
multiplierFunds.onclick = multiplier6;
multiplierRain.onclick = multiplier7;
multiplierHouse.onclick = multiplier8;
multiplierTree.onclick = multiplier9;
multiplierAnimals.onclick = multiplier10;
multiplierInternational.onclick = multiplier11;
multiplierDivine.onclick = multiplier12;
multiplierAlien.onclick = multiplier13;