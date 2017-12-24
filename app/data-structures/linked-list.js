export default function LinkedList() {
  /**
   * The Node class represents the item that we want to add to the list. It
   * contains an element attribute, which is the value we want to add to the
   * list, and a next attribute, which is the pointer that contains the link to
   * the next node item of the list.
   *
   * @param {*} element
   */
  const Node = function(element) {
    this.element = element;
    this.next = null;
  };

  // (internal/private variable) that will store how many items we have on the
  // list.
  let length = 0;

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

  this.toArray = function() {
    let current = head;
    let array = [];
    while (current) {
      array.push(current.element);
      current = current.next;
    }
    return array;
  };

  this.removeAt = function(position) {
    // check for out-of-bounds values
    if (position > -1 && position < length) {
      let current = head;
      let previous;
      let index = 0;

      // removing first item
      if (position === 0) {
          head = current.next;
      } else {
          while (index++ < position) {
              previous = current;
              current = current.next;
          }

          // link previous with current's next - skip it to remove
          previous.next = current.next;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };

  this.insert = function(position, element) {};
  this.remove = function(element) {};
  this.indexOf = function(element) {};
  this.isEmpty = function() {};
  this.size = function() {};
  this.toString = function() {};
  this.print = function() {};
}
