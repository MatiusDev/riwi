# 1. Solicitar la edad de 2 personas, guardarlas y validar quien es mayor y mencionar quien es mayor de edad

name_1 = input("Ingresa el nombre de la persona 1: ")
age_1 = int(input("Ingrese la edad de la persona 1: "))
name_2 = input("Ingresa el nombre de la persona 2: ")
age_2 = int(input("Ingrese la edad de la persona 2: "))

is_older(age_1, name_1)
is_older(age_2, name_2)

if (age_1 > age_2):
    print(f"{name_1} es mayor que {name_2}")
else
    print(f"{name_2} es mayor que {name_1}")

def is_older(age, name):
    if (age > 18):
        print(f"{name} es mayor de edad")

pri
        

# 2. Solicitar el nombre, edad y notas de universidad de una personas, pedir un total de 5 notas y calcular el promedio de las notas, y si el promedio es inferior a 3, entonces mostrar en consola que perdió la materia, si es mayor o igual a 3, imprimir ganaste.

# 3. Pedir un número al usuario por terminal y determinar si es un número par o impar

# 4. Pedir un número al usuario por terminal y determinar si es un número primo.

# 5. Pide un número entero, si no es entero, sacar un error indicando que no se aceptan decimales. Si el número es multiplo de 3, imprime la palabra "FIZZ", si es multiplo de 5 imprime "BUZZ" y si es multiplo de 15, imprimer "FIZZBUZZ"
