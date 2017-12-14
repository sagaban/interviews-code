export default function LinkedList() {
  /**
   * The Node class represents the item that we want to add to the list. It
   * contains an element attribute, which is the value we want to add to the
   * list, and a next attribute, which is the pointer that contains the link to
   * the next node item of the list.
   *
   * @param {*} element
   */
  const Node = (element) => {
    this.element = element;
    this.next = null;
  };

  // (internal/private variable) that will store how many items we have on the
  // list.
  let length = 0; // eslint-disable-line no-unused-vars

  // we need to store a reference for the first node
  let head = null;

  this.append = function(element) {
    let node = new Node(element);
    let current;

    if (head === null) {
      // first node on list
      head = node;
    } else {
      current = head;

      // loop the list until find last item
      while (current.next) {
        current = current.next;
      }

      // get last item and assign next to added item to make the link
      current.next = node;
    }

    length++; // update size of list
  };
  this.insert = function(position, element) {};
  this.removeAt = function(position) {};
  this.remove = function(element) {};
  this.indexOf = function(element) {};
  this.isEmpty = function() {};
  this.size = function() {};
  this.toString = function() {};
  this.print = function() {};
}
