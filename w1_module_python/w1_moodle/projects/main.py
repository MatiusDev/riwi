import random

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
    "Agregar producto",
    "Editar producto",
    "Eliminar producto",
    "Limpiar carrito",
    "Calcular total"
]

opts_admin = opts + [
    "Mostrar usuarios"
]

products = []

def is_a_number(str):
    if (len(str) == 0):
        return False
    
    try:
        int(str)
        return True
    except ValueError:
        return False
    
def is_a_float(str):
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

def show_action(opt, user):
    if (type(opt) != int):
        print("\nHa ocurrido un error, por favor consulta un administrador")
        return

    # Validar si productos están vacíos
    if (opt == 1 or opt > 2 and opt <= len(opts)):
        if (len(products) == 0):
            print("\nNo hay productos en el carrito.")
            return
    
    SHOW_USERS = opts_admin.index("Mostrar usuarios")+1
    match opt:
        case 1:# Mostrar productos
            print("\n*** LISTA DE PRODUCTOS ***")
            print(f"\n{'ID'.ljust(15)}| {'Nombre'.ljust(20)}| {'Precio'.ljust(10)}| {'Cantidad'.ljust(15)}| Descuento (%)")
            print("---------------------------------------------------------------------------------")
            for product in products:
                print(f"{str(product['id']).ljust(15)}| {str(product['name']).ljust(20)}| {str(product['price']).ljust(10)}| {str(product['amount']).ljust(15)}| {product['discount']}")
        case 2:# Agregar producto
            print("*** NUEVO PRODUCTO ***")
            name = input("Ingrese el nombre: ")

            price = input("Ingrese el precio: ")
            if not is_a_float(price):
                print("Debes ingresar un precio valido")
                return
            
            price = float(price)
            if price < 0:
                print("El precio debe ser un valor positivo")
                return

            amount = input("Ingrese la cantidad: ")
            if not is_a_number(amount):
                print("Debes ingresar una cantidad valida")
                return
            
            amount = int(amount)
            if amount < 0:
                print("La cantidad debe ser un valor positivo")
                return
            
            discount = input("Ingrese el descuento (0 - 100)%: ")
            if not is_a_float(discount):
                print("Debes ingresar un descuento valido")
                return
            
            discount = float(discount)
            print(discount)
            if (discount < 0 or discount > 100):
                print("Debes ingresar un descuento entre 0 y 100 %")
                return

            id = f"2025{random.randrange(0, 2025) * random.randint(1, 13)}"
            product = {
                "id": id,
                "name": name,
                "price": price,
                "amount": amount,
                "discount": discount
            }
            products.append(product)
            print("\nEl producto fue agregado correctamente.")
        case 3:# Editar producto
            print("\n*** EDITAR PRODUCTO ***")
            id = input("Ingrese el ID del producto: ")
            
            for product in products:
                if product["id"] == id:
                    name = input("Ingrese el nuevo nombre: ")

                    price = input("Ingrese el precio: ")
                    if not is_a_float(price):
                        print("Debes ingresar un precio valido")
                        return
                    
                    price = float(price)
                    if price < 0:
                        print("El precio debe ser un valor positivo")
                        return

                    amount = input("Ingrese la cantidad: ")
                    if not is_a_number(amount):
                        print("Debes ingresar una cantidad valida")
                        return
                    
                    amount = int(amount)
                    if amount < 0:
                        print("La cantidad debe ser un valor positivo")
                        return
                    
                    discount = input("Ingrese el descuento (0 - 100)%: ")
                    if not is_a_float(discount):
                        print("Debes ingresar un descuento valido")
                        return
                    
                    discount = float(discount)
                    print(discount)
                    if (discount < 0 or discount > 100):
                        print("Debes ingresar un descuento entre 0 y 100 %")
                        return

                    product["name"] = name
                    product["price"] = price
                    product["amount"] = amount
                    product["discount"] = discount
                    break
            else:
                print("No se encontró el producto con ese ID.")
         
        case 4:# Eliminar producto
            print("\n*** ELIMINAR PRODUCTO ***")
            id = input("Ingrese el ID del producto: ")
            
            for product in products:
                if product["id"] == id:
                    products.remove(product)
                    break
            else:
                print("No se encontró el producto con ese ID.")
        case 5:# Limpiar carrito
            print("\n*** LIMPIAR CARRITO ***")
            products.clear()
            print("El carrito ha sido limpiado.")
        case 6:# Calcular total
            print("\n*** CALCULAR TOTAL ***")
            total = 0
            for product in products:
                total += product["price"] * product["amount"] * (1 - product["discount"] / 100)
            print(f"El total de la compra es: {total}")
        case _ if opt == SHOW_USERS:
            if not user['is_admin']:
                print("Ingresaste una opción invalida")
                return
            
            print(f"\n{'Nombre completo'.ljust(20)}| {'Nombre de usuario'.ljust(25)}| {'Edad'.ljust(5)}| {'Role'}")
            print("----------------------------------------------------------------------")
            for user in USERS:
                print(f"{str(user['fullname']).ljust(20)}| {str(user['username']).ljust(25)}| {str(user['age']).ljust(5)}| {'Administrador' if user['is_admin'] else 'Usuario'}" )
        case _:
            print("Ingresaste una opción invalida")

def start():
    while(True):
        print("*** BIENVENIDO AL CARRITO DE COMPRAS ***\n")

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
            print(f"Bienvenido {user['fullname']}, ¿Qué deseas hacer hoy?")

            my_opts = opts_admin if user['is_admin'] else opts

            for i in range(len(my_opts)):
                print(f"{i+1}. {my_opts[i]}")
            print("0. Salir")
            action = input("Seleccione su opción: ")
                        
            if not is_a_number(action):
                print("Por favor ingrese una opción valida.")
                continue

            action = int(action)

            if (action == 0):
                break

            show_action(action, user)          
        print(f"\nGracias por usar nuestro software {user['fullname']}\n")
    print(f"Recuerda calificar tu experiencia con la aplicación, ten un buen día :)")

if __name__ == "__main__":
    start()