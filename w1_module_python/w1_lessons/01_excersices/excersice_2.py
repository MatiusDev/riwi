# 2. Solicitar el nombre, edad y notas de universidad de una personas, pedir un total de 5 notas y calcular el promedio de las notas, y si el promedio es inferior a 3, entonces mostrar en consola que perdió la materia, si es mayor o igual a 3, imprimir ganaste.

name = input("Ingrese su nombre: ")
age = int(input("Ingrese su nombre: "))
note_1 = int(input("Ingrese su nota: "))
note_2 = int(input("Ingrese su nombre: "))
note_3 = int(input("Ingrese su nombre: "))
note_4 = int(input("Ingrese su nombre: "))
note_5 = int(input("Ingrese su nombre: "))

avg = (note_1 + note_2 + note_3 + note_4 + note_5) / 5
print(f"Su promedio de las notas es: {avg}")

if (avg > 3):
    print("Perdiste la materia")
else:
    print("Ganaste la materia")