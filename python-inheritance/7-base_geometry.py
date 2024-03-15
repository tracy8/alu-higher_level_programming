#!/usr/bin/python3
"""This module contains a class BaseGeometry
    (based on 6-base_geometry.py).
"""


class BaseGeometry():
    """class BaseGeometry
        (based on 6-base_geometry.py).
    """

    def area(self):
        """That raises an Exception with the message
            area() is not implemented.

        Raises:
            Exception: area() is not implemented
        """
        raise Exception("area() is not implemented")

    def integer_validator(self, name, value):
        """That validates value:.

        Arguments:
            name (str) -- name.
            value (int) -- value.

        Raises:
            TypeError: <name> must be an integer
            ValueError: <name> must be greater than 0
        """
        if type(value) is not int:
            raise TypeError("{} must be an integer".format(name))
        elif value <= 0:
            raise ValueError("{} must be greater than 0".format(name))
