function costCalculte(num){
  const playerCost =  document.getElementById('perPlayerCost');
  let result =  num * parseInt(playerCost.value);
  return result ;
// console.log(typeof(parseInt(playerCost.value)));

  // if(parseInt(playerCost.value) !== '' ){
  //   let result =  num * parseInt(playerCost.value);
  //   return result ;
  // }else{
  //   alert('Enter the number here')
  //   playerCost.value = '';
  // }


}

function othersCost (){
  const manager =  document.getElementById('managerCost');
  const coach =  document.getElementById('coachCost');
  let totalcost = parseInt(manager.value) + parseInt(coach.value);
  return totalcost;
}