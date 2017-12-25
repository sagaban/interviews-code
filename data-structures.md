# Data structures

## Array

An array stores a sequence of values that are all of the same data type. Although JavaScript allows us to create arrays with values from different data types, we will follow the best practices and consider that we cannot do that (most languages do not have this capability).

In JavaScript, an array is a mutable object. We can easily add new elements to it. The object will grow dynamically as we add new elements to it. In many other languages, such as C and Java, we need to determine the size of the array, and if we need to add more elements to the array, we need to create a completely new array; we cannot simply add new elements to it as we need them.

i.e.:
```js
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 52;
averageTemp[4] = 60.8;
```
![linked-list](./resources/img/array.png)


## Linked lists

Linked lists store a sequential collection of elements; but unlike arrays, in linked lists the elements are not placed contiguously in memory. Each element consists of a node that stores the element itself and also a reference (also known as a pointer or link) that points to the next element. The following diagram exemplifies the structure of a linked list:

![linked-list](./resources/img/linked-list.png)

One of the benefits of a linked list over a conventional array is that we do not need to shift elements over when adding or removing elements. However, we need to use pointers when working with a linked list, and because of it, we need to pay some extra attention when implementing a linked list. Another detail in the array is that we can directly access any element at any position; with the linked list, if we want to access an element from the middle, we need to start from the beginning (**head**) and iterate the list until we find the desired element.

### Double linked list

The difference between a doubly linked list and a normal linked list is that in the linked list we make the link from one node to the next one only. In the doubly linked list, we have a double link: one for the next element and one for the previous element, as shown in the following diagram:

![linked-list](./resources/img/double-linked-list.png)

### Circular linked lists
A circular linked list can have only one reference direction (as the linked list) or a double reference as the doubly linked list. The only difference between the circular linked list and a linked list is that the last element's next ( tail.next ) pointer does not make a reference to null , but to the first element ( head ), as we can see in the following diagram:

![linked-list](./resources/img/circular-linked-list.png)
