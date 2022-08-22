// function no 1 : calculate player cost
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
// function no 2 : calculate Total cost
function othersCost (){
  const manager =  document.getElementById('managerCost');
  const coach =  document.getElementById('coachCost');

  if((isNaN(parseInt(manager.value)) == false ) && (isNaN(parseInt(coach.value)) == false )){
    let totalcost = parseInt(manager.value) + parseInt(coach.value);
    return totalcost;
  }
  else{
    alert('Enter the number here')
    manager.value = '';
    coach.value = '';
    return '000';
  }
}