#!/usr/bin/python3
""" module documented"""


def print_square(size):
    """Prints a square with the character #.
    Args:
        size (int): Size of the square
    Returns:
        None
    Raises:
        TypeError: If size is not an integer
        ValueError: If size is less than 0
    """
    if type(size) is not int:
        raise TypeError("size must be an integer")
    if size < 0:
        raise ValueError("size must be >= 0")
    print(("#" * size + "\n") * size, end="")
