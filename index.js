let homeCount=0
let guestCount=0

let increaseH = document.getElementById("homeCount")
let increaseG = document.getElementById("guestCount")

function homeAdd1() {
    homeCount += 1
    increaseH.textContent = homeCount
}

function homeAdd2() {
    homeCount += 2
    increaseH.textContent = homeCount
}

function homeAdd3() {
    homeCount += 3
    increaseH.textContent = homeCount
}

function guestAdd1() {
    guestCount += 1
    increaseG.textContent = guestCount
}

function guestAdd2() {
    guestCount += 2
    increaseG.textContent = guestCount
}

function guestAdd3() {
    guestCount += 3
    increaseG.textContent = guestCount
}

function setZero() {
    increaseH.textContent = 0
    homeCount = 0
    increaseG.textContent = 0
    guestCount = 0
}