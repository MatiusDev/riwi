# 4. Pedir un número al usuario por terminal y determinar si es un número primo.
while(True):

    str_number = input("Ingrese un número: ")

    if (not str_number.isnumeric()):
        print("Debes ingresar un número")

    number = int(str_number)

    if (number < -1):
        print("Debes ingresar un número entero positivo")

    def is_prime(num):
        if (num < 2):
            return False
        
        for i in range(2, num-1):
            if (num % i == 0):
                return False
        return True

    if (is_prime(number)):
        print(f"El número es primo")
    else:
        print(f"El número no es primo")

    opt = int(input("\n¿Deseas probar otro número?\n1. Si\n0. No\nIngresa tu opción: "))
    if (opt != 1):
        break

