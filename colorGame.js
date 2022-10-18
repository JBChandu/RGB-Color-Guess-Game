let numSquares = 6;
let colors = [];
let pickedColor;
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode")

init ();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}
function setupModeButtons(){
  for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    })
  }
}
function setupSquares(){
  for(let i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i]
    //add click listeners to squares
      squares[i].addEventListener("click", function(){
        //grab color of clicked square
        let clickedColor = this.style.background;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
          messageDisplay.textContent = "Correct!!!";
          changeColors(clickedColor);
          h1.style.background = clickedColor;
          resetButton.textContent = "Play Again?";
          } else {
          this.style.background = "#232323";
          messageDisplay.textContent = "Retry!!!";
      }
    });
  }
}
function reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent ="";
  resetButton.textContent = "New Colors";
  //change colors of squares
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none"
    }
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  //loop through all squares
  for(let i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  let arr = []
  //add num random colors to array
  for(let i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor())
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0 to 255
  let r = Math.floor(Math.random() *256);
  //pick a "green" from 0 to 255
  let g = Math.floor(Math.random() *256);
  //pick a "blue" from 0 to 255
  let b = Math.floor(Math.random() *256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}