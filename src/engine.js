const plus1 = document.getElementById("plus1");
const plus2 = document.getElementById("plus2");
const plus3 = document.getElementById("plus3");
const plus4 = document.getElementById("plus4");
const plus5 = document.getElementById("plus5");
const btnClicker = document.getElementById("btnClicker");
const display = document.getElementById("display");
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
let score = 442244244444330;
let count = 1;
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
    let nb = document.getElementsByClassName("theBucket");
    for (var i = 0; i < nb.length; i++) {
        console.log(nb.length);
    }
    var elem = document.createElement("img");
    elem.id = "bucket";
    elem.classList.add("theBucket");
    var container = document.getElementById("btnClicker"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60;  // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    if ( nb.length === 3) {
        console.log("10 bucket max");
    } else {
        elem.src = bucketWater;
        elem.setAttribute("height", "60"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "60"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}

function randomImageFireman() {
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker");
    var availW = container.offsetWidth - 60;
    var availH = container.offsetHeight - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';
    if (nb === 10) {
        console.log("10 fireman max");
    } else {
        elem.src = fireman;
        elem.setAttribute("height", "60");
        elem.setAttribute("width", "60");
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}


function randomImageAircraft() { 
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60;  // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    if (nb === 10) {
        console.log("10 aircraft max");
    } else {
        elem.src = aircraft;
        elem.setAttribute("height", "60"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "60"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}

function randomImageHospital() { 
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60;  // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    if (nb === 10) {
        console.log("10 hospital max");
    } else {
        elem.src = hospital;
        elem.setAttribute("height", "60"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "60"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}

function randomImageZoo() { 
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60;  // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    if (nb === 10) {
        console.log("10 zoo max");
    } else {
        elem.src = zoo;
        elem.setAttribute("height", "60"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "60"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}

function randomImageCollect() { 
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60;  // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    if (nb === 10) {
        console.log("10 collect max");
    } else {
        elem.src = collect;
        elem.setAttribute("height", "60"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "60"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}

function randomImageRain() { 
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60;  // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    if (nb === 10) {
        console.log("10 rain max");
    } else {
        elem.src = rain;
        elem.setAttribute("height", "60"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "60"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}

function randomImageHouse() { 
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60;  // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    if (nb === 10) {
        console.log("10 house max");
    } else {
        elem.src = house;
        elem.setAttribute("height", "60"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "60"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}


function randomTree() { 
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60;  // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    if (nb === 10) {
        console.log("10 tree max");
    } else {
        elem.src = tree;
        elem.setAttribute("height", "60"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "60"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}


function randomImageAnimal() { 
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60;  // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    if (nb === 10) {
        console.log("10 animal max");
    } else {
        elem.src = animal;
        elem.setAttribute("height", "60"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "60"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}


function randomImageMondial() { 
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker"); // DEFINIR NOTRE CONTAINER
    var availW = container.offsetWidth - 60; // BORDURE DE NOTRE CONTAINER EN LARGEUR - 60 POUR PAS QUE CA DEPASSE
    var availH = container.offsetHeight - 60;  // BORDURE DE NOTRE CONTAINER EN HAUTEUR - 60 POUR PAS QUE CA DEPASSE
    var randomY = Math.round(Math.random() * availH) + 'px'; // MATH RANDOM x LARGEUR POUR QU'IL SE PLACE NIMPORTE OU SUR LE CONTAINER
    var randomX = Math.round(Math.random() * availW) + 'px';
    if ( nb === 10) {
        console.log("10 earth max");
    } else {
        elem.src = mondial;
        elem.setAttribute("height", "60"); // TAILLE DE NOTRE IMAGE
        elem.setAttribute("width", "60"); //LARGEUR DE NOTRE IMAGE
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}

function randomImageGod() {
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker");
    var availW = container.offsetWidth - 60;
    var availH = container.offsetHeight - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';
    if (nb === 10) {
        console.log("10 god max");
    } else {
        elem.src = god;
        elem.setAttribute("height", "60");
        elem.setAttribute("width", "60");
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
}

function randomImageAlien() {
    let nb = document.getElementById("btnClicker").childElementCount;
    var elem = document.createElement("img");
    elem.id = "elementCard";
    var container = document.getElementById("btnClicker");
    var availW = container.offsetWidth - 60;
    var availH = container.offsetHeight - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';
    if (nb === 10) {
        console.log("10 alien max");
    } else {
        elem.src = alien;
        elem.setAttribute("height", "60");
        elem.setAttribute("width", "60");
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
    }
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
}

function multiplier1() {
    if (score >= multiplierBucketPrice) {
        multiplierBucket.innerHTML = `Seau d'eau x ${multiplierBucketCount + 1}`;
        count++;
        multiplierBucketCount++;
        score = score - multiplierBucketPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierBucketPrice = multiplierBucketPrice * 2;
        multiplierBucketCounts.innerHTML = `${multiplierBucketCount}`;
        multiplierBucket.innerHTML = `Seau d'eau x ${multiplierBucketCount + 1}`;
        checkNumber();
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
        multiplierFirefighterCounts.innerHTML = `${multiplierFirefighterCount}`;
        multiplierFirefighter.innerHTML = `Pompier x ${multiplierFirefighterCount + 1}`;
        checkNumber();
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
        multiplierAircraftCounts.innerHTML = `${multiplierAircraftCount}`;
        multiplierAircraft.innerHTML = `Canadair x ${multiplierAircraftCount + 1}`;
        checkNumber();
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
        multiplierKoalaCounts.innerHTML = `${multiplierKoalaCount}`;
        multiplierKoala.innerHTML = `Hopital à koala x ${multiplierKoalaCount + 1}`;
        checkNumber();
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
        multiplierZooCounts.innerHTML = `${multiplierZooCount}`;
        multiplierZoo.innerHTML = `Zoo hospitalier x ${multiplierZooCount + 1}`;
        checkNumber();
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
        multiplierFundsCounts.innerHTML = `${multiplierFundsCount}`;
        multiplierFunds.innerHTML = `Collecte de fond x ${multiplierFundsCount + 1}`;
        checkNumber();
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
        multiplierRainCounts.innerHTML = `${multiplierRainCount}`;
        multiplierRain.innerHTML = `Pluie miraculeuse x ${multiplierRainCount + 1}`;
        checkNumber();
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
        multiplierHouseCounts.innerHTML = `${multiplierHouseCount}`;
        multiplierHouse.innerHTML = `Reconstruction des maisons x ${multiplierHouseCount + 1}`;
        checkNumber();
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
        multiplierTreeCounts.innerHTML = `${multiplierTreeCount}`;
        multiplierTree.innerHTML = `Plantation d'arbres x ${multiplierTreeCount + 1}`;
        checkNumber();
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
        multiplierAnimalsCounts.innerHTML = `${multiplierAnimalsCount}`;
        multiplierAnimals.innerHTML = `Reproduction intensives des animaux x ${multiplierAnimalsCount + 1}`;
        checkNumber();
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
        multiplierInternationalCounts.innerHTML = `${multiplierInternationalCount}`;
        multiplierInternational.innerHTML = `Aide international x ${multiplierInternationalCount + 1}`;
        checkNumber();
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
        multiplierDivineCounts.innerHTML = `${multiplierDivineCount}`;
        multiplierDivine.innerHTML = `Aide divine x ${multiplierDivineCount + 1}`;
        checkNumber();
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
        multiplierAlienCounts.innerHTML = `${multiplierAlienCount}`;
        multiplierAlien.innerHTML = `extra-terreste x ${multiplierAlienCount + 1}`;
        checkNumber();
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
        randomImageAlien();
    }
}

btnClicker.onclick = addScore;
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