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

  this.insert = function(position, element) {
    // check for out-of-bounds values
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head;
      let previous;
      let index = 0;

      if (position === 0) {
        // add on first position
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      length++; // update size of list

      return true;
    } else {
      return false;
    }
  };

  this.indexOf = function(element) {
    let current = head;
    let index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  this.remove = function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.size = function() {
    return length;
  };

  this.getHead = function() {
    return head;
  };

  this.toString = function() {
    let current = head;
    let string = '';

    while (current) {
      string += current.element + (current.next ? ', ' : '');
      current = current.next;
    }
    return string;
  };

  this.print = function() {
    console.log(this.toString());
  };
}
