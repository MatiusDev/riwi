from validations.validate import to_valid_int

def unique_numbers(numbers: list) -> list:
  dict = {}
  for num in numbers:
    if num in dict:
      dict[num] += 1
      continue
    dict[num] = 1
  return [k for k, v in dict.items() if v == 1]

def main() -> None:
  flag = True
  while flag:
    numbers = input("Ingrese sus números separados por comas: ").replace(' ', '').split(',')
    numbers = [to_valid_int(num) for num in numbers]
    if -1 in numbers:
      print("Error: Solo puedes ingresar números separados por comas, Ejm: 1, 2, 3, 4, 5")
      continue
    
    u_numbers = unique_numbers(numbers)
    add = sum(u_numbers)
    print(f"Números: {numbers} - Números únicos: {u_numbers}")
    print(f"La suma de los números únicos es: {add}")
    flag = False