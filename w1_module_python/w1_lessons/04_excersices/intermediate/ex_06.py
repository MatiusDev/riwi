from validations.validate import to_valid_int

def count_vowels(my_str: str):
  count = 0
  vowels = "aeiou"
  for char in my_str:
    if char in vowels:
      count += 1
  return count

def main() -> None:
  my_str = input("Ingrese una cadena de texto: ").lower()
  vowels = count_vowels(my_str)
  print(f"\nLa cadena de texto tiene {vowels} vocales")