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
const multiplierKoalaCounts= document.getElementById("multiplierKoalaCounts");
let score = 0;
let count = 1;
let multiplierBucketCount = 0;
let multiplierBucketPrice = 5;
let multiplierFirefighterCount = 0;
let multiplierFirefighterPrice = 100;
let multiplierAircraftCount = 0;
let multiplierAircraftPrice = 1500;
let multiplierKoalaCount = 0;
let multiplierKoalaPrice = 10000;


btnClicker.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});

btnClicker.addEventListener("mousedown", function () {
    let random = Math.floor(Math.random() * 5);
    if (random === 0) {
        plus1.innerHTML = `+${count}<img src="img/cash.svg" class="ml-2 w-10">`;
        plus1.classList.remove("hidden");
        setTimeout(() => {
            plus1.classList.add("hidden");
        }, 600);
    }
    if (random === 1) {
        plus2.innerHTML = `+${count}<img src="img/cash.svg" class="ml-2 w-10">`;
        plus2.classList.remove("hidden");
        setTimeout(() => {
            plus2.classList.add("hidden");
        }, 600);
    }
    if (random === 2) {
        plus3.innerHTML = `+${count}<img src="img/cash.svg" class="ml-2 w-10">`;
        plus3.classList.remove("hidden");
        setTimeout(() => {
            plus3.classList.add("hidden");
        }, 600);
    }

    if (random === 3) {
        plus4.innerHTML = `+${count}<img src="img/cash.svg" class="ml-2 w-10">`;
        plus4.classList.remove("hidden");
        setTimeout(() => {
            plus4.classList.add("hidden");
        }, 600);
    }

    if (random === 4) {
        plus5.innerHTML = `+${count}<img src="img/cash.svg" class="ml-2 w-10">`;
        plus5.classList.remove("hidden");
        setTimeout(() => {
            plus5.classList.add("hidden");
        }, 600);
    }
});


function addScore() {
    score = score + count;
    if (score >= 1000 && score <= 1000000) {
        display.innerHTML = `<span>${(score / 1000).toFixed(2)}k de Dons</span>`;
    } else if (score >= 1000000 && score <= 1000000000) {
        display.innerHTML = `<span>${(score / 1000000).toFixed(2)}M de Dons</span>`;
    } else if (score >= 1000000000) {
        display.innerHTML = `<span>${(score / 1000000000).toFixed(2)}B de Dons</span>`;
    } else {
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
    }
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
}

function multiplier1() {
    if (score >= multiplierBucketPrice) {
        multiplierBucket.innerHTML = `Seau d'eau x ${multiplierBucketCount + 1}`;
        count++;
        multiplierBucketCount++;
        score = score - multiplierBucketPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierBucketPrice = multiplierBucketPrice * 1.1;
        multiplierBucketCounts.innerHTML = `${multiplierBucketCount}`;
        multiplierBucket.innerHTML = `Seau d'eau x ${multiplierBucketCount + 1}`;
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
    }
}

function multiplier2() {
    if (score >= multiplierFirefighterPrice) {
        multiplierFirefighter.innerHTML = `Pompier x ${multiplierFirefighterCount + 1}`;
        count++;
        multiplierFirefighterCount++;
        score = score - multiplierFirefighterPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierFirefighterPrice = multiplierFirefighterPrice * 1.5;
        multiplierFirefighterCounts.innerHTML = `${multiplierFirefighterCount}`;
        multiplierFirefighter.innerHTML = `Pompier x ${multiplierFirefighterCount + 1}`;
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
    }
}

function multiplier3() {
    if (score >= multiplierAircraftPrice) {
        multiplierAircraft.innerHTML = `Canadair x ${multiplierAircraftCount + 1}`;
        count++;
        multiplierAircraftCount++;
        score = score - multiplierAircraftPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierAircraftPrice = multiplierAircraftPrice * 1.8;
        multiplierAircraftCounts.innerHTML = `${multiplierAircraftCount}`;
        multiplierAircraft.innerHTML = `Canadair x ${multiplierAircraftCount + 1}`;
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
    }
}

function multiplier4() {
    if (score >= multiplierKoalaPrice) {
        multiplierKoala.innerHTML = `Koala x ${multiplierKoalaCount + 1}`;
        count++;
        multiplierKoalaCount++;
        score = score - multiplierKoalaPrice;
        display.innerHTML = `<span>${score.toFixed(2)}$ de Dons</span>`;
        multiplierKoalaPrice = multiplierKoalaPrice * 2;
        multiplierKoalaCounts.innerHTML = `${multiplierKoalaCount}`;
        multiplierKoala.innerHTML = `Koala x ${multiplierKoalaCount + 1}`;
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
    }
}

btnClicker.onclick = addScore;
multiplierBucket.onclick = multiplier1;
multiplierFirefighter.onclick = multiplier2;
multiplierAircraft.onclick = multiplier3;
multiplierKoala.onclick = multiplier4;