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

  // search(key) : This searches for the key in the tree and returns true
  // if it exists and returns false if the node does not exist
  // inOrderTraverse : This visits all nodes of the tree using in-order traverse
  // preOrderTraverse : This visits all nodes of the tree using pre-order
  // traverse
  // postOrderTraverse : This visits all nodes of the tree using post-order
  // traverse
  // min : This returns the minimum value/key in the tree
  // max : This returns the maximum value/key in the tree
}
