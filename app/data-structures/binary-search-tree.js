export default function BinarySearchTree() {
  const Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  let root = null;

  // This inserts a new key in the tree
  this.insert = function(key) {
    const newNode = new Node(key);

    // special case - first element
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  const insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  this.getRoot = function() {
    return root;
  };

  // This visits all nodes of the tree using in-order traverse
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  };

  const inOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  // This visits all nodes of the tree using pre-order traverse
  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback);
  };

  const preOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  // This visits all nodes of the tree using post-order traverse
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  };

  const postOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  // This searches for the key in the tree and returns true
  // if it exists and returns false if the node does not exist
  this.search = function(key) {
    return searchNode(root, key);
  };

  const searchNode = function(node, key) {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      // element is equal to node.item
      return true;
    }
  };

  //  This returns the minimum value/key in the tree
  this.min = function() {
    return minNode(root);
  };

  const minNode = function(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }

      return node.key;
    }
    return null;
  };

  // This returns the maximum value/key in the tree
  this.max = function() {
    return maxNode(root);
  };

  const maxNode = function(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }

      return node.key;
    }
    return null;
  };
}
