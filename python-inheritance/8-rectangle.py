#!/usr/bin/python3
"""Module defining Rectangle class."""


BaseGeometry = __import__('7-base_geometry').BaseGeometry


class Rectangle(BaseGeometry):
    """
    Rectangle class, inherits from BaseGeometry.

    Attributes:
        - width (int): private, positive integer
        - height (int): private, positive integer
    """

    def __init__(self, width, height):
        """
        Initializes a Rectangle instance.

        Args:
            - width (int): width of the rectangle
            - height (int): height of the rectangle
        """
        super().__init__()

        # Validate and set width
        self.__width = self.integer_validator("width", width)

        # Validate and set height
        self.__height = self.integer_validator("height", height)

    def __str__(self):
        """Returns a formatted string representation of the Rectangle."""
        return "[Rectangle] {}/{}".format(self.__width, self.__height)

    def area(self):
        """Calculates and returns the area of the rectangle."""
        return self.__width * self.__height
