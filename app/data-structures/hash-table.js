export default function HashTable() {
  const table = [];

  const loseloseHashCode = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  // This adds a new item to the hash table (or it can also update it)
  this.put = function(key, value) {
    const position = loseloseHashCode(key);
    // console.log(position + ' - ' + key);
    table[position] = value;
  };

  // This returns a specific value searched by the key
  this.get = function(key) {
    return table[loseloseHashCode(key)];
  };

  // This removes the value from the hash table using the key
  this.remove = function(key) {
    table[loseloseHashCode(key)]= undefined;
  };
}
