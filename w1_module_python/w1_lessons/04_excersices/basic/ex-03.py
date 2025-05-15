def validate_temperature(temperature):
    if len(temperature) == 0:
        print("Debe ingresar un valor")
        return False

    try:
        f_temp = float(temperature)
        abs_zero = -273,15

        if (f_temp < abs_zero):
            print("No puedes ingresar una temperatura inferior al cero absoluto")
            return False
        return True
    except ValueError:
        print("Debes ingresar una temperatura valida")
        return False

temperature = input("Ingresa la temperatura (°C): ").strip()    
if validate_temperature(temperature):
    to_fahrenheit = (float(temperature) * 9 / 5) + 32
    print(f"La temperatura en (°F): {to_fahrenheit}")