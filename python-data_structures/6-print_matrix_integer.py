#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    for row in matrix:
        formated_row = " ".join("{:d}".format(num) for num in row)
        print(formated_row)