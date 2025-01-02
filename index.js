let countEl = document.getElementById('count-el')

let count = 0

function increment() {
    count = count + 1
    console.log(count)
    countEl.innerText = count
}
// The DOM(Document Object Model)
// How to use Javascript to modify a website

// Grab the Element p
// let welcomeEl = document.getElementById("welcome-el")

// let name = 'Talha'
// let greeting = 'Welcome back, '+ name

// welcomeEl.textContent = greeting

 let saveEl = document.getElementById('save-el')
// console.log(save-el)

function save() {
    // a variable that stores both dash - and count
    let countStr = count + ' - '
    // saveEl is the element that we want to modify
    saveEl.textContent += countStr

    console.log(count)
}

// Debugging Online: Search which things takes error or missing
// innerText Alternative textContent 