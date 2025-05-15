def reverse_string(my_str: str):
  return my_str[::-1]

def main() -> None:
  my_str = input("Ingrese una cadena de texto: ")
  reversed = reverse_string(my_str)
  print(f"\nLa cadena de texto revertida es: {reversed}")