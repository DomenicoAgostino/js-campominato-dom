const main = document.querySelector('.game-wrapper');
const BOMBS_NUMBER = 16;
document.getElementById('play').addEventListener('click', play);
let bombs = [];
let score = 0;


function play(){

 
  const level = document.getElementById('level').value;
  const gridLevels = [100,81,49];
  const cellNumbers = gridLevels[level];
  
  reset(cellNumbers);
  
  console.log('bombs', bombs);
  generatePlayground(cellNumbers);

}

function generatePlayground(cellNumbers){

  const grid = document.createElement('div');
  grid.className = 'grid';

  for(let i = 1; i <= cellNumbers; i++){

  
    const cell = generateCell(i, cellNumbers);
    grid.append(cell);
  }

  main.append(grid);

}

function generateCell(cellId, cellNumbers){
  
  const cell = document.createElement('div');
  cell.className = 'cell';

 
  cell.classList.add('square'+cellNumbers);
  cell.innerHTML = `<span>${cellId}</span>`;

 
  cell.cellId = cellId;


  cell.addEventListener('click', handleClickCell);

  return cell;
}

function handleClickCell(){
 


 
  if(!bombs.includes(this.cellId)){
  
    score++;
    this.classList.add('clicked');
    console.log('OK', this.cellId);
    const cells = document.getElementsByClassName('cell');
    
    if(score === cells.length - BOMBS_NUMBER){
      printEndGame('Hai Vinto!!!');
    }
  }else{
    
    endGame(this);
  }
}

function endGame(el){
  console.log('FINE')
  el.classList.add('bomb');
  const endMsg = `<h3 class="py-3">Gioco finito! Numero di tentativi: ${score} su ${BOMBS_NUMBER} bombe <br> Riprova, sarai più fortunato &#127808; (forse &#x2654;	)</h3>`;
  printEndGame(endMsg);
}

function printEndGame(endMsg){
  document.querySelector('.endMessage').innerHTML = endMsg;
  showBombs();
  const endGameHtmlLevel = document.createElement('div');
  endGameHtmlLevel.className = 'endGame';
  main.append(endGameHtmlLevel);
}

function showBombs(){
  
  const cells = document.getElementsByClassName('cell');
  for(let i = 0; i < cells.length; i++){
    if(bombs.includes(i + 1)){
      cells[i].classList.add('bomb');
    }

  }
  console.log(cells);
}

function generateBombs(cellNumbers){
  const generatedBombs = [];

  while(generatedBombs.length < BOMBS_NUMBER){
    const bomb = generateRandomInt(1, cellNumbers);
    if(!generatedBombs.includes(bomb)){
      generatedBombs.push(bomb);
    }
  }

  return generatedBombs;
}


function reset(cellNumbers){
  bombs = generateBombs(cellNumbers);
  main.innerHTML = '';
  document.querySelector('.endMessage').innerHTML = '';
}

function generateRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}