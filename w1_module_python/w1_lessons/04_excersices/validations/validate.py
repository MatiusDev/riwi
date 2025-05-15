def to_valid_int(value):
  try: return int(value)
  except ValueError: return -1
    
def to_valid_float(value):
  try: return float(value)
  except ValueError: return -1
  
def is_valid_string(value):
  return isinstance(value, str) and len(value) > 0 and value.isalpha()