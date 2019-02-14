var computerBoard = document.querySelector('#computer');
var playerBoard = document.querySelector('#player');
var rows = computerBoard.querySelectorAll('tr');
var rows2 = computerBoard.querySelectorAll('tr');
var numOfShips = 5;
var ships = [2, 3, 3, 4, 5];
var randomThing = 5;
var numberThing = 0;
var boardThing = 100;


function placeShips() {
  while(ships.length !== 0) {
    
  }
}


function addClassNamesToTable() {

  function addClassNamesToCell(row) {
    var letterCell = row.firstElementChild;
    var letter = letterCell.textContent;
    // start at second "column", since first column is the letter column
    for(var i = 1; i < row.children.length; i++) {
      var cell = row.children[i];
      cell.className = letter + i;
    }
  }

  // start at row 1 (letter A), not row 0
  for(var i = 1; i < rows.length; i++) {
    var row = rows[i];
    addClassNamesToCell(row);
  }
}

// Add class names to table
addClassNamesToTable();

function addClassNamesToPlayerTable() {

  function addClassNamesToCell(row2) {
    var letterCell2 = row2.firstElementChild;
    var letter2 = letterCell2.textContent;
    // start at second "column", since first column is the letter column
    for(var i = 1; i < row2.children.length; i++) {
      var cell2 = row2.children[i];
      cell2.className = letter2 + i;
    }
  }

  // start at row 1 (letter A), not row 0
  for(var i = 1; i < rows2.length; i++) {
    var row2 = rows2[i];
    addClassNamesToCell(row2);
  }
}

// Add class names to table
addClassNamesToPlayerTable();
function randomShips()
{
  return Math.floor(Math.random() * 18)+1;
}
computerBoard.addEventListener('click', function(e) {
boardThing -= 1;
if(numberThing >= 5)
{
if(randomThing >= 1)
{
  randomShips();
  if(randomShips() == 1)
  {
    if(e.target.innerHTML == " ")
    {
      e.target.innerHTML = "X";
      randomThing -= 1;
      e.target.className = "shot hit";
    }
  }
  else
  {
    if(e.target.innerHTML == " ")
    {
    e.target.innerHTML = "O";
    }
  }
}
else if (randomThing <= 0)
{
  if(e.target.innerHTML == " ")
  {
  e.target.innerHTML = "O";
  }
  var alertThing = confirm("You win, do you want to try again?");
  if (alertThing == true)
  {
    location.reload();
  }
  else {
    location.reload();
  }
}
}
else {
  alert("Please place your ships first.");
}
if(boardThing <= 5 && randomThing >=0)
{
    if(e.target.innerHTML == " ")
    {
      e.target.innerHTML = "X";
      randomThing -= 1;
      e.target.className = "shot hit";
    }
}
});

playerBoard.addEventListener('click', function(e) {

  if (e.target.innerHTML == " " && numOfShips >=1)
  {
    e.target.innerHTML = '<i class="fas fa-align-justify"></i>';
    numOfShips -= 1;
    e.target.id = "ship";
    numberThing += 1;
  }

console.log(e.target.id);
});
