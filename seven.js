//double-o-seven
var uAct;
var cAct;
var uAmmo = 0;
var cAmmo = 0;
var victor = "Bond, James";
var cWins = 0;
var uWins = 0;

function doubleOS (choice) {
  var uAct = choice;
  var cAct = Math.floor(Math.random() * 3);
  var res = uAct - cAct;
  if (uAmmo <= 0) {
    uAmmo = 0;
    if (uAct == 2) {
      uAct = 1;
      cAct = 1;
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
  //outputs message to let player know what happened
  switch (uAct) {
    case 0:
      if (cAct == 0) {alert("you reload. computer reloads");}
      if (cAct == 1) {alert("you reload. computer activates shield");}
      if (cAct == 2) {alert("you reload. computer fires! computer wins."); cWins++; uAmmo = 0; cAmmo = 0;}
      break;
    case 1:
      if (cAct == 0) {alert("you activate shield. computer reloads");}
      if (cAct == 1) {alert("you activate shield. computer activates shield");}
      if (cAct == 2) {alert("you activate shield. computer fires! you shield yourself successfully.");}
      break;
    case 2:
      if (cAct == 0) {alert("you fire! computer attempts to reload. you win."); uWins++; uAmmo = 0; cAmmo = 0;}
      if (cAct == 1) {alert("you fire! computer activates shield. computer shields itself successfully.");}
      if (cAct == 2) {alert("you fire! computer fires! nobody wins.");}
      break;
    default:
      break;
  }
  document.getElementById("uCount").value = uWins;
  document.getElementById("cCount").value = cWins;
}
