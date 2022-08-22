
let total = [];

// selected-V section js start.......
function selectedPlayer(clicked){
  const playerName = clicked.parentNode.children[1].innerText ;
  
  if(total.length < 5){

    total.push(playerName);
    const selectedList = document.getElementById('selected-V');
    const listIteam = document.createElement('li');
    listIteam.innerHTML = `
    ${playerName}
    `
    selectedList.appendChild(listIteam);
    clicked.style.background = 'gray';
    clicked.classList.add ('cursor-not-allowed',);
    clicked.setAttribute('disabled','true');
  }
  else{

    const elemnts = document.querySelectorAll('.btnClass');
    alert('You cannot select more than 5 players');
    for(let elemet of elemnts){
      elemet.style.background = 'gray';
      elemet.classList.add ('cursor-not-allowed');
      elemet.setAttribute('disabled','true');
    }
  }
}
// selected-V section js end.......


// Total cost Calculte section start.......
// calculate button.....
document.getElementById('calculateBtn').addEventListener('click', function(){
    let totalCost = document.getElementById('totalExpense');
    totalCost.innerText = costCalculte(total.length);
})
// Calculate Total button........
document.getElementById('calculateTotal').addEventListener('click', function(){
  let totalCost = document.getElementById('totalExpense');
  let finalCost = document.getElementById('total');
  finalCost.innerText = parseInt(totalCost.innerText) + parseInt(othersCost ());
})
// Total cost Calculte section END.......