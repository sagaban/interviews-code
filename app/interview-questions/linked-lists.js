import LinkedList from '/app/data-structures/linked-list';
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

 /**
  * 2.4 Partition: Write code to partition a linked list around a value x, such
  * that all nodes less than x come before all nodes greater than or equal to x.
  * If x is contained within the list, the values of x only need to be after the
  * elements less than x (see below). The partition element x can appear
  * anywhere in the "right partition"; it does not need to appear between the
  * left and right partitions.
  * EXAMPLE
  * Input: 3 -> 5 -> 8 -> 5 - > 10 -> 2 -> 1 [partition = 5)
  * Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
  */
 // TODO: Implement this

 /**
  * 2.5 Sum Lists: You have two numbers represented by a linked list, where each
  * node contains a single digit. The digits are stored in reverse order, such
  * that the 1 's digit is at the head of the list. Write a function that adds
  * the two numbers and returns the sum as a linked list.
  * EXAMPLE
  * Input: (7 -> 1 -> 6) + (5 -> 9 -> 2) .That is,617 + 295.
  * Output: 2 -> 1 -> 9. That is, 912.
  *
  * @param {LinkedList} listA
  * @param {LinkedList} listB
  * @return {LinkedList}
  */
  export const sumList = (listA, listB) => {
    const total = new LinkedList();
    let currentA = listA.getHead();
    let currentB = listB.getHead();
    let excess = 0;
    while (currentA || currentB || excess) {
      const a = currentA ? currentA.element : 0;
      const b = currentB ? currentB.element : 0;
      const partial = a + b + excess;
      total.append(partial % 10);
      excess = parseInt(partial / 10);
      currentA = currentA ? currentA.next : null;
      currentB = currentB ? currentB.next : null;
    }
    return total;
  };

  /**
   * FOLLOW UP
   * Suppose the digits are stored in forward order. Repeat the above problem.
   * EXAMPLE
   * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5) . That is,617 + 295 .
   * Output: 9 -> 1 -> 2. That is, 912.
   *
   * @param {LinkedList} listA
   * @param {LinkedList} listB
   * @return {LinkedList}
   */
  export const sumListForward = (listA, listB) => {
    let sum = 0;
    let currentA = listA.getHead();
    let currentB = listB.getHead();
    const exponent = listA.size() > listB.size()?
      listA.size():
      listB.size();
    let positionFactor = Math.pow(10, exponent - 1);
    while (currentA || currentB) {
      const a = currentA ? currentA.element : 0;
      const b = currentB ? currentB.element : 0;
      sum += (a + b) * positionFactor;
      positionFactor /= 10;
      currentA = currentA ? currentA.next : null;
      currentB = currentB ? currentB.next : null;
    }
    return new LinkedList(String(sum).split('').map((s) => parseInt(s)));
  }
;
