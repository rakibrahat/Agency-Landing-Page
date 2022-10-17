
let dropDownContents = document.getElementById("myDropdown")

let downIcon = document.getElementById("downIcon")

let upIcon = document.getElementById("upIcon")

let bengali = document.getElementById("bengali")

let hindi = document.getElementById("hindi")

let urdu = document.getElementById("urdu")

let spanish = document.getElementById("spanish")

let language = document.getElementById("language")

let english = document.getElementById("english")

let menu_bar_open = document.getElementById("menuBar")

let menuBarIcon2 = document.getElementById("menuBarIcon2")

let menuBarIcon = document.getElementById("menuBarIcon")

let inptName = document.getElementById("name")

let inptEmail = document.getElementById("email")

let inptMessage = document.getElementById("message")







function togle() {
    if (downIcon.style.display = "inline-block") {
        togleOn()
    } else if (upIcon.style.display = "inline-block") {
        togleOff()
    }
}

function togleOn() {
    dropDownContents.style.display = "inline-block"
    downIcon.style.display = "none"
    upIcon.style.display = "inline-block"
    menuBarClose()
}

function togleOff() {
    dropDownContents.style.display = "none"
    downIcon.style.display = "inline-block"
    upIcon.style.display = "none"
}

function translateToBengali() {
    language.innerHTML = "Bengali"
    bengali.style.display = "none"
    hindi.style.display = "block"
    urdu.style.display = "block"
    spanish.style.display = "block"
    english.style.display = "block"
    togleOff()
}

function translateToHindi() {
    language.innerHTML = "Hindi"
    bengali.style.display = "block"
    hindi.style.display = "none"
    urdu.style.display = "block"
    spanish.style.display = "block"
    english.style.display = "block"
    togleOff()
}

function translateToUrdu() {
    language.innerHTML = "Urdu"
    bengali.style.display = "block"
    hindi.style.display = "block"
    urdu.style.display = "none"
    spanish.style.display = "block"
    english.style.display = "block"
    togleOff()
}

function translateToSpanish() {
    language.innerHTML = "Spanish"
    bengali.style.display = "block"
    hindi.style.display = "block"
    urdu.style.display = "block"
    spanish.style.display = "none"
    english.style.display = "block"
    togleOff()
}

function translateToEnglish() {
    language.innerHTML = "English"
    bengali.style.display = "block"
    hindi.style.display = "block"
    urdu.style.display = "block"
    spanish.style.display = "block"
    english.style.display = "none"
    togleOff()
}

function menuBarOpen() {
    menu_bar_open.style.display = "inline-block"
    menu_bar_open.style.backgroundColor = "#f0f8ff"
    menuBarIcon2.style.display = "inline-block"
    menuBarIcon.style.display = "none"
    togleOff()
}

function menuBarClose() {
    menu_bar_open.style.display = "none"
    menu_bar_open.style.backgroundColor = "transparent"
    menuBarIcon2.style.display = "none"
    menuBarIcon.style.display = "inline-block"
}

function name_click(){
    inptName.style.outline = "none"
}

function email_click(){
    inptEmail.style.outline = "none"
}

function message_click(){
    inptMessage.style.outline = "none"
}