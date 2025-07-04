// Steps
const initialStep = "Te despiertas entre escombros. El cielo es rojo, y la ciudad está en ruinas. Debes encontrar suministros y un refugio seguro antes del anochecer.";

const foodStep = `El hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela. ¿Dónde buscar recursos vitales?

Opción A: Ir al supermercado abandonado
Opción B: Robar mochila a un sobreviviente
`;

const shelterStep = `Con algo de alimento en la mochila, el grupo necesita un lugar seguro donde recuperarse y planear el siguiente movimiento. La ciudad no perdona a quienes se quedan mucho tiempo al descubierto.

Opción A: Esconderse en una farmacia
Opción B: Ir a una estación de buses
Opción C: Refugiarse en una tienda de campaña abandonada
`;

const helpIgnoreStep = `Mientras avanzan, escuchan gritos de auxilio desde un callejón. Ayudar podría ser un acto heroico... o un riesgo innecesario. ¿Cuál será su decisión?

Opción A: Ayudar a una familia atrapada
Opción B: Ignorar y seguir avanzando
Opción C: Distraer a los enemigos y liberar a la familia a distancia
Opción D: Robar los recursos de la familia sin ser vistos
`;

const smokeStep = `Desde lo alto de un edificio, una columna de humo se eleva a lo lejos. ¿Es una señal de auxilio o una trampa mortal? La decisión podría marcar la diferencia.

Opción A: Investigar la señal
Opción B: Evitar la zona
`;

const explorationStep = `El grupo necesita información. Las rutas están colapsadas, y moverse sin saber puede ser letal. ¿Mejor buscar una vista panorámica o seguir entre las sombras?

Opción A: Subir a un edificio a observar
Opción B: Moverse por callejones
Opción C: Usar una alcantarilla conectada al metro
`;

const transportStep = `La noche se acerca. Para avanzar rápido deben decidir: improvisar un medio de transporte o confiar en sus propias fuerzas. El tiempo es limitado.

Opción A: Reparar una bicicleta
Opción B: Ir a pie
`;

// Results
const foodResult = {
  A: "Encuentran comida y agua.",
  B: "Obtienen linterna, pero pierden 1 miembro por represalia."
}

const shelterResult = {
  A: 'Encuentran botiquín y descansan.',
  B: 'Hay escombros, uno se lastima.',
  C: 'Encuentran una batería portátil, pero hay signos de radioactividad cerca.',
}

const helpIgnoreResult = {
  A: 'Ganan un miembro agradecido con recursos.',
  B: 'Nada ganado.',
  C: 'Obtienen una linterna.',
  D: 'Obtienen comida, pero pierden 2 miembros por represalia.'
}

const smokeResult = {
  A: 'Encuentran gasolina y una llave vieja.',
  B: 'Evitan una emboscada, pero pierden oportunidad de obtener objetos.'
};

const explorationResult = {
  A: 'Encuentran un dron con información.',
  B: 'Se enfrentan a animales salvajes.',
  C: 'Llegan cerca de una entrada secreta al siguiente nivel.'
}

const transportResult = {
  A: 'Avanzan rápido, encuentran mochila con recursos.',
  B: 'Caminan mucho, cansancio general.'
}

// SUCCESS
export const initialDone = "Has logrado sobrevivir al impacto inicial del apagón global. La ciudad es un caos. El grupo tiene pocas provisiones, sin saber qué ocurrió realmente. Todo indica que si no logran encontrar suministros, se convertirán en una estadística más. Hay rumores de una salida segura a través del sistema subterráneo de metro. Pero antes, debes resistir en la superficie el tiempo suficiente para prepararte.";

export const transportDone = "A pesar de los riesgos, tu grupo ha logrado reunir recursos vitales. En medio del silencio de la ciudad, encuentran una compuerta metálica marcada con un símbolo de evacuación. El mapa encontrado coincide con un acceso a los túneles del metro. La verdadera prueba está por comenzar bajo tierra, donde la oscuridad y los restos del colapso pondrán a prueba su determinación.";

export const steps = [
  initialStep,
  foodStep,
  shelterStep,
  helpIgnoreStep,
  smokeStep,
  explorationStep,
  transportStep
];

export const results = [
  {},
  foodResult,
  shelterResult,
  helpIgnoreResult,
  smokeResult,
  explorationResult,
  transportResult
]