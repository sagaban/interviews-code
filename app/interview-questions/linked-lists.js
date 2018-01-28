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
 *
 * @param {LinkedList} list
 * */
export const deleteMiddleNode = (list) => {
  if (!list || !list.size || list.size() <= 2) {
    throw new Error('The list is not valid or not long enough');
  }

  const removeIndex = Math.floor((list.size() - 1) / 2);
  list.removeAt(removeIndex);
};

// TODO: Finish the book exercises
