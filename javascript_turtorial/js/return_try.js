var player1Time = 102;
var player2Time = 107;
function getGastestRaceTime() {
  if (player1Time < player2Time) {
    return player2Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player2Time;
  }
}

let fastestRace = getGastestRaceTime();
console.log(fastestRace);
