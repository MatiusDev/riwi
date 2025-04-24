# Desarrollar un programa que demuestre tu capacidad para aplicar conceptos básicos de entrada de datos, tipos de datos, y operadores en Python.
# Paso 1 	Análisis y planificación del problema: Lee y analiza el enunciado para comprender los requisitos. Lista las tareas que el programa debe realizar para mantener un flujo ordenado y no omitir ningún elemento.
# Paso 2 	Entrada y validación de datos: Implementa la captura de datos desde la consola, solicitando toda la información necesaria. Asegúrate de que los datos ingresados sean del tipo y formato correctos para evitar errores en el procesamiento.
# Paso 3 	Desarrollo de la lógica del programa: Divide el problema en subtareas más pequeñas para facilitar el desarrollo. Aplica operadores aritméticos, relacionales y lógicos para procesar los datos ingresados y resolver el problema.
# Paso 4 	Generación y formato de resultados: Muestra los resultados en la consola de forma clara y legible, considerando varios casos para garantizar su comprensión.
# Paso 5 	Pruebas y revisión: Realiza pruebas con entradas variadas, incluyendo casos límite, para asegurar que el programa funcione correctamente. Revisa el código en busca de errores y asegúrate de que sea estructurado y coherente.
# Paso 6 	Entrega: Comprime tu código en un archivo .zip o proporciona un enlace a un repositorio público de GitHub y súbelo a Moodle antes de la fecha límite.

def is_a_number(str):
    if (len(str) == 0):
        return False
    
    try:
        int(str)
        return True
    except ValueError:
        return False
    
def valid_option(opt):
    if (not is_a_number(opt)):
        return False
    
    num_opt = int(opt)
    if (num_opt < -1 or num_opt > 2):
        return False
    return True

USERS = [
    {
        "username": "matiusdev",
        "password": "12345",
        "fullname": "Mateo Monsalve",
        "age": 27,
        "is_admin": True,
        "points": 0.5
    },
    {
        "username": "admin",
        "password": "admin12345",
        "fullname": "Admon AI",
        "age": 9999,
        "is_admin": True,
        "points": 0
    },
    {
        "username": "fmercury",
        "password": "mercury123",
        "fullname": "Fredy Mercury",
        "age": 56,
        "is_admin": False,
        "points": 200.0
    }
]

opts = [
    "Mostrar productos",
    "Mostrar usuarios"
]

def start():
    while(True):
        print("*** BIENVENIDO AL SISTEMA DE INVENTARIO ***\n")

        opt = input("1. Ingresar sesión\n" \
        "0. Salir\n" \
        "Ingrese su opción: ")

        if(not valid_option(opt)):
            print("\nPor favor ingrese una opción valida!!!\n\n")
            continue
        
        if (int(opt) == 0):
            break

        print("")
        username = input("Ingrese su nombre de usuario: ")
        password = input("Ingrese su contraseña: ")

        user = {}
        for usr in USERS:
            if usr.get("username") == username:
                if usr.get("password") == password:
                    user = usr
                break

        if (user == {}):
            print("\nAcceso no permitido, por favor consulte con un administrador!\n\n")
            continue

        while(True):
            print("")
            print(f"Bienvenido de nuevo {user['fullname']}, ¿Qué deseas hacer hoy?")
            for i in range(len(opts)):
                print(f"{i+1}. {opts[i]}")
            print("0. Salir")
            action = input("Seleccione su opción: ")
            action = int(action)
            
            if (action == 0):
                break

            print(f"La opción que elegiste fue: {opts[action-1]}")            
        print(f"\nGracias por usar nuestro software {user["fullname"]}\n")
    print(f"Recuerda calificar tu experiencia con la aplicación, ten un buen día :)")

if __name__ == "__main__":
    start()