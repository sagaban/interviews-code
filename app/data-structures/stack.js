export default function Stack() {
  let items = [];

  /**
   * This adds a new item (or several items) to the top of the stack.
   *
   * @argument  {*} element   Element to be added to the stack
   */
  this.push = function(element) {
    // items.push(element); --> Too obvious
    items = items.concat(element);
  };

  /**
   * This removes the top item from the stack. It also returns the removed
   * element.
   *
   * @return {*}    The last element of the stack
   */
  this.pop = function() {
    // return items.pop(); --> Too obvious
    const last = items.length - 1;
    const toReturn = items[last];
    items = items.slice(0, last);
    return toReturn;
  };

  /**
   *  This returns the top element from the stack. The stack is not modified
   * (it does not remove the element; it only returns the element for
   * information purposes).
   *
   * @return {*}    The last element of the stack
   */
  this.peek = function() {
    return items[items.length-1];
  };

  /**
   * This returns true if the stack does not contain any elements and false if
   * the size of the stack is bigger than 0.
   *
   * @return {Boolean}
   */
  this.isEmpty = function() {
    return items.length === 0;
  };

  /**
   *  This removes all the elements of the stack.
   */
  this.clear = function() {
    items = [];
  };

  /**
   * This returns how many elements the stack contains. It is similar to the
   * length property of an array
   *
   * @return {Number}
   */
  this.size = function() {
    return items.length;
  };

  /**
   * Returns the Sack as array
   *
   * @return {Array}
   */
  this.toArray = function() {
    return items;
  };
}
