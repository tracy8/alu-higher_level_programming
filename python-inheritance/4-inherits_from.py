#!/usr/bin/python3
"""inheriting directly"""


def inherits_from(obj, a_class):
    """
    Returns True if the object is an instance of a class
    that inherited. otherwise False
    """
    return issubclass(type(obj), a_class) and type(obj) is not a_class
