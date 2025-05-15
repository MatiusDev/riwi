from validations.validate import to_valid_int

def pair_filter(numbers: list) -> list:
  return [n for n in numbers if n % 2 == 0]

def main() -> None:
  quantity: int = to_valid_int(input("Ingrese la cantidad de números: "))
  if quantity <= 0:
    print("Cantidad inválida")
    return
  
  numbers = []
  count = 0
  while count < quantity:
    number = to_valid_int(input(f"Ingrese el número {count + 1}: "))
    if number == -1:
      print("Número inválido")
      continue
    numbers.append(number)
    count += 1
  
  print(f"Números ingresados: {numbers}")
  print(f"Números pares: {pair_filter(numbers)}")