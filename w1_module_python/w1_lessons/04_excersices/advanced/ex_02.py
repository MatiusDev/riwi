import random

faces = [
  ["*******", 
   "*     *", 
   "*  1  *",  
   "*     *", 
   "*******"],
  ["*******", 
   "*     *", 
   "*  2  *",  
   "*     *", 
   "*******"],
  ["*******", 
   "*     *", 
   "*  3  *",  
   "*     *", 
   "*******"],
  ["*******", 
   "*     *", 
   "*  4  *",  
   "*     *", 
   "*******"],
  ["*******", 
   "*     *", 
   "*  5  *",  
   "*     *", 
   "*******"],
  ["*******", 
   "*     *", 
   "*  6  *",  
   "*     *", 
   "*******"]
]

def draw_dice(num: int):
  face = faces[num-1]
  for f in face:
    print(f.rjust(13))

def roll_dice():
  print("Girando el dado...")
  MAX = 6
  number = random.randint(1, MAX)
  return number

def main() -> None:
  input("Presiona cualquier tecla para girar el dado...")
  number = roll_dice()
  draw_dice(number)