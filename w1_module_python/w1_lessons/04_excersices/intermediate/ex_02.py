from validations.validate import is_valid_string

def is_palindrome(str: str):
  str_lower = str.lower()
  return str_lower == str_lower[::-1]

def main():
  word = ""
  while word == "":
    word = input("Ingrese una palabra: ")
    if not is_valid_string(word):
      word = ""
      print("La palabra no es válida")
      continue
  
  if is_palindrome(word):
    print(f"{word} es un palíndromo")
  else:
    print(f"{word} no es un palíndromo")