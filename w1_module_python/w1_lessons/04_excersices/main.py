from validations.validate import to_valid_int

from intermediate import ex_01 as i_01, ex_02 as i_02, ex_03 as i_03, ex_04 as i_04, ex_05 as i_05, ex_06 as i_06, ex_07 as i_07
from advanced import ex_01 as a_01, ex_02 as a_02, ex_03 as a_03, ex_04 as a_04, ex_05 as a_05

def main_menu() -> int:
  print("Bienvenido al menu principal\n"\
      "1. Programas básicos\n"\
      "2. Programas intermedios\n"\
      "3. Programas avanzados\n"\
      "4. Salir\n")
  opt = to_valid_int(input("Elige una opción: "))
  print()
  return opt

def basic_menu() -> int:
  pass

def basic_actions(opt: int):
  pass

def intermediate_menu() -> int:
  print("\nBienvenido al menu intermedio\n"\
      "1. Filtrar pares\n"\
      "2. Validar palindromo\n"\
      "3. Factorial\n"\
      "4. Eliminar duplicados\n"\
      "5. FizzBuzz\n"\
      "6. Contar vocales\n"\
      "7. Invertir texto\n"\
      "8. Regresar al menú principal\n")
  opt = to_valid_int(input("Elige una opción: "))
  print()
  return opt 

def intermediate_actions(opt: int) -> bool:
  match opt:
    case 1:
      i_01.main()
    case 2:
      i_02.main()
    case 3:
      i_03.main()
    case 4:
      i_04.main()
    case 5:
      i_05.main()
    case 6:
      i_06.main()
    case 7:
      i_07.main()
    case 8:
      return True
    case _:
      print("Opción no válida, intenta de nuevo.")
  return False

def advance_menu() -> int:
  print("\nBienvenido al menu avanzado\n"\
      "1. Validar contraseña segura\n"\
      "2. Simular dado\n"\
      "3. Suma de elementos únicos\n"\
      "4. Generador de contraseñas\n"\
      "5. Composición de funciones\n"\
      "6. Regresar al menú principal\n")
  opt = to_valid_int(input("Elige una opción: "))
  print()
  return opt 

def advance_actions(opt: int) -> bool:
  match opt:
    case 1:
      a_01.main()
    case 2:
      a_02.main()
    case 3:
      a_03.main()
    case 4:
      a_04.main()
    case 5:
      a_05.main()
    case 6:
      return True
    case _:
      print("Opción no válida, intenta de nuevo.")
  return False

def start():
  main_opt = 0
  while True:
    if main_opt == 0:
      main_opt = main_menu()
    
    match main_opt:
      case 1: 
        opt = basic_menu()
      case 2:
        opt = intermediate_menu()
        exit = intermediate_actions(opt)
        if exit:
          main_opt = 0
          continue
      case 3:
        opt = advance_menu()
        exit = advance_actions(opt)
        if exit:
          main_opt = 0
          continue
      case 4:
        print("Saliendo...")
        break
      case _:
        print("Opción no válida, intenta de nuevo.")
        continue

if __name__ == "__main__":
  start()