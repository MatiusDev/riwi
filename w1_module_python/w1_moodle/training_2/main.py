def validate_name(name):
    if not name:
        print("\nError: El nombre no puede estar vacío.")
        return False
    if not name.isalpha():
        print("\nError: El nombre solo debe contener letras.")
        return False
    if len(name) < 3:
        print("\nError: El nombre debe tener al menos 3 caracteres.")
        return False
    return True

def validate_note(note):
    try:
        note = float(note)
        if note < 0 or note > 100:
            raise ValueError
        return True
    except ValueError:
        print("\nError: La calificación debe ser un número entre 0 y 100.")
        return False

def validate_student_notes(notes):
    try:
        splitted_notes = notes.split(",")
        for note in splitted_notes:
            if not validate_note(note):
                return False
        return True
    except ValueError:
        print("\nError: Las calificaciones deben ser números entre 0 y 100, separados por comas.")
        return False

def is_a_number(number):
    try:
        number = int(number)
        if number <= 0:
            raise ValueError
        return True
    except ValueError:
        print("\nError: Debes ingresar un número valido")
        return False

def convert_notes(notes):
    note_list = []
    for note in notes:
        note_list.append(float(note))
    return note_list

def add_student(number_of_notes):
    while True:
        name = input("\nPor favor ingrese el nombre del estudiante: ")
        if not validate_name(name):
            continue
        notes = input("Por favor ingrese una lista de calificaciones (separadas por comas): ")
        notes = notes.replace(" ", "")
        if not validate_student_notes(notes):
            continue
        notes = notes.split(",")
        if len(notes) != number_of_notes:
            print(f"\nError: Por favor ingrese exactamente {number_of_notes} calificaciones.")
            continue

        if name in students_notes:
            print("\nError: El estudiante ya existe. Por favor ingrese un nombre diferente.")
            continue
    
        students_notes[name] = convert_notes(notes)
        break

def higher_notes(note):
    print(f"*** Notas mayores a: {note} ***")
    for name, notes in students_notes.items():
        notes_amount = 0
        str_notes = ""
        for n in notes:
            if n > note:
                notes_amount += 1
                str_notes += f"{n} "
        print(f"{name} tiene {notes_amount} notas mayores a {note}")
        print(f"Notas: {str_notes.strip()}")

def similar_notes(note):
    print(f"\n*** Notas iguales a: {note} ***")
    for name, notes in students_notes.items():
        notes_amount = 0
        for n in notes:
            if n == note:
                notes_amount += 1
        print(f"{name} tiene {notes_amount} notas iguales a {note}.")

def calculate_average(name):
    notes = students_notes[name]
    average = sum(notes) / len(notes)
    return average

students_notes = {}
def start():
    while True:
        print("*** Sistema de calificaciones ***")
        base_note = input("Por favor ingrese una calificación númerica (0 - 100): ")
        if not validate_note(base_note):
            continue
        number_of_notes = input("Por favor ingrese el número de calificaciones: ")
        if not is_a_number(number_of_notes):
            continue
        base_note = float(base_note)
        number_of_notes = int(number_of_notes)
        
        print("\n*** Ingreso de estudiantes y calificaciones ***")
        while True:
            print("1. Agregar un estudiante\n" \
            "2. Buscar una nota mayores a un valor\n" \
            "3. Contar calificaciones similares a un valor\n" \
            "4. Calcular promedio estudiante\n" \
            "5. Salir")
            opt = input("Ingrese su opción: ")

            if not is_a_number(opt):
                continue
            opt = int(opt)

            match(opt):
                case 1:
                    add_student(number_of_notes)
                case 2:
                    note = input("Ingrese la nota que desea validar: ")
                    if not is_a_number(note):
                        continue
                    higher_notes(int(note))
                case 3:
                    note = input("Ingrese la nota que desea validar: ")
                    if not is_a_number(note):
                        continue
                    similar_notes(int(note))
                case 4:
                    name = input("\nPor favor ingrese el nombre del estudiante: ")
                    if not validate_name(name):
                        continue

                    if not name in students_notes:
                        print("\nError: El estudiante que ingresaste no existe.")
                        continue

                    average = calculate_average(name)
                    if average >= base_note:
                        print(f"\nEl estudiante {name} aprobó con un promedio de {average:.2f}")
                    else:
                        print(f"\nEl estudiante {name} reprobó con un promedio de {average:.2f}")
                case 5:
                    break
        print("\n*** Resultados ***")
        print(f"Nota para aprobar: {base_note}")
        for student in students_notes:
            average = calculate_average(student)
            if average >= base_note:
                print(f"\nEl estudiante {student} aprobó con un promedio de {average:.2f}")
            else:
                print(f"\nEl estudiante {student} reprobó con un promedio de {average:.2f}")
        break

if __name__ == "__main__":
    start()