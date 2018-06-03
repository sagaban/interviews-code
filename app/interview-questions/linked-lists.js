// Chapter 2

/**
 * 2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list
 * FOLLOW UP: How would you solve this problem if a temporary buffer is not
 * allowed?
 *
 * @param {LinkedList}  list  Linked list to remove duplicated
 * @return {LinkedList}
 */
export const removeDups = (list) => {
  if (!list || list.size() < 1 ) {
    return list;
  }
  // Spread operator does not work with class instances. IDKW
  // const listToReturn = Object.assign(Object.create(list), list);
  const listToReturn = { ...list };

  let index = 0;
  let node = list.getHead();
  const set = new Set();
  do {
    if (set.has(node.element)) {
      listToReturn.removeAt(index);
    } else {
      index++;
      set.add(node.element);
    }
    node = node.next;
  } while (!!node);
  return listToReturn;
};

/**
 * 2.3
 * Delete Middle Node: Implement an algorithm to delete a node in the middle
 * (i.e., any node but the first and last node, not necessarily the exact
 * middle) of a singly linked list, given only access to that node.
 * EXAMPLE
 * Input: the node c from the linked list a -> b -> c -> d -> e -> f
 * Result: nothing is returned, but the new linked list looks like
 *         a -> b -> d -> e -> f
 * To avoid modifying the original data structure, I will create a function to
 * extend the functionality of the original LinkedList object with
 * `extendListToDeleteMiddleNode` method
 *
 * @param {LinkedList} list
 * */
export const extendListToDeleteMiddleNode = (list) => {
  if (!!list && typeof list === 'object') {
    list.deleteMiddleNode = function(mn) {
      let current = list.getHead();
      while (current.next) {
        if (current.next.element === mn.element) {
          current.next = current.next.next;
          break;
        }
        current = current.next;
      }
    };
  }
};

// BOOK SOLUTION
/**
var deleteMidNode = function(midNode) {
  var node = midNode;
  while (node !== null && node.next !== null) {
    node.value = node.next.value;
    if (node.next.next === null) {
      node.next = null;
    }
    node = node.next;
  }
};
 */
