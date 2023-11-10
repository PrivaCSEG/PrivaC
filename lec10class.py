#linear search
def linear_search(l,el):
    for i in range(len(l)):
        if l[i]==el:
            return i
    return -1
        
list=[55,3,54,67,22,453,2,344]
target_element=453
result = linear_search(list, target_element)
if result !=-1:
    print(f'Target {target_element} found at index: {result}')
else:
    print(f'Target {target_element} was not found')


#if target appears in list multiple times
def linear_search_dubs(l,el):
    targets=[]
    if l.count(el)==1:
        for i in range(len(l)):
            if l[i]==el:
                print('only appears once')
                return i
    elif l.count(el)>1:
        for i in range(len(l)):
            if l[i]==el:
                targets.append(i)
        return targets
    else:
        return -1

list=[1,1,2,4,6,2,5,6,5]
target_element=5
result = linear_search_dubs(list, target_element)
if result !=-1:
    print(f'Target {target_element} found at index(es): {result}')
else:
    print(f'Target {target_element} was not found')

#binary search
def BinarySearch(S,k,low,high):
    if low>high:
        return "NO_SUCH_KEY"
    else:
        mid=(low+high)//2
        if k == S[mid]:
            return mid
        elif k < S[mid]:
            return BinarySearch(S,k,low,mid-1)
        else:
            return BinarySearch(S,k,mid+1,high)

sortedlist, target, low, high = [1,2,4,6,8,9,12,15,27,38,49,599,697], 49, 0, 12
bresult=BinarySearch(sortedlist, target, low, high)
print(f'The element {target} is at index: {bresult} ')

#Selection Sort
def SelectionSort(l):
    unsorted=l
    sorted=[]
    while len(unsorted)>0:
        min=float('inf')
        for i in unsorted:
            if i < min:
                min = i
        sorted.append(min)
        unsorted.remove(min)   
    return sorted

list=[1,10,23,-2] 
sorted_list=SelectionSort(list)
print(f'Sorted list: {sorted_list}')

#exercise1
def get_product_name(prod_ID):
    products={'4011':'banana', '4608': 'garlic', '4032': 'watermelon', '4648':'mushrooms'}
    if prod_ID in products:
        return products[prod_ID]
    else:
        return 'Product Not Found'
a=get_product_name('4011')
print(a)

#exercise 2
def wordCount(text):
    words = {}
    lwords=text.split()
    for word in lwords:
        if word not in words:
            words[word]=1
        else:
            words[word]+=1
    return words

sampleText='TV Girl is one of the best bands of the world'
result=wordCount(sampleText)
print(result) #curious how to format final product

