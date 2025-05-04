# Función para validar un string valido
def is_a_valid_string(str_value: str):
  # Validar que el string no esté vacío y que contenga solo letras
  if len(str_value) == 0:
    print("\nError: No puedes ingresar un nombre vacío.\n")
    return False
  # Validar que el string no contenga caracteres especiales ni números
  if not str_value.replace(' ', '').isalpha():
    print("\nError: El nombre solo puede contener letras.\n")
    return False
  return True

# Función para validar un entero y convertirlo a un entero válido
# Si no se puede convertir, devuelve -1
def convert_to_valid_int(value: int):
  try:
    return int(value)
  except ValueError:
    return -1

# Función para validar un float y convertirlo a un float válido
# Si no se puede convertir, devuelve -1
def convert_to_valid_float(value: float):
  try:
    return float(value)
  except ValueError:
    return -1

# Función para mostrar el menú de agregar productos y validar la entrada
def show_add_menu():
  print("\n*** Agregar Producto ***")
  while True:
    # Se pide el nombre del producto y se valida
    name = input("Ingrese el nombre del producto: ")
    if not is_a_valid_string(name):
      continue
    if name in products:
      print("\nError: El producto que deseas agregar ya existe en el inventario\n")
      continue
    
    # Se pide la cantidad del producto y se valida
    amount = input("Ingrese la cantidad del producto: ")
    amount = convert_to_valid_int(amount)
    if amount < 1:
      print("\nError: Porfavor ingrese una cantidad de producto válida\n")
      continue
    
    # Se pide el precio del producto y se valida
    price = input("Ingrese el precio del producto: ")
    price = convert_to_valid_float(price)
    if price < 1:
      print("\nError: Por favor ingrese un precio de producto válido\n")
      continue
    # Si todas las validaciones son correctas, se agrega el producto al inventario
    add_product(name, amount, price)
    return

# Función para agregar un producto al inventario
def add_product(name: str, amount: int, price: float):
  products[name] = (amount, price)
  print(f"\nEl producto {name} se ha agregado correctamente en el inventario.\n")

# Función para mostrar el menú de consultar productos y validar la entrada
def show_get_menu():
  print("\n*** Consultar Producto ***")
  while True:
    # Se pide el nombre del producto y se valida
    name = input("Ingrese el nombre del producto: ")
    if not is_a_valid_string(name):
      continue
    # Se consulta el producto en el inventario
    get_products(name)
    return

# Función para consultar un producto en el inventario
def get_products(name: str):
  # Se verifica si el producto existe en el inventario
  if name in products:
    amount, price = products[name]
    print(f"\nEl producto {name} tiene {amount} unidades y un precio de {price}.\n")
  else:
    print("\nError: El producto no existe en el inventario.\n")

# Función para mostrar el menú de actualizar productos y validar la entrada
def show_update_menu():
  print("\n*** Actualizar Precio de Producto ***")
  while True:
    product_names = list(products.keys())
    print("Productos disponibles:")
    for i, name in enumerate(product_names, start=1):
      print(f"{i}. {name}")
    idx = input("\nSeleccione el producto que desea actualizar: ")
    idx = convert_to_valid_int(idx)
    if idx < 1 or idx > len(product_names):
      print("\nError: Selección no válida. Por favor, seleccione un producto de la lista.\n")
      continue
    name = product_names[idx - 1]
    # Se pide el nuevo precio y se valida
    price = input("Ingrese el nuevo precio del producto: ")
    price = convert_to_valid_float(price)
    if price < 1:
      print("\nError: Por favor ingrese un precio de producto válido\n")
      continue
    # Se actualiza el precio del producto en el inventario
    update_product(name, price)
    return

# Función para actualizar el precio de un producto en el inventario
def update_product(name: str, price: float):
  # Se actualiza el precio del producto en el inventario
  amount = products[name][0]
  products[name] = (amount, price)
  print(f"\nEl precio del producto {name} se ha actualizado correctamente a {price}.\n")
  
# Función para mostrar el menú de eliminar productos y validar la entrada
def show_delete_menu():
  print("\n*** Eliminar Producto ***")
  while True:
    # Se pide el nombre del producto y se valida
    name = input("Ingrese el nombre del producto: ")
    if not is_a_valid_string(name):
      continue
    # Se elimina el producto del inventario
    delete_product(name)
    return

# Función para eliminar un producto del inventario
def delete_product(name: str):
  # Se verifica si el producto existe en el inventario
  if name in products:
    del products[name]
    print(f"\nEl producto {name} se ha eliminado correctamente del inventario.\n")
  else:
    print("\nError: El producto no existe en el inventario.\n")

# Función para mostrar el menú de calcular valor total del inventario
def show_calculate_menu():
  print("\n*** Calcular Valor Total del Inventario ***")
  # Se calcula el valor total del inventario
  total_value = calculate_total_value()
  print(f"\nEl valor total del inventario es: {total_value}.\n")

# Función para calcular el valor total del inventario
def calculate_total_value():
  # Se calcula el valor total del inventario con función lambda
  calc_total = lambda p: p[0] * p[1]
  total_value = 0
  for product in products.values():
    total_value += calc_total(product)
  return total_value

products = {}

menu_options = [
  "Añadir un producto",
  "Consultar un producto",
  "Actualizar precio de un producto",
  "Eliminar precio de un producto",
  "Calcular el valor total del inventario",
  "Salir"
]

# Inicio del programa
def start():
  print("*** Sistema de Inventario ***")
  print("Bienvenido al sistema de inventario.") 
  while True:
    # Mostrar el menú de opciones
    for i, opt in enumerate(menu_options, start=1):
      print(f"{i}. {opt}")
    opt = input("Seleccione una opción: ")
    opt = convert_to_valid_int(opt)
    
    # Validar si la opción es 'salir'
    if opt == len(menu_options):
      print("\nGracias por usar el sistema de inventario. ¡Hasta luego!")
      break
    
    match opt:
      case 1:
        show_add_menu()
        print(products)
      case 2:
        show_get_menu()
      case 3:
        show_update_menu()
      case 4:
        show_delete_menu()
      case 5:
        show_calculate_menu()
      case _:
        print("\nError: Opción no válida. Por favor, seleccione una opción del menú.\n")
        continue

if __name__ == "__main__":
  start()