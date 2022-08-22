function costCalculte(num){
  const playerCost =  document.getElementById('perPlayerCost');
  if(isNaN(parseInt(playerCost.value)) == false ){
    let result =  num * parseInt(playerCost.value);
    return result ;
  }else{
    alert('Enter the number here')
    playerCost.value = '';
    return '000';
  }
}

function othersCost (){
  const manager =  document.getElementById('managerCost');
  const coach =  document.getElementById('coachCost');
  let totalcost = parseInt(manager.value) + parseInt(coach.value);
  return totalcost;
}