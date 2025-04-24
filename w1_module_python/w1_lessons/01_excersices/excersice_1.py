# 1. Solicitar la edad de 2 personas, guardarlas y validar quien es mayor y mencionar quien es mayor de edad

name_1 = input("Ingresa el nombre de la persona 1: ")
age_1 = int(input("Ingrese la edad de la persona 1: "))
name_2 = input("Ingresa el nombre de la persona 2: ")
age_2 = int(input("Ingrese la edad de la persona 2: "))

def is_older(age, name):
    if (age >= 18):
        print(f"{name} es mayor de edad")

is_older(age_1, name_1)
is_older(age_2, name_2)

if (age_1 > age_2):
    print(f"{name_1} es mayor que {name_2}")
else:
    print(f"{name_2} es mayor que {name_1}") 