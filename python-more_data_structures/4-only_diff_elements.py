#!/usr/bin/python3
def only_diff_elements(set_1, set_2):
    set_3 = set()
    for element in set_1:
        if element not in set_2:
            set_3.add(element)
    for element in set_2:
        if element not in set_1:
            set_3.add(element)
    return set_3
