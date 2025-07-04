import { steps, results, initialDone, transportDone } from './constants.js';

const player = {
  health: 5,
  members: 3,
  backpack: [],
};

function showStadistics(player) {
  let stadistics = `
  👾 Estadisticas generales 👾
  💊 Vida actual: ${player.health}
  👨‍👩‍👧‍👦 Miembros vivos: ${player.members}
  🎒 Tu mochila (${player.backpack.length}): ${player.backpack.toString()}
  `;
  alert(stadistics);
}

function selectedOption(message) {
  return prompt(message).toUpperCase();
}

function canPlayerEscape(player) {
  if (player.health >= 3 && player.backpack.length >= 2 && player.backpack.includes("mapa")) 
    return true;
  return false;
}

function action(step, option, player) {
  let actions = {};
  switch(step) {
    // Food Step
    case 1:
      actions = {
        A: (player) => {
          player.backpack.push("comida", "agua");
          player.health--;
        },
        B: (player) => {
          player.backpack.push("linterna");
          player.members--;
        }
      }; 
      break;
    // Shelter Step
    case 2:
      actions = {
        A: (player) => {
          player.backpack.push("botiquin");
          player.health++;
        },
        B: (player) => player.health--,
        C: (player) => {
          player.backpack.push("bateria");
          player.health--;
        }
      };
      break;
    // Help or Ignore Step
    case 3:
      actions = {
        A: (player) => {
          player.backpack.push("mapa");
          player.members++;
        },
        B: (player) => player.members--,
        C: (player) => {
          player.backpack.push("linterna");
          player.health--;
        },
        D: (player) => {
          player.backpack.push("comida");
          player.members -= 2;
        }
      };
      break;
    // Smoke Step
    case 4:
      actions = {
        A: (player) => player.backpack.push("llave", "gasolina"),
        B: (player) => {},
      };
      break;
    // Exploration Step
    case 5:
      actions = {
        A: (player) => player.backpack.push("intel"),
        B: (player) => player.health--,
        C: (player) => player.backpack.push("tarjeta-acceso"),
      };
      break;
    // Trasportation Step
    case 6:
      actions = {
        A: (player) => player.backpack.push("medicinas", "bateria"),
        B: (player) => player.health--
      };
      break;
    default:
      alert("Ocurrio un error en el juego.");
      window.location.reload()
      return false;
  }

  if (Object.keys(actions).length !== 0 && actions.hasOwnProperty(option)) {
    actions[option](player);
  } else {
    alert("Opción invalida, por favor ingrese un valor válido.")
    return false;
  }
  alert(results[step][option]);
  return true;
}

function nextScenario(step) {
  let option;
  let flag = false;
  while (!flag) {
    option = selectedOption(steps[step]);
    flag = action(step, option, player); 
  }
}

function start() {
  alert(steps[0]);
  showStadistics(player);
  alert(initialDone);

  for (let i = 1; i < steps.length; i++) {
    nextScenario(i);
    showStadistics(player);
  }

  if (canPlayerEscape(player)) {
    alert(transportDone);
  } else {
    alert("Quedaste atrapado en la ciudad!")
  }
}

start()