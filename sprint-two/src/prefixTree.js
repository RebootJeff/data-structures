// Prefix trees aka tries aka digital trees aka radix trees.
var Trie = function(key, val, _branch){
// Not all nodes will have a val or children.
// Only root node will have empty key.
  this.children = [];
  this.branch = _branch || null;
  this.key = key || null;
  this.val = val || null;
};

Trie.prototype.insert = function(key, val, keyIndex){
// Add new key-value pair to appropriate branch of the trie.
  keyIndex = keyIndex || 0;  // `keyIndex` should only be provided by recursive calls.
  if(this.key === key){
    // We've reached a node that already has the given key.
    // Overwrite original val stored at given key.
    this.val = val;
  } else {
    var child;
    var insertHere = true;
    for(var i = 0; i < this.children.length; i++){
      child = this.children[i];
      if(child.branch === key[keyIndex]){
        child.insert(key, val, keyIndex + 1);
        insertHere = false;
        break;
      }
    }

    if(insertHere){
      // The `for`-loop didn't find any suitable branches.
      // Add all necessary nodes to spell out the full key.
      var currentNode = this;
      var newNode, subKey, branch;
      for(i = keyIndex; i < key.length; i++){
        branch = key.slice(i, i + 1);
        subKey = key.slice(0, i + 1);
        if(i === key.length - 1){
          newNode = new Trie(key, val, branch);
        } else {
          newNode = new Trie(subKey, null, branch);
        }
        currentNode.children.push(newNode);
        currentNode = newNode;
      }
    }
  }
};

Trie.prototype.hasKey = function(key, keyIndex){
// Return boolean based on weather or not given key is currently stored in the trie.
  if(this.key === key){
    return true;
  }

  var result = false;
  var child;
  keyIndex = keyIndex || 0;

  for(var i = 0; i < this.children.length; i++){
    child = this.children[i];
    if(child.branch === key[keyIndex]){
      result = result || child.hasKey(key, keyIndex + 1);
      break;
    }
  }

  return result;
};

Trie.prototype.retrieveVal = function(key, keyIndex){
// Return val stored with given key.
  if(this.key === key){
    return this.val;
  }

  keyIndex = keyIndex || 0;
  var result, child;
  // It's worth noting I don't use Underscore `each` or `all` so I can use `break;`.
  for(var i = 0; i < this.children.length; i++){
    child = this.children[i];
    if(child.branch === key[keyIndex]){
      result = child.retrieveVal(key, keyIndex + 1);
      break;
    }
  }

  return result;
};

Trie.prototype.getKeysWithPrefix = function(prefix){
// Return all keys connected to a branch as determined by the given prefix.

// 1. search for node with given prefix
// 2. check if the node has a val; if so, add it to result array
// 3. find all descendents of the node; add their respective keys if they also have vals

  var findNodeWithPrefix = function(node, keyIndex){
  // find node whose key matches the prefix and then find descendent keys
    if(node.key === prefix){
      findDescendentKeys(node);
    }

    keyIndex = keyIndex || 0;
    var child;
    for(var i = 0; i < node.children.length; i++){
      child = node.children[i];
      if(child.branch === prefix[keyIndex]){
        findNodeWithPrefix(child, keyIndex + 1);
      }
      break;
    }
  };

  var result = [];
  var findDescendentKeys = function(node){
  // traverse descendent nodes and push any keys that are paired with vals
    if(node.val){
      result.push(node.key);
    }
    for(var i = 0; i < node.children.length; i++){
      findDescendentKeys(node.children[i]);
    }
  };

  findNodeWithPrefix(this);
  return result;
};

Trie.prototype.removeKey = function(key, keyIndex){
  keyIndex = keyIndex || 0;
  var child;
  for(var i = 0; i < this.children.length; i++){
    child = this.children[i];
    if(child.key === key){
      child.val = null;
      if(child.children.length === 0){
        this.children.splice(i, 1);
      }
      break;
    } else if(child.branch === key[keyIndex]){
      child.removeKey(key, keyIndex + 1);
      break;
    }
  }
};

var test = new Trie();
test.insert('hi', 1);
test.insert('hill', 2);
test.insert('hick', 3);
console.log(test.getKeysWithPrefix('h'));
console.log(test.getKeysWithPrefix('x'));
test.removeKey('hi');
console.log(test.getKeysWithPrefix('h'));
