def validate_age(age):
    if len(age) == 0:
        print("Debe ingresar un valor")
        return -1
    try: return int(age)
    except ValueError:
        print("Debe ingresar un número valido")
        return -1

age = input("Ingrese un número: ").strip()
age = validate_age(age
                   )
if (age == -1):
    future_age = validate_age(age) * 5
    print(f"Dentro de 5 años tendrás {future_age}")
