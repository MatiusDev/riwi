def to_valid_number(num):
    if len(num) <= 0:
        print("Debe ingresar un valor mayor a cero.")
        return -1
    try: return int(num)
    except ValueError:
        print("Debe ingresar un número valido")
        return -1

nums = input("Ingrese dos números separados por un espacio: ").strip()
num_1, num_2 = nums.split(" ")
num_1 = to_valid_number(num_1)
num_2 = to_valid_number(num_2)
fsum = lambda num1, num2: num1 + num2 

if num_1 == -1 or num_2 == -1:
    result = fsum(num_1, num_2)
    print(f"La suma de sus números es {result}")