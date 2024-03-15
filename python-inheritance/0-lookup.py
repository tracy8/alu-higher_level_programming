#!/usr/bin/python3
""" defining a function to return available attributes and methods"""


def lookup(obj):
    """
    Returns a list of available attributes and methods of an object.

    Parameters:
        obj: An object to inspect.

    Returns:
        list: A list containing the names of attributes and methods.
    """
    result = []
    for attribute_name in dir(obj):
        result.append(attribute_name)
    return result
