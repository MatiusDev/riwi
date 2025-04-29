pet = {
    "name": "Max",
    "type": "Dog",
    "age": 2,
    "breed": "Pomeranian"
}

pet['lastname'] = "Car"
# del pet['name']

# print(pet)

for k, v in pet.items():
    print(f"[{k}]: {v}")