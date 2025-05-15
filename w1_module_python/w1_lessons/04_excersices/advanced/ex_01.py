def secure_password(password: str):
  is_secure = {
    "lower": False,
    "upper": False,
    "numbers": False,
    "symbols": False
  }
  translation = {
    "lower": "Minusculas",
    "upper": "Mayusculas",
    "numbers": "Números",
    "symbols": "Simbolos"
  }
  lowers = "abcdefghijklmnopqrstuvwxyz"
  uppers = lowers.upper()
  numbers = "1234567890"
  symbols = "|!#$%&()=?¿'{}[]-_;:.,><^¬¡*" 
  
  for char in password:
      if char in lowers:
        is_secure["lower"] = True
      if char in uppers:
        is_secure["upper"] = True
        
      if char in symbols:
        is_secure["symbols"] = True
        
      if char in numbers:
        is_secure["numbers"] = True
        
      if is_secure["lower"] and is_secure["upper"] and is_secure["numbers"] and is_secure["symbols"]:
        break
        
  if is_secure["lower"] and is_secure["upper"] and is_secure["numbers"] and is_secure["symbols"]:
    print("\n✅ Su contraseña es totalmente segura ✅")
  else:
    print("\nSu contraseña no es totalmente segura: ")
    for k, v in is_secure.items():
      print(f"{translation[k]}: {"❌" if not v else "✅"}")

def main() -> None:
  my_str = input("Ingrese una contraseña segura (mayusculas, minusculas, números y simbolos): ")
  secure_password(my_str)
  # print(f"\nLa cadena de texto tiene {vowels} vocales")