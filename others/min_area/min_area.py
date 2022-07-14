from typing import List

def min_area(x_coodinates: List[int], y_coordinates: List[int], k: int) -> int:
    max_x = 0
    min_x = 0
    max_y = 0
    min_y = 0

    for index, (x, y) in enumerate(zip(x_coodinates, y_coordinates)):
        if index == 0:
            max_x = min_x = x
            max_y = min_y = y

        if index + 1 <= k:
            if x > max_x:
                max_x = x
            if x <= min_x:
                min_x = x
            if y > max_y:
                max_y = y
            if y <= min_y:
                min_y = y

    max_side = max(max_x - min_x, max_y - min_y) + 2

    return max_side ** 2

    # Another solution to return the square itself
    # return [
    #     (min_x - 1, min_y - 1),
    #     (max_side, min_y - 1),
    #     (min_x - 1, max_side),
    #     (max_side, max_side)
    # ]
