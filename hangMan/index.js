const stock = ['yuvi','raj','singh','james','khoa','andre']
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"]
let attempts = 0
let found = []

const word = stock[Math.floor(Math.random() * (stock.length))]

// --------- creating key-board ------------- // 
const keyBoard = document.querySelector(".key-board")
letters.forEach(letter => {
    const keyWorld = document.createElement("button")
    keyWorld.classList.add('keyboard-button')
    keyWorld.textContent = letter
    keyBoard.appendChild(keyWorld)
});

// --------- creating answer Div ------------ //
const answer = document.querySelector(".answer")
word.split('').forEach(element => {
    const answerButton = document.createElement("button")
    answerButton.classList.add('answerButton')
    answerButton.innerHTML = `<p class="hide ${element}">${element}</p><p>...</p>`
    // answerLetter.classList.add("underline")
    answer.appendChild(answerButton)
});

console.log(answer.innerHTML);

keyBoard.addEventListener('click', (event)=>{

    const clickedLetter = event.target.innerText
    console.log(clickedLetter);

    const answerLetter = document.querySelector(`.${clickedLetter}`)
    if(answerLetter && !event.target.classList.contains('red')){
        console.log(answerLetter);
        answerLetter.nextElementSibling.remove()
        answerLetter.classList.remove("hide")
        event.target.classList.add("red")
        found.push(answerLetter)
    }else{
        attempts = attempts+1
        const body_part = document.querySelector(".hide")
        body_part.classList.remove("hide")
    }
    console.log(attempts);
    console.log(found);
    if(found.length == word.length){
        const keySound = ()=> new Audio(`sounds/win.wav`)
        setTimeout(() => {
            keySound().play()
        }, 0)
        setTimeout(() => {
            alert('yeahhhh you won!!'
        )},100);
        setTimeout(()=>{
            window.location.reload();
        },200)
    }
    if(attempts == 6){
        console.log("hello_world");
        const keySound = ()=> new Audio(`sounds/loose.wav`)
        setTimeout(() => {
            keySound().play()
        }, 0)
        setTimeout(() => {
            alert('You are hanged !! Better luck next time'
        )},100);
        setTimeout(()=>{
            window.location.reload();
        },200)
    }
})