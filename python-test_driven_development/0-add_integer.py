#!/usr/bin/python3
""" modeule documented correctly"""


def add_integer(a, b=98):
    """
    Adds two integers.

    Parameters:
    - a (int or float): The first number.
    - b (int or float, optional): The second number. Defaults to 98.

    Returns:
    int: The sum of a and b, both casted to integers.

    Raises:
    TypeError: If either a or b is not an integer or float.
    """
    # Check if Both a and b are integers or floats
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer")

    if not isinstance(b, (int, float)):
        raise TypeError("b must be an integer")
    return int(a) + int(b)
