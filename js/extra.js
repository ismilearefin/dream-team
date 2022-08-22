function costCalculte(num){
  const playerCost =  document.getElementById('perPlayerCost');
  let result =  num * parseInt(playerCost.value);

return result ;
}

function othersCost (){
  const manager =  document.getElementById('managerCost');
  const coach =  document.getElementById('coachCost');
  let totalcost = parseInt(manager.value) + parseInt(coach.value);
  return totalcost;
}