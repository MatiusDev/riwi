pet = {
    "name": "Max",
    "type": "Dog",
    "age": 2,
    "breed": "Pomeranian"
}

pet['lastname'] = "Car"
# del pet['name']

# print(pet)

# for k, v in pet.items():
#     print(f"[{k}]: {v}")


words = ["a", "asbs", "adsga", "b", "lk", "lk", "lk", "a"]

def word_counter(words):
    counter = {}
    for word in words:
        if not word in counter:
            counter[word] = 1
            continue
        counter[word] += 1
    print(counter)

word_counter(words)


# Parte 2: Intermedio
# Crea un diccionario paises donde las claves sean nombres de países y los valores sus capitales.

# Escribe un programa que pregunte al usuario un país y devuelva su capital (si existe).

# Invierte el diccionario paises, es decir, que las capitales sean las claves y los países los valores.

countries = {
    "Colombia": "Bogotá",
    "Argentina": "Buenos Aires",
    "Perú": "Lima",
    "Chile": "Santiago",
    "Ecuador": "Quito",
    "Brasil": "Brasilia",
    "Venezuela": "Caracas",
    "Bolivia": "Sucre",
    "Paraguay": "Asunción",
    "Uruguay": "Montevideo",
    "México": "Ciudad de México",
    "España": "Madrid",
    "Francia": "París",
    "Italia": "Roma",
    "Alemania": "Berlín",
    "Reino Unido": "Londres",
    "Canadá": "Ottawa",
    "Estados Unidos": "Washington D.C.",
    "Japón": "Tokio",
    "China": "Pekín",
    "Australia": "Canberra",
    "Egipto": "El Cairo",
    "Sudáfrica": "Pretoria",
    "Rusia": "Moscú"
}
cities = { city: country for country, city in countries.items()}

# cities = {}
# for country, city in countries.items():
#     cities[city] = country

def find_country():
    country = input("Ingrese su país: ").lower().capitalize()

    if country in countries:
        print(f"La ciudad {countries[country]} fue encontrada!")

def find_city():
    city = input("Ingrese una ciudad: ").lower().capitalize()

    if city in cities:
        print(f"El país {cities[city]} fue encontrada!")

# find_country()
# find_city()

# Crea un diccionario de estudiantes donde las claves sean los nombres y los valores sus notas finales.
# Después imprime los nombres de los estudiantes que aprobaron (nota mayor o igual a 6)

