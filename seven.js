//double-o-seven
var uAct;
var cAct;
var uAmmo = 0;
var cAmmo = 0;
var victor = "Bond, James";
var cWins = 0;
var uWins = 0;

function d07 (choice) {
  var uAct = choice;
  var cAct = Math.floor(Math.random() * 3);
  var res = uAct - cAct;
  if (uAmmo <= 0) {
    uAmmo = 0;
    if (uAct == 2) {
      uAct = 1;
      alert("you don't have enough ammo for that!");
    }
  }
  if (cAmmo <= 0) {
    cAmmo = 0;
    if (cAct == 2) {
      cAct = Math.floor(Math.random() * 2);
    }
  }
  //updates ammo tallies when applicable
  switch (uAct) {
    case 0:
      uAmmo++;
      break;
    case 2:
      uAmmo--;
      break;
    default:
      break;
  }
  switch (cAct) {
    case 0:
      cAmmo++
      break;
    case 2:
      cAmmo--;
      break;
    default:
      break;
  }
  //updates win tallies when applicable
  switch (res) {
    case -2:
      cWins++;
      break;
    case 2:
      uWins++;
      break;
    default:
      break;
  }
  
}
