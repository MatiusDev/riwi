from validations.validate import to_valid_int

def fizz_buzz(num: int):
  print("\n *** FIZZ BUZZ APP ***")
  if (num % 3 == 0):
        print("FIZZ")
        
  if (num % 5 == 0):
      print("BUZZ")

  if (num % 3 == 0 and num % 5 == 0):
      print("FIZZBUZZ")

def main() -> None:
  flag = True
  while flag:
    number = to_valid_int(input("Ingrese su número: "))
    if number == -1:
      print("Debes ingresar un número entero positivo valido")
      continue
    fizz_buzz(number)
    flag = False