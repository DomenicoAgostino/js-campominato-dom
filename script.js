const main = document.querySelector('.game-wrapper');
const BOMBS_NUMBER = 16;
document.getElementById('play').addEventListener('click', play);



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