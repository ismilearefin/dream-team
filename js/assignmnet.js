
let total = [];

function selectedPlayer(clicked){
  
  const playerName = clicked.parentNode.children[1].innerText ;
  total.push(playerName);
  
  if(total.length<6){
    const selectedList = document.getElementById('selected-V');

  const listIteam = document.createElement('li');
  
    listIteam.innerHTML = `
    ${playerName}
    `
    selectedList.appendChild(listIteam);
  }else{
    const elemnts = document.getElementsByTagName('button');
    for(let elemet of elemnts){
      elemet.style.background = 'gray';
      elemet.classList.add ('cursor-not-allowed');
    }
  }
  
}

document.getElementById('calculateBtn').addEventListener('click', function(){

  let totalCost = document.getElementById('totalExpense');
  totalCost.innerText = costCalculte(total.length);
})

document.getElementById('calculateTotal').addEventListener('click', function(){
  let totalCost = document.getElementById('totalExpense');
  let finalCost = document.getElementById('total');
  finalCost.innerText = parseInt(totalCost.innerText) + othersCost();
})