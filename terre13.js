#! node

let heure;
let min;
let hour;

if (process.argv[2] == undefined) {
  console.log(
    "Veuillez indiquer au script, une heure au format 12 avec l'indication AM ou PM. Exemple : 12:00PM"
  );
  return;
}

heure = process.argv[2].split(":");
min = heure[1];

if (min[3] !== "M") {
  console.log(
    "Veuillez indiquer au script, une heure au format 12 avec l'indication AM ou PM. Exemple : 12:00PM"
  );
  return;
} else if (heure[0] > 12) {
  console.log("Veuillez indiquer une heure au format 12");
  return;
}

if (parseInt(heure[0]) === 12 && heure[1][2] === "A") {
  hour = 00;
  min = [heure[1].slice(0, -2)];
  console.log(hour + ":" + min);
} else if (heure[1][2] === "P" && parseInt(heure[0]) !== 12) {
  hour = parseInt(heure[0]) + 12;
  console.log(hour + ":" + min.slice(0, -2));
} else {
  hour = heure[0];
  console.log(hour + ":" + min.slice(0, -2));
}
