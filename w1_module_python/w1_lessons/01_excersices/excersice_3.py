# 3. Pedir un número al usuario por terminal y determinar si es un número par o impar

number = int(input("Ingrese un número: "))

if (number % 2 == 0):
    print(f"El número {number} es par")
else:
    print(f"El número {number} es impar")