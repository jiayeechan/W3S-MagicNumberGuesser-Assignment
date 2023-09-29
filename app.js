let guessNum = 0
const min = 0
const maxNum = 10
const results = document.querySelector("#results")
const higherButton = document.getElementById('higherBtn')
const lowerButton = document.querySelector('#lowerBtn')
const yesButton = document.querySelector("#yes")
const outcomeSection = document.getElementById("outcome")
const startButton = document.getElementById("myBtn")

//show outcome div when start button is selected 
startButton.addEventListener("click", rndNum)


//spits out a random number between 0-10 and makes outcome div visible
function rndNum () { 
    guessNum = Math.floor(Math.random()*11)
    console.log(guessNum)
    results.innerText = guessNum
    outcomeSection.style.display = "block"
    startButton.style.display = "none";
    return guessNum
}



//if result number should be higher
higherButton.addEventListener("click", () => {rangeNum(guessNum, maxNum)})

//function to spit out random number within a range - increases min each click
function rangeNum (min, max) {
    guessNum = Math.floor(
        Math.random() * (max - min) + min
    )
    results.innerText = guessNum
    guessNum++
    return guessNum
}

//if result number should be lower
lowerButton.addEventListener("click", () => {rangeNum2(min, guessNum)})

//function to spit out random number within a range - decrease max each click
function rangeNum2 (min, max) {
    guessNum = Math.floor(
        Math.random() * (max - min) + min
    )
    results.innerText = guessNum
    while (guessNum > 0) guessNum--
    return guessNum
}

//if result number is correct
yesButton.addEventListener("click", correctNum)

function correctNum () {
    document.getElementById("confetti-video").style.display = "block";
}

/*udemy links
https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595388#notes
https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced 
https://www.youtube.com/watch?v=rRgD1yVwIvE&t=181s*/
