def split_string(str: str):
    result = []

    if(len(str) % 2 != 0):
        str += '_'

    for i in range(0, len(str), 2):
        result.append(str[i:i+2])

    return result
