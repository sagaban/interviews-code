import LinkedList from '/app/data-structures/linked-list';

export default function HashTable() {
  const TABLE_SIZE = 37;
  const table = [];

  const loseloseHashCode = (key) => { // eslint-disable-line no-unused-vars
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % TABLE_SIZE;
  };


  const djb2HashCode = function(key) { // eslint-disable-line no-unused-vars
    // Initialize the hash with a prime number, random
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      // Multiply the hash bya  magical number and sum it with the ASCII value
      // of the character line
      hash = hash * 33 + key.charCodeAt(i);
    }
    // return the module of another random prime number
    return hash % 1013;
  };

  // So we can change the hash function with ease
  const hashCode = function(key) {
    return djb2HashCode(key);
  };

  const ValuePair = function(key, value) {
    this.key = key;
    this.value = value;

    this.toString = function() {
      return '[' + this.key + ' - ' + this.value + ']';
    };
  };

  // This adds a new item to the hash table (or it can also update it)
  this.put = function(key, value) {
    const position = hashCode(key);
    if (table[position] === undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  };

  // This returns a specific value searched by the key
  this.get = function(key) {
    const position = hashCode(key);

    if (table[position] !== undefined && !table[position].isEmpty()) {
      // iterate linked list to find key/value
      let current = table[position].getHead();

      do {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      } while (current);
    }
    return undefined;
  };

  // This removes the value from the hash table using the key
  this.remove = function(key) {
    const position = hashCode(key);

    if (table[position] !== undefined) {
      // iterate linked list to find key/value
      let current = table[position].getHead();
      do {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      } while (current);
    }

    return false;
  };
}
