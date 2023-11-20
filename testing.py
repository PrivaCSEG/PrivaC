def group_by_first_item(input_list):
    k=[]
    for i in input_list:
        k.append(i[::-1])
    print(k)
    input_list+=k
    for i in input_list:
        i.sort()
    print(input_list)

# Example usage:
input_list = [
    [0, 1], [0, 2], [0, 3], [1, 4], [1, 6], [1, 7], [1, 9], [2, 3], [2, 6],
    [2, 8], [2, 9], [3, 8], [3, 9], [4, 6], [4, 7], [4, 8], [5, 9], [6, 8], [7, 8]
]
l=[[1,2],[2,4]]
group_by_first_item(input_list)

