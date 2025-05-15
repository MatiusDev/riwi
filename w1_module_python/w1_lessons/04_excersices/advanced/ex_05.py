import random

def sayHello(name: str):
  choices = [
    "😺😺😺😺😺",
    "🙀🙀🙀🙀🙀",
    "😹😹😹😹😹",
    "😽😽😽😽😽",
    "😾😾😾😾😾"
  ]
  rd = random.randint(0, len(choices)-1)
  return f"Helloo! {name} This your my kitty {choices[rd]}"

def customName(name: str, func):
  choices = {
    "a": "😄",
    "e": "😏",
    "i": "😣",
    "o": "🤯",
    "u": "🤤"
  }
  new_name = ""
  for char in name.lower():
    if char in choices:
      new_name += choices[char]
      continue
    new_name += char.upper()
  return func(new_name)

def main() -> None:
  name = input("Ingresa tu nombre: ")
  customized = customName(name, sayHello)
  print(customized)