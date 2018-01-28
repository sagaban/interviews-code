export default class LinkedList {
  constructor(arr) {
    if (!!arr && arr.length > 0) {
      arr.forEach((element) => this.append(element));
    }
  }

  /**
   * The Node class represents the item that we want to add to the list. It
   * contains an element attribute, which is the value we want to add to the
   * list, and a next attribute, which is the pointer that contains the link to
   * the next node item of the list.
   *
   * @param {*} element
   */
  Node(element) {
    this.element = element;
    this.next = null;
  };

  // (internal/private variable) that will store how many items we have on the
  // list.
  length = 0;

  // we need to store a reference for the first node
  head = null;

  append(element) {
    let node = new this.Node(element);
    let current;

    if (this.head === null) {
      // first node on list
      this.head = node;
    } else {
      current = this.head;

      // loop the list until find last item
      while (current.next) {
        current = current.next;
      }

      // get last item and assign next to added item to make the link
      current.next = node;
    }

    this.length++; // update size of list
  };

  toArray() {
    let current = this.head;
    let array = [];
    while (current) {
      array.push(current.element);
      current = current.next;
    }
    return array;
  };

  removeAt(position) {
    // check for out-of-bounds values
    if (position > -1 && position < this.length) {
      let current = this.head;
      let previous;
      let index = 0;

      // removing first item
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // link previous with current's next - skip it to remove
        previous.next = current.next;
      }

      this.length--;

      return current.element;
    } else {
      return null;
    }
  };

  insert(position, element) {
    // check for out-of-bounds values
    if (position >= 0 && position <= this.length) {
      let node = new this.Node(element);
      let current = this.head;
      let previous;
      let index = 0;

      if (position === 0) {
        // add on first position
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      this.length++; // update size of list

      return true;
    } else {
      return false;
    }
  };

  indexOf(element) {
    let current = this.head;
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

  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  isEmpty() {
    return this.length === 0;
  };

  size() {
    return this.length;
  };

  getHead() {
    return this.head;
  };

  toString() {
    let current = this.head;
    let string = '';

    while (current) {
      string += current.element + (current.next ? ', ' : '');
      current = current.next;
    }
    return string;
  };

  print() {
    console.log(this.toString());
  };
}
