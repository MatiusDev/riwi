from validations.validate import to_valid_int

def factorial(num: int):
  total = 1
  for i in range(2, num+1):
    total *= i
  return total
    
def main():
  num = to_valid_int(input("Ingrese su número: "))
  print(f"\nEl factorial de {num} es {factorial(num):,}.")