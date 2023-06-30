import React from 'react'
import DspComponent from './DspComponent'

export default function DspContent({activeComponent}) {

    const DspContentObj ={
abstraction:{
    code:`
from abc import ABC, abstractmethod
class Polygon(ABC):
    @abstractmethod
    def noofsides(self):
        pass
    
class Triangle(Polygon):  
    def noofsides(self):
        print("I have 3 sides")
    
class Pentagon(Polygon):
    def noofsides(self):
        print("I have 5 sides")
    
class Hexagon(Polygon):
    def noofsides(self):
        print("I have 6 sides")
    
class Quadrilateral(Polygon):
    def noofsides(self):
        print("I have 4 sides")
    
R = Triangle()
R.noofsides()   
K = Quadrilateral()
K.noofsides()
R = Pentagon()
R.noofsides()   
K = Hexagon()
K.noofsides() 
      `,
      Output:`I am Triangle & I have 3 sides
I am Quadrilateral & I have 4 sides
I am Pentagon & I have 5 sides
I am Hexagon & I have 6 sides `,
heading:`Abstraction Program Using Python`
},

bfs:{
    code:`
def bfs(graph, start):
    visited = []
    queue = [start]
    while queue:
        vertex = queue.pop(0)
        if vertex not in visited:
            print(vertex)
            visited.append(vertex)
            queue.extend(graph[vertex] - set(visited))
    return visited

graph = {'A': set(['B', 'C']),
            'B': set(['A', 'D', 'E']),
            'C': set(['A', 'F']),
            'D': set(['B']),
            'E': set(['B', 'F']),
            'F': set(['C', 'E'])}
start = 'A'
bfs(graph, start)
      `,
      ouput:`A
B
C
E
D
F`,
      heading:`Breadth First Search`
},

  binarysearch:{
code:`def binary_search(arr,x):
    low = 0
    high = len(arr)-1
    mid = 0
    while low<=high:
        mid = (low + high)//2
        if arr[mid]<x:
            low = mid + 1
        elif arr[mid]>x:
            high = mid - 1 
        else:
            return mid
    return -1
arr = [10,20,30,40,50]
x = int(input("enter the number to check :"))
index = binary_search(arr,x)
if index==-1:
    print(f"{x} element not found")
else:
    print(f"{x} element is found at index {index}")` ,
    output:`enter the number to check :40
40 element is found at index 3` ,
    heading:`Binary Search Program Using Python`
  },

  bubblesort:{
    code: `
a=[]
num = int(input("enter the number of elements :"))
for i in range(num):
    value= int(input(f"enter the {i} item :"))
    a.append(value)
print(a)
for i in range(len(a)-1):
    for j in range(len(a)-i-1):
        if a[j]>a[j+1]:
            temp = a[j]
            a[j]=a[j+1]
            a[j+1]=temp
print("Sorted List : ",a)`,
    output: `enter the number of elements :5
enter the 0 item :36
enter the 1 item :25
enter the 2 item :12
enter the 3 item :94
enter the 4 item :5
[36, 25, 12, 94, 5]
Sorted List :  [5, 12, 25, 36, 94]`,
    heading:`BubbleSort Program Using Python`
  },

  deletiondll:{
    code:`
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        self.prev = None
        
class doublelinkedlist:
    def __init__(self):
        self.head = None

    #method to add node at ending
    def push(self,data):
        new_node = Node(data)
        n = self.head
        if n is None:
            self.head = new_node
        else:
            while n.next is not None:
                n = n.next
            n.next = new_node
            new_node.prev = n
            
    #method to remove node at beginning
    def delete_begin(self):
        if self.head == None:
            print("Dll is empty")
        else:
            self.head = self.head.next
            self.head.prev = None
        
    #method to remove node at ending
    def delete_end(self):
        n = self.head
        while n.next is not None:
            n = n.next
        n.prev.next = None
    
    #method to remove node at specified location
    def delete_inbt(self,x):
        n = self.head
        while n.next is not None:
            if n.data == x:
                break
            n = n.next
        if n.next is not None:
            n.next.prev = n.prev
            n.prev.next = n.next
        else:
            if n.data == x:
                n.prev.next = None
            else:
                print("Node not found")

    #method to print the doublelinkedlist
    def display(self):
        if self.head == None:
            print('double linked list is empty')
        else:
            n= self.head
            while n is not None:
                print(n.data,"-->",end="")
                n = n.next
dll1 = doublelinkedlist()
dll1.push(10)
dll1.push(20)
dll1.push(30)
dll1.push(40)
dll1.push(50)
dll1.display()
dll1.delete_begin()
print("             ")
print("Node at beginning is removed!")
dll1.display()
dll1.delete_end()
print("             ")
print("Node at ending is removed!")
dll1.display()
dll1.delete_inbt(30)
print("             ")
print("specified Node is removed!")
dll1.display()` ,
    output:`10 -->20 -->30 -->40 -->50 -->

Node at beginning is removed!
20 -->30 -->40 -->50 -->
    
Node at ending is removed!
20 -->30 -->40 -->
    
specified Node is removed!
20 -->40 -->` ,
    heading:`Deletion Methods in Double Linked List`
  },

  deletionsll:{
    code: `
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        self.prev = None
        
class doublelinkedlist:
    def __init__(self):
        self.head = None

    #method to add node at ending
    def push(self,data):
        new_node = Node(data)
        n = self.head
        if n is None:
            self.head = new_node
        else:
            while n.next is not None:
                n = n.next
            n.next = new_node
            new_node.prev = n
            
    #method to remove node at beginning
    def delete_begin(self):
        if self.head == None:
            print("Dll is empty")
        else:
            self.head = self.head.next
            self.head.prev = None
        
    #method to remove node at ending
    def delete_end(self):
        n = self.head
        while n.next is not None:
            n = n.next
        n.prev.next = None

    #method to remove node at specified location
    def delete_inbt(self,x):
        n = self.head
        while n.next is not None:
            if n.data == x:
                break
            n = n.next
        if n.next is not None:
            n.next.prev = n.prev
            n.prev.next = n.next
        else:
            if n.data == x:
                n.prev.next = None
            else:
                print("Node not found")

    #method to print the doublelinkedlist
    def display(self):
        if self.head == None:
            print('double linked list is empty')
        else:
            n= self.head
            while n is not None:
                print(n.data,"-->",end="")
                n = n.next
dll1 = doublelinkedlist()
dll1.push(10)
dll1.push(20)
dll1.push(30)
dll1.push(40)
dll1.push(50)
dll1.display()
dll1.delete_begin()
print("         ")
print("Node at beginning is removed!")
dll1.display()
dll1.delete_end()
print("         ")
print("Node at ending is removed!")
dll1.display()
dll1.delete_inbt(30)
print("         ")
print("specified Node is removed!")
dll1.display()`,
    output: `10 -->20 -->30 -->40 -->50 -->

Node at beginning is removed!
20 -->30 -->40 -->50 -->
    
Node at ending is removed!
20 -->30 -->40 -->
    
specified Node is removed!
20 -->40 -->`,
    heading:`Deletion Methods in Single Linked List`
  },

  dfs:{
    code:`
def dfs(graph, start, visited=[]):
    if start not in visited:
        print(start)
        visited.append(start)
        for neighbour in graph[start]:
            dfs(graph, neighbour, visited)
    return visited
  
graph = {'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['F'],
        'F': []}
start = 'A'
dfs(graph, start)` ,
    output:`
A
B
D
E
F
C` ,
    heading:`Depth First Search`
  },

  insertiondll:{
    code: `
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        self.prev = None
        
class doublelinkedlist:
    def __init__(self):
        self.head = None
    
    #method to add node at beginning
    def add_begin(self,data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
            
    #method to add node at ending
    def add_end(self,data):
        new_node = Node(data)
        n = self.head
        while n.next is not None:
            n = n.next
        n.next = new_node
        new_node.prev = n
    
    #method to add node at specified location
    def add_inbt(self,x,data):
        new_node = Node(data)
        n = self.head
        while n.next is not None:
            if n.data == x:
                break
            n = n.next
        if n.next is None:
            print('Node is not found')
        else:
            new_node.next = n.next
            new_node.prev = n
            n.next.prev = new_node
            n.next = new_node  

    #method to print the doublelinkedlist
    def display(self):
        if self.head == None:
            print('double linked list is empty')
        else:
            n= self.head
            while n is not None:
                print(n.data,"-->",end="")
                n = n.next
dll1 = doublelinkedlist()
dll1.add_begin(10)
dll1.add_begin(5)
dll1.display()
dll1.add_end(20)
dll1.add_end(30)
print("         ")
dll1.display()
dll1.add_inbt(10,15)
dll1.add_inbt(20,25)
print("         ")
dll1.display()    
`,
    output:`5 -->10 -->

5 -->10 -->20 -->30 -->
    
5 -->10 -->15 -->20 -->25 -->30 -->` ,
    heading:`Insertion Methods in Double Linked List`
  },

  insertionsll:{
    code:`
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
class singlelinkedlist:
    def __init__(self):
        self.head = None
  
    #Method to add at begin 
    def add_begin(self,data):
        new_node = Node(data)
        if self.head == None:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node
  
    #Method to add at end
    def add_end(self,data):
        new_node = Node(data)
        n = self.head
        while n.next is not None:
            n = n.next
        n.next = new_node
  
    #Method to add in_between
    def in_bt(self,x,data):
        new_node = Node(data)
        n = self.head
        while n.next is not None:
            if n.data == x:
                break
            n = n.next
        if n.next is None:
            print("node not found")
        else:
            new_node.next = n.next
            n.next = new_node
  
    #Method to display singlelinkedlist
    def display(self):
        n = self.head
        if self.head == None:
            print("SSL is empty")
        else:
            while n is not None:
                print(n.data,"-->",end="")
                n = n.next
        
s1 = singlelinkedlist()
s1.add_begin(10)
s1.add_begin(5)
s1.add_end(20)
s1.add_end(30)
s1.in_bt(10,15)
s1.in_bt(20,25)
s1.display()
    ` ,
    output: `singlelinkedlist :
5 -->10 -->15 -->20 -->25 -->30 -->`,
    heading:`insertion Methods in Single Linked List`
  },

  linearsearch:{
    code:`
def linear_search(list,x):
    for i in range(0,len(list)):
      if list[i]==x:
          return i
    return -1     
  
list = input("enter the value to list :").split(" ")
list1 = [int(i) for i in list]
print(list1)
x = int(input("enter th element to search : "))
index = linear_search(list1,x)

if index == -1:
    print(f"{x} element not found")
else:
    print(f"{x} element found at index {index}")
    ` ,
    output:`enter the value to list :20 52 6 5 10
[20, 52, 6, 5, 10]
enter the element to search : 5
5 element found at index 3` ,
    heading:`Linear Search Program Using Python`
  },

  mergesort:{
    code:`
def mergeSort(list1):
    if len(list1)>1:
        mid = len(list1)//2
        left_arr=list1[:mid]
        right_arr=list1[mid:]
        mergeSort(left_arr)
        mergeSort(right_arr)
        i = 0
        j = 0
        k = 0
        while i<len(left_arr) and j<len(right_arr):
            if left_arr[i]<right_arr[j]:
                list1[k]=left_arr[i]
                i+=1
                k+=1
            else:
                list1[k]=right_arr[j]
                j+=1
                k+=1
        while i<len(left_arr):
                    list1[k]=left_arr[i]
                    i+=1
                    k+=1
        while j<len(right_arr):
                    list1[k]=right_arr[j]
                    j+=1
                    k+=1
             
lstsize = int(input("Enter the size of list :"))
list1 = [int(input()) for x in range(lstsize)]
mergeSort(list1)
print("Sorted List :",list1)` ,
    output:`Enter the size of list :5
49
18
26
16
63
Sorted List : [16, 18, 26, 49, 63]` ,
    heading:`MergeSort using python`
  },

  palindrome:{
    code:`
def is_palindrome(word):
    return word == word[::-1]
  
word = input("Enter a word: ")
if is_palindrome(word):
    print(f'{word} is a palindrome')
else:
    print(f'{word} is not a palindrome')
` ,
    output:`Enter a word: MADAM
MADAM is a palindrome` ,
    heading:`Python program to check palindrome`
  },

  queue:{
    code:`
queue = []
def enqueue():
    element = int(input("Enter the value to queue :"))
    queue.append(element)
    print(element,"element added")
def dequeue():
    queue.pop(0)
    print("first element is removed")
def display():
    print("total queue :",queue)
enqueue()
enqueue()
enqueue()
display()
dequeue()
display()
` ,
    output:`Enter the value to queue :10
10 element added
Enter the value to queue :20
20 element added
Enter the value to queue :30
30 element added
total queue : [10, 20, 30]
first element is removed
total queue : [20, 30]` ,
    heading:`Queue Program using Python`
  },

  selectionsort:{
    code:`
def selection_sort(array):
    length = len(array)
    for i in range(length-1):
        minIndex = i
        for j in range(i+1, length):
            if array[j]<array[minIndex]:
                minIndex = j
        array[i], array[minIndex] = array[minIndex], array[i]
    return array
  
alist = input("Enter the list of numbers : ").split()
alist = [int(x) for x in alist]
print("The sorted array is: ",selection_sort(alist))    
` ,
    output:`Enter the list of numbers : 14 25 62 35 19 8
The sorted array is:  [8, 14, 19, 25, 35, 62]` ,
    heading:`SelectionSort Program Using Python`
  },

  stack:{
    code:`
stk = []
def push():
    element = int(input("Enter the value to push :"))
    stk.append(element)
    print(element,"element added!")
def pop():
    if stk==0:
        print("stack underflow")
    else:
        stk.pop()
        print("element is poped")            
def display():
    print("Total stack : ",stk)

push()
push()
push()
display()
pop()
display()    
` ,
    output:`Enter the value to push :10
10 element added!
Enter the value to push :20
20 element added!
Enter the value to push :30
30 element added!
Total stack :  [10, 20, 30]
element is poped
Total stack :  [10, 20]` ,
    heading:`Stack Program using Python`
  },

  stububblesort:{
    code:`
class Student:
    def __init__(self, roll_number, marks):
        self.roll_number = roll_number
        self.marks = marks

# Create a list of 5 students
students = [
    Student("2111cs020050", [90, 95, 80, 77, 95,90, 95, 80, 77, 95]),
    Student("2111cs020051", [81, 80, 90, 85, 95,90, 95, 80, 77, 95]),
    Student("2111cs020052", [56, 85, 90, 85, 95,90, 95, 80, 77, 95]),
    Student("2111cs020053", [90, 96, 98, 90, 85,90, 95, 80, 77, 95]),
    Student("2111cs020054", [66, 56, 85, 95, 90,90, 95, 80, 77, 95]),
]

# Use bubble sort to sort the students in descending order of total marks
for i in range(len(students) - 1):
    for j in range(len(students) - 1 - i):
        if sum(students[j].marks) < sum(students[j + 1].marks):
            students[j], students[j + 1] = students[j + 1], students[j]

# Print the top 3 students
for i in range(3):
    print(f"Top {i+1} => Roll number: {students[i].roll_number}, Marks: {students[i].marks}")` ,
    output:`Top 1 => Roll number: 2111cs020053, Marks: [90, 96, 98, 90, 85, 90, 95, 80, 77, 95]
Top 2 => Roll number: 2111cs020050, Marks: [90, 95, 80, 77, 95, 90, 95, 80, 77, 95]
Top 3 => Roll number: 2111cs020051, Marks: [81, 80, 90, 85, 95, 90, 95, 80, 77, 95]` ,
    heading:`Class contains 5 students who aquired marks in 5 subjects.Write a program to display their rollnumber and marks in sorted order by using Bubble Sort .`
  },

  wordcount:{
    code: `
def word_count(words):
    word_list = words.split()
    word_counts = {}
    for word in word_list:
        if word in word_counts:
            word_counts[word] += 1
        else:
            word_counts[word] = 1
    return word_counts
  
words = input("Enter a list of words, separated by whitespace: ")
print(word_count(words))`,
    output:`Enter a list of words, separated by whitespace: pencil is pencil and color is black
{'pencil': 2, 'is': 2, 'and': 1, 'color': 1, 'black': 1}` ,
    heading:`Python program that inputs a list of words,seperated by whitespace and outputs show many times each word appears in the list`
  },

  treeorder:{
    code:`
class Node:
    def __init__(self,key):
        self.val = key
        self.right = None
        self.left = None
#inorder 
def printinorder(root):
    if root:
        printinorder(root.left)
        print(root.val,end="")
        printinorder(root.right)
#preorder
def printpreorder(root):
    if root:
        print(root.val,end="")
        printpreorder(root.left)
        printpreorder(root.right)
#postorder
def printpostorder(root):
    if root:
        printpostorder(root.left)
        printpostorder(root.right)
        print(root.val,end="")
        
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
print("                ")
print("inorder")
printinorder(root)
print("                ")
print("preorder")
printpreorder(root)
print("                ")
print("postorder")
printpostorder(root)
print("            ")
` ,
    output:`Inorder
42513
Preorder
12453
Postorder
45231` ,
    heading:`Tree InOrder, PreOrder, PostOrder`
  }

}


  return (
    <div>
    {activeComponent === "ComponentA" && <DspComponent propsContent={DspContentObj.stack}/>}
    {activeComponent === "ComponentB" && <DspComponent propsContent={DspContentObj.queue}/>}
    {activeComponent === "ComponentC" && <DspComponent propsContent={DspContentObj.linearsearch}/>}
    {activeComponent === "ComponentD" && <DspComponent propsContent={DspContentObj.binarysearch}/>}
    {activeComponent === "ComponentE" && <DspComponent propsContent={DspContentObj.insertionsll}/>}
    {activeComponent === "ComponentF" && <DspComponent propsContent={DspContentObj.deletionsll}/>}
    {activeComponent === "ComponentG" && <DspComponent propsContent={DspContentObj.insertiondll}/>}
    {activeComponent === "ComponentH" && <DspComponent propsContent={DspContentObj.deletiondll}/>}
    {activeComponent === "ComponentI" && <DspComponent propsContent={DspContentObj.abstraction}/>}
    {activeComponent === "ComponentJ" && <DspComponent propsContent={DspContentObj.wordcount}/>}
    {activeComponent === "ComponentK" && <DspComponent propsContent={DspContentObj.bubblesort}/>}
    {activeComponent === "ComponentL" && <DspComponent propsContent={DspContentObj.mergesort}/>}
    {activeComponent === "ComponentM" && <DspComponent propsContent={DspContentObj.selectionsort}/>}
    {activeComponent === "ComponentN" && <DspComponent propsContent={DspContentObj.treeorder}/>}
    {activeComponent === "ComponentO" && <DspComponent propsContent={DspContentObj.stububblesort}/>}
    {activeComponent === "ComponentP" && <DspComponent propsContent={DspContentObj.palindrome}/>}
    {activeComponent === "ComponentQ" && <DspComponent propsContent={DspContentObj.dfs}/>}
    {activeComponent === "ComponentR" && <DspComponent propsContent={DspContentObj.bfs}/>}

    </div>
  )
}
