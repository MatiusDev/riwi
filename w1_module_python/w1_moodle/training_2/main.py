def validate_name(name):
    if not name:
        print("El nombre no puede estar vacío.")
        return False
    if not name.isalpha():
        print("El nombre solo debe contener letras.")
        return False
    if len(name) < 3:
        print("El nombre debe tener al menos 3 caracteres.")
        return False
    return True

def validate_note(note):
    try:
        note = float(note)
        if note < 0 or note > 100:
            raise ValueError
        return True
    except ValueError:
        print("La calificación debe ser un número entre 0 y 100.")
        return False

def validate_student_notes(notes):
    try:
        splitted_notes = notes.split(",")
        for note in splitted_notes:
            if not validate_note(note.strip()):
                return False
        return True
    except ValueError:
        print("Las calificaciones deben ser números entre 0 y 100, separados por comas.")
        return False

def validate_number_of_notes(number):
    try:
        number = int(number)
        if number <= 0:
            raise ValueError
        return True
    except ValueError:
        print("El número de calificaciones debe ser un entero positivo.")
        return False

def start():
    while True:
        print("*** Sistema de calificaciones ***")
        base_note = input("Por favor ingrese una calificación númerica (0 - 100): ")
        if not validate_note(base_note):
            continue
        number_of_notes = input("Por favor ingrese el número de calificaciones: ")
        if not validate_number_of_notes(number_of_notes):
            continue
        base_note = float(base_note)
        number_of_notes = int(number_of_notes)
        
        print("\n*** Ingreso de estudiantes y calificaciones ***")
        students_notes = {}
        while True:
            name = input("\nPor favor ingrese el nombre del estudiante: ")
            if not validate_name(name):
                continue
            notes = input("Por favor ingrese una lista de calificaciones (separadas por comas): ")
            if not validate_student_notes(notes):
                continue
            notes = notes.split(",")
            if len(notes) != number_of_notes:
                print(f"Por favor ingrese exactamente {number_of_notes} calificaciones.")
                continue
            
            underbase_notes = 0
            notes_list = []
            for note in notes:
                note = float(note.strip())
                notes_list.append(note)
                if note < base_note:
                    underbase_notes += 1
            average = sum(notes_list) / len(notes_list)
            
            if name in students_notes:
                print("El estudiante ya existe. Por favor ingrese un nombre diferente.")
                continue
            
            students_notes[name] = average
            
            if underbase_notes == 0:
                print(f"{name} no tiene calificaciones por debajo de {base_note}.")
            else:
                print(f"{name} tiene {underbase_notes} calificaciones por debajo de {base_note}.")
            
            another = input("¿Desea ingresar otro estudiante? (s/n): ").strip().lower()
            if another == 's':
                continue
            break
        
        print("\n*** Resultados ***")
        for student, average in students_notes.items():
            print(f"El promedio de {student} es: {average:.2f}")
        break

if __name__ == "__main__":
    start()