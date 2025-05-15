base = input("Ingrese la base del rectángulo: ").strip()
height = input("Ingrese la altura del rectángulo: ").strip()

def validate_side(side):
    if len(side) == 0:
        print("Debe ingresar un valor valido")
        return False

    try:
        f_side = float(side)
        if (f_side <= 0):
            print("Debes ingresar base/altura mayor a cero")
            return False
        return True
    except ValueError:
        print("Debes ingresar una base/altura valida")
        return False
    
if (validate_side(base) and validate_side(height)):
    area = float(base) * float(height)
    print(f"El area del rectangulo es: {area}")