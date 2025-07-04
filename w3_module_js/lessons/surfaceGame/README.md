# Escenario 1: La Superficie

> *"Te despiertas entre escombros. El cielo es rojo, y la ciudad está en ruinas. Debes encontrar suministros y un refugio seguro antes del anochecer."*

## Estado Inicial
- `vida = 5`
- `miembros = 3`
- `mochila = []{}`

los miembros solo cuentan con 1 vida

---
Has logrado sobrevivir al impacto inicial del apagón global. La ciudad es un caos. El grupo tiene pocas provisiones, sin saber qué ocurrió realmente. Todo indica que si no logran encontrar suministros, se convertirán en una estadística más. Hay rumores de una salida segura a través del sistema subterráneo de metro. Pero antes, debes resistir en la superficie el tiempo suficiente para prepararte.

---

##  Buscar comida

El hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela. ¿Dónde buscar recursos vitales?

**Opción A:** Ir al supermercado abandonado  
- Resultado: Encuentran `comida` y `agua`.  
- Efecto: `mochila.push("comida", "agua")`  
- Riesgo: Encuentro leve con saqueador → `vida--`

**Opción B:** Robar mochila a un sobreviviente  
- Resultado: Obtienen `linterna`, pero pierden 1 miembro por represalia.  
- Efecto: `mochila.push("linterna")`, `miembros--`

---

## Lugar de refugio

Con algo de alimento en la mochila, el grupo necesita un lugar seguro donde recuperarse y planear el siguiente movimiento. La ciudad no perdona a quienes se quedan mucho tiempo al descubierto.

**Opción A:** Esconderse en una farmacia  
- Resultado: Encuentran `botiquín` y descansan.  
- Efecto: `mochila.push("botiquin")`, `vida++`

**Opción B:** Ir a una estación de buses  
- Resultado: Hay escombros, uno se lastima.  
- Efecto: `vida--`

**Opción C:** Refugiarse en una tienda de campaña abandonada  
- Resultado: Encuentran una batería portátil, pero hay signos de radioactividad cerca.  
- Efecto: `mochila.push("bateria")`, `vida--`

---

## Ayudar o ignorar

Mientras avanzan, escuchan gritos de auxilio desde un callejón. Ayudar podría ser un acto heroico... o un riesgo innecesario. ¿Cuál será su decisión?

**Opción A:** Ayudar a una familia atrapada  
- Resultado: Ganan un miembro agradecido con recursos.  
- Efecto: `miembros++`, `mochila.push("mapa")`

**Opción B:** Ignorar y seguir avanzando  
- Resultado: Nada ganado.  
- Efecto: `miembros--`

**Opción C:** Distraer a los enemigos y liberar a la familia a distancia  
- Resultado: Obtienen una `linterna`.  
- Efecto: `mochila.push("linterna")`, `vida--`

**Opción D:** Robar los recursos de la familia sin ser vistos  
- Resultado: Obtienen `comida`, pero pierden 2 miembros por represalia.  
- Efecto: `mochila.push("comida")`, `miembros -= 2`

---

##  Señal de humo

Desde lo alto de un edificio, una columna de humo se eleva a lo lejos. ¿Es una señal de auxilio o una trampa mortal? La decisión podría marcar la diferencia.

**Opción A:** Investigar la señal  
- Resultado: Encuentran `gasolina` y una `llave vieja`.  
- Efecto: `mochila.push("llave", "gasolina")`

**Opción B:** Evitar la zona  
- Resultado: Evitan una emboscada, pero pierden oportunidad de obtener objetos.  
- Efecto: Nada ocurre

---

##  Exploración alta o baja

El grupo necesita información. Las rutas están colapsadas, y moverse sin saber puede ser letal. ¿Mejor buscar una vista panorámica o seguir entre las sombras?

**Opción A:** Subir a un edificio a observar  
- Resultado: Encuentran un dron con información.  
- Efecto: `mochila.push("intel")`

**Opción B:** Moverse por callejones  
- Resultado: Se enfrentan a animales salvajes.  
- Efecto: `vida--`

**Opción C:** Usar una alcantarilla conectada al metro  
- Resultado: Llegan cerca de una entrada secreta al siguiente nivel.  
- Efecto: `mochila.push("tarjeta-acceso")`

---

## Medio de transporte

La noche se acerca. Para avanzar rápido deben decidir: improvisar un medio de transporte o confiar en sus propias fuerzas. El tiempo es limitado.

**Opción A:** Reparar una bicicleta  
- Resultado: Avanzan rápido, encuentran mochila con recursos.  
- Efecto: `mochila.push("medicinas", "bateria")`

**Opción B:** Ir a pie  
- Resultado: Caminan mucho, cansancio general.  
- Efecto: `vida--`

---

A pesar de los riesgos, tu grupo ha logrado reunir recursos vitales. En medio del silencio de la ciudad, encuentran una compuerta metálica marcada con un símbolo de evacuación. El mapa encontrado coincide con un acceso a los túneles del metro. La verdadera prueba está por comenzar bajo tierra, donde la oscuridad y los restos del colapso pondrán a prueba su determinación.

---

##  Requisitos para avanzar
- `vida >= 3`
- `mochila.length >= 2`
-  `mapa`

✅ Si cumplen condiciones, pueden ingresar al Túnel del Metro.  
❌ Si no, quedan atrapados en la ciudad y el juego termina.


--- 
- Se debe mostrar siempre el inventario y las estadisticas del juego en pantalla
