#!/usr/bin/python3
def common_elements(set_1, set_2):
    # new set to store common elements
    same_elements = set()
    for element in set_1:
        if element in set_2:
            same_elements.add(element)
    return same_elements
