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
