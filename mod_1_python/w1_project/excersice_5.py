# 5. Pide un número entero, si no es entero, sacar un error indicando que no se aceptan decimales. Si el número es multiplo de 3, imprime la palabra "FIZZ", si es multiplo de 5 imprime "BUZZ" y si es multiplo de 15, imprimer "FIZZBUZZ"

num = input("Ingrese un número: ")

try:
    number = int(num)

    if (number % 3 == 0):
        print("FIZZ")
        
    if (number % 5 == 0):
        print("BUZZ")

    if (number % 15 == 0):
        print("FIZZBUZZ")
except ValueError as ex:
    print("No se aceptan decimales")