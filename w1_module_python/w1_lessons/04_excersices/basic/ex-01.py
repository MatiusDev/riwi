import random

def validate_name(name):
    if (len(name) == 0):
        print("El nombre está vacío")
        return False

    if (not name.replace(' ', '').isalpha()):
        print("Su nombre solo debe tener letras")
        return False

    return True

# upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
# lower_letters = upper_letters.lower()
# special_characters = " ,.*+-_(){}[]%$#"
# numbers = "1234567890"
# all_characters = upper_letters + lower_letters + special_characters + numbers


def custom_wave(name):
    if (not validate_name(name)):
        return

    greetings = [
        f"Bienvenido {name}, es un placer saludarte",
        f"Es un honor tener aquí {name}",
        f"Saludos terricola {name}",
        f"¿Que haremos hoy? {name}",
        f"Hola mundo! te deseo un gran día {name}",
        f"Tons {name}? Ready o no mi socio",
        f"¿Que hay pa hacer hoy? {name}",
        f"Mi estimado {name}, me complace saludarle el día de hoy.",
        f"Hola {name}!!! ¿cómo te ha ido hoy?"
    ]
    opt = random.randint(0, len(greetings)) 
    print(greetings[opt])

name = input("Ingrese su nombre: ").strip()
custom_wave(name)