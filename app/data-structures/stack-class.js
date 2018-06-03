export default class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * This adds a new item (or several items) to the top of the stack.
   *
   * @param  {*} element   Element to be added to the stack
   */
  push(element) {
    // items.push(element); --> Too obvious
    this.items = this.items.concat(element);
  };

  /**
   * This removes the top item from the stack. It also returns the removed
   * element.
   *
   * @return {*}    The last element of the stack
   */
  pop() {
    // return this.items.pop(); --> Too obvious
    const last = this.items.length - 1;
    const toReturn = this.items[last];
    this.items = this.items.slice(0, last);
    return toReturn;
  };

  /**
   *  This returns the top element from the stack. The stack is not modified
   * (it does not remove the element; it only returns the element for
   * information purposes).
   *
   * @return {*}    The last element of the stack
   */
  peek() {
    return this.items[this.items.length-1];
  };

  /**
   * This returns true if the stack does not contain any elements and false if
   * the size of the stack is bigger than 0.
   *
   * @return {Boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  };

  /**
   *  This removes all the elements of the stack.
   */
  clear() {
    this.items = [];
  };

  /**
   * This returns how many elements the stack contains. It is similar to the
   * length property of an array
   *
   * @return {Number}
   */
  size() {
    return this.items.length;
  };

  /**
   * Returns the Sack as array
   *
   * @return {Array}
   */
  toArray() {
    return this.items;
  };
}
