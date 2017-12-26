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

![double-linked-list](./resources/img/double-linked-list.png)

### Circular linked lists
A circular linked list can have only one reference direction (as the linked list) or a double reference as the doubly linked list. The only difference between the circular linked list and a linked list is that the last element's next ( tail.next ) pointer does not make a reference to null , but to the first element ( head ), as we can see in the following diagram:

![circular-linked-list](./resources/img/circular-linked-list.png)

## Trees

A tree consists of nodes with a parent-child relationship. Each node has a parent (except for the first node at the top) and zero or more children:

![tress](./resources/img/tree.png)

The top node of a tree is called the **root** (**11**). It is the node that does not have a parent. Each element of the tree is called node. There are internal nodes and external nodes. An internal node is a node with at least one child (**7, 5, 9, 15, 13**, and **20** are internal nodes). A node that does not have children is called an external node or leaf (**3, 6, 8, 10, 12, 14, 18**, and **25** are leaves).

A node can have ancestors and descendants. The ancestors of a node (except the root) are parent, grandparent, great-grandparent, and so on. The descendants of a node are child, grandchild, great-grandchild, and so on. For example, node **5** has **7** and **11** as its ancestors and 3 and 6 as its descendants.

Another terminology used with trees is the subtree. A subtree consists of a node and its descendants. For example, nodes **13, 12**, and **14** consist a subtree of the tree from the preceding diagram.

The depth of a node consists of the number of ancestors. For example, node 3 has depth 3 because it has 3 ancestors (**5, 7**, and **11**).

The height of a tree consists of the maximum depth of any node. A tree can also be broken down into levels. The root is on level 0, its children are on level 1, and so on. The tree from the preceding diagram has height 3 (maximum depth is 3 as shown in the preceding figure—level 3).

### Binary tree and binary search tree

A node in a binary tree has at most two children: one left child and one right child. This definition allows us to write more efficient algorithms for inserting, searching, and deleting nodes to/from a tree.

A binary search tree is a binary tree, but it only allows you to store nodes with lesser values on the left side and nodes with greater values on the right side. The diagram in the previous topic exemplifies a binary search tree.

The following diagram exemplifies how our **Binary Search Tree** (**BST**) will be organized in terms of data structure:

![binary-search-tree](./resources/img/binary-search-tree.png)

Just like in linked lists, we will work with pointers again to represent the connection between the nodes (called **edges** in tree terminology). When we worked with double linked lists, each node had two pointers: one to indicate the next node and another one to indicate the previous node. With trees one pointer points to the left child, and the other one to the right child.

#### Tree traversal
Traversing (or walking) a tree is the process of visiting all nodes of a tree and performing an operation at each node. But how should we do that? Should we start from the top of the tree or from the bottom? From the left or the right side? There are three different approaches that can be used to visit all the nodes in a tree: in-order, pre-order, and post-order.

* **In-order traversal**

  An in-order traversal visits all the nodes of a BST in ascending order, meaning it
visits the nodes from the smallest to largest. An application of in-order traversal
would be to sort a tree. The inOrderTraverse method receives a callback function as a parameter. This
function can be used to perform the action we would like to execute when the node
is visited (this is known as **the visitor** pattern)


