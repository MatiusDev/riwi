import random
from validations.validate import to_valid_int

def generate_password(lenght: int):
  lowers = "abcdefghijklmnopqrstuvwxyz"
  uppers = lowers.upper()
  numbers = "1234567890"
  symbols = "|!#$%&()=?¿'{}[]-_;:.,><^¬¡*"
  all_chars = lowers + uppers + numbers + symbols
  
  password = ""
  for _ in range(lenght):
    rd = random.randint(0, len(all_chars)-1)
    password += all_chars[rd]
    
  return password

def main() -> None:
  lenght = to_valid_int(input("Ingrese la cantidad de caracteres para generar la contraseña: "))
  password = generate_password(lenght)
  print(f"\nSu contraseña es {password}, guardala en un lugar seguro!")
  