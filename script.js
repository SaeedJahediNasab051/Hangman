const secretPhrases = ["never", "you", "dog", "car", "break"]

let randomItem = ""
let clicked = []
let result = ""
let mistakes = 0

function selectRandomItem() {
  randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)]
  document.getElementById("letters").addEventListener("click", buttonHandler)
  window.addEventListener("keydown" , keyHandler)
  console.log(randomItem)
}

function setUnderScores() {
  let splitedWord = randomItem.split("")
  let mappedWord = splitedWord.map((letter) =>
    clicked.indexOf(letter) >= 0 ? letter : "_"
  )
  result = mappedWord.join("")
  document.getElementById("clue").innerHTML = `<p>${result}</p>`
}

function checkIfWin() {
  if (randomItem == result) {
    document.getElementById("gameover").style.display =
      "block"
    document.getElementById("image").querySelector("img").src =
      "assets/winner.png";
      used ()
      

  }
}
function checkIfLost() {
  if (mistakes === 6) {
    document.getElementById("gameover").style.display =
      "block"
    document.getElementById(
      "clue"
    ).innerHTML = `<p>Random Word is : ${randomItem}</p>`
    used ()
  }
}

function updateHangmanPicture() {
  const image = document.getElementById("image").querySelector("img")
  image.src = `assets/hangman${mistakes}.png`
}

function letterHandler(letter) {
  letter = letter.toLowerCase()
  clicked.indexOf(letter) === -1 ? clicked.push(letter) : null
  document.getElementById(letter.toUpperCase()).className = "used"
  if (randomItem.indexOf(letter) >= 0) {
    setUnderScores()
    checkIfWin()
    
   
  } else if (randomItem.indexOf(letter) === -1) {
    if(mistakes <= 5){
      mistakes++
    }
    checkIfLost()
    updateHangmanPicture()
  }
}

function reloadGame(){
  document.getElementById("button-end").addEventListener("click" , ()=>{
    location.reload()
  })
}

function used (){
  const use = document.getElementById("letters").querySelectorAll("div");
    for (const user of use){
      user.classList.add("used")
    }
  window.removeEventListener("keydown",keyHandler);
  document.getElementById("letters").removeEventListener("click", buttonHandler)
}

function buttonHandler(event) {
  letterHandler(event.target.id)
}

function keyHandler(event){
    letterHandler(event.key)
}

selectRandomItem()
setUnderScores()
reloadGame()

      
     
      