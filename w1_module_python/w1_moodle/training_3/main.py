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
def to_valid_int(value: int):
  try:
    return int(value)
  except ValueError:
    return -1

# Función para validar un float y convertirlo a un float válido
# Si no se puede convertir, devuelve -1
def to_valid_float(value: float):
  try:
    return float(value)
  except ValueError:
    return -1

# Función para validar si los productos están vacíos
def is_empty(products: dict):
  # Verifica si el inventario está vacío
  if len(products) == 0:
    print("\nError: No hay productos en el inventario.\n")
    return True
  return False

# Función para mostrar el menú de agregar productos y validar la entrada
def show_add_menu(products: dict):
  print("\n*** Agregar Producto ***")
  while True:
    # Se pide el nombre del producto y se valida
    name = input("Ingrese el nombre del producto: ")
    # Se valida el nombre del producto no esté vacío y que contenga solo letras
    if not is_a_valid_string(name):
      continue
    # Se valida si el producto ya existe en el inventario
    if name in products:
      print("\nError: El producto que deseas agregar ya existe en el inventario\n")
      continue
    
    # Se pide la cantidad del producto y se valida
    amount = to_valid_int(input("Ingrese la cantidad del producto: "))
    if amount < 1:
      print("\nError: Porfavor ingrese una cantidad de producto válida\n")
      continue
    
    # Se pide el precio del producto y se valida
    price = to_valid_float(input("Ingrese el precio del producto: "))
    if price < 1:
      print("\nError: Por favor ingrese un precio de producto válido\n")
      continue
    # Si todas las validaciones son correctas, se agrega el producto al inventario
    add_product(name, amount, price, products)
    return

# Función para agregar un producto al inventario
def add_product(name: str, amount: int, price: float, products: dict):
  products[name] = (amount, price)
  print(f"\nEl producto {name} se ha agregado correctamente en el inventario.\n")

# Función para mostrar el menú de consultar productos y validar la entrada
def show_get_menu(products):
  # Se verifica si el inventario está vacío
  if is_empty(products):
    return
  
  print("\n*** Consultar Producto ***")
  while True:
    print("Si desea regresar al menú principal por favor ingrese 'volver'.\n")
    # Se pide el nombre del producto y se valida
    name = input("Ingrese el nombre del producto: ").strip()
    # Se valida el nombre del producto
    if not is_a_valid_string(name):
      continue
    # Se valida si el usuario desea regresar al menú principal
    if name.lower() == "volver":
      print("\nRegresando al menú principal...\n")
      return
    # Se verifica si el producto existe en el inventario
    if not name in products:
      print("\nError: El producto no existe en el inventario.\n")
      continue
    # Se consulta el producto en el inventario
    amount, price = get_products(name, products)
    print(f"\nEl producto {name} tiene {amount} unidades y un precio de ${price:,.2f} pesos.\n")
    return

# Función para consultar un producto en el inventario
def get_products(name: str, products: dict): 
  # Si existe, se devuelve la cantidad y el precio del producto
  return products[name]

# Función para mostrar el menú de actualizar productos y validar la entrada
def show_update_menu(products: dict):
  # Se verifica si el inventario está vacío
  if is_empty(products):
    return
  print("\n*** Actualizar Precio de Producto ***")
  while True:
    product_names = list(products.keys())
    print("Productos disponibles:")
    for i, name in enumerate(product_names, start=1):
      print(f"{i}. {name}")
    idx = to_valid_int(input("\nSeleccione el producto que desea actualizar: "))
    # Se valida si el índice de producto es válido y está dentro del rango
    if idx < 1 or idx > len(product_names):
      print("\nError: Selección no válida. Por favor, seleccione un producto de la lista.\n")
      continue
    name = product_names[idx - 1]
    print(f"\nProducto seleccionado: {name}")
    # Se pide el nuevo precio y se valida
    price = to_valid_float(input("Ingrese el nuevo precio del producto: "))
    if price < 1:
      print("\nError: Por favor ingrese un precio de producto válido\n")
      continue
    # Se actualiza el precio del producto en el inventario
    update_product(name, price, products)
    return

# Función para actualizar el precio de un producto en el inventario
def update_product(name: str, price: float, products: dict):
  # Se actualiza el precio del producto en el inventario
  amount = products[name][0]
  products[name] = (amount, price)
  print(f"\nEl precio del producto {name} se ha actualizado correctamente a ${price:,.2f} pesos.\n")
  
# Función para mostrar el menú de eliminar productos y validar la entrada
def show_delete_menu(products: dict):
  # Se verifica si el inventario está vacío
  if is_empty(products):
    return
  print("\n*** Eliminar Producto ***")
  while True:
    # Se pide el nombre del producto y se valida
    name = input("Ingrese el nombre del producto: ")
    if not is_a_valid_string(name):
      continue
    # Se elimina el producto del inventario
    delete_product(name, products)
    return

# Función para eliminar un producto del inventario
def delete_product(name: str, products: dict):
  # Se verifica si el producto existe en el inventario
  if name in products:
    del products[name]
    print(f"\nEl producto {name} se ha eliminado correctamente del inventario.\n")
  else:
    print("\nError: El producto no existe en el inventario.\n")

# Función para mostrar el total por producto
def get_total_by_product(products: dict):
  str_value = ""
  for name, (amount, price) in products.items():
    str_value += f"{name} ({amount} uds X ${price:,.2f}): ${(amount * price):,.2f} pesos\n"
  return str_value

# Función para mostrar el menú de calcular valor total del inventario
def show_calculate_menu(products: dict):
  # Se verifica si el inventario está vacío
  if is_empty(products):
    return
  print("\n*** Calcular Valor Total del Inventario ***")
  # Se calcula el valor total del inventario
  total_value = calculate_total_value(products)
  print(f"{get_total_by_product(products)}")
  print(f"El valor total del inventario es: ${total_value:,.2f} pesos.\n")

# Función para calcular el valor total del inventario
def calculate_total_value(products: dict):
  # Se define una función lambda para calcular el valor total de un producto
  calc_total = lambda p: p[0] * p[1]
  # Se calcula el valor total del inventario con función lambda
  total_value = 0
  for product in products.values():
    total_value += calc_total(product)
  return total_value

# Inicio del programa
def start():
  products = {}
  menu_options = [
    "Añadir producto",
    "Buscar producto por nombre",
    "Actualizar precio",
    "Eliminar producto",
    "Calcular valor total del inventario",
    "Salir"
  ]
  
  print("*** Sistema de Inventario ***")
  print("Bienvenido al sistema de inventario.") 
  while True:
    # Mostrar el menú de opciones
    for i, opt in enumerate(menu_options, start=1):
      print(f"{i}. {opt}")
    opt = to_valid_int(input("Seleccione una opción: "))
    
    # Validar si la opción es 'salir'
    if opt == len(menu_options):
      if len(products) > 0:
        print("\nResumen del total de productos en inventario:")
        print(get_total_by_product(products))
        print(f"El valor total del inventario es: ${calculate_total_value(products):,.2f} pesos.")
      
      print("\nGracias por usar el sistema de inventario. ¡Hasta luego!")
      break
    
    match opt:
      case 1:
        show_add_menu(products)
      case 2:
        show_get_menu(products)
      case 3:
        show_update_menu(products)
      case 4:
        show_delete_menu(products)
      case 5:
        show_calculate_menu(products)
      case _:
        print("\nError: Opción no válida. Por favor, seleccione una opción del menú.\n")
        continue

if __name__ == "__main__":
  start()