from validations.validate import to_valid_int

def remove_duplicated(numbers: list) -> list:
  my_set = set()
  for num in numbers:
    my_set.add(num)
  return list(my_set)

def main() -> None:
  flag = True
  while flag:
    numbers = input("Ingrese sus números separados por comas: ").replace(' ', '').split(',')
    numbers = [to_valid_int(num) for num in numbers]
    if -1 in numbers:
      print("Error: Solo puedes ingresar números separados por comas, Ejm: 1, 2, 3, 4, 5")
      continue
    
    unique_numbers = remove_duplicated(numbers)
    print(f"Sus números son {numbers} y la lista de números sin duplicados {unique_numbers}")
    flag = False