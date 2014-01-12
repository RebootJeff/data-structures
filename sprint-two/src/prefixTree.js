// Prefix trees aka tries aka digital trees aka radix trees.
var Trie = function(key, val, _branch){
// Not all nodes will have a val or children.
// Only root node will have empty key.
  this.children = [];
  this.branch = _branch || null;
  this.key = key;
  this.val = val;
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

Trie.prototype.hasKey = function(key){
// Return boolean based on weather or not given key is currently stored in the trie.
};

Trie.prototype.retrieveVal = function(key){
// Return val stored with given key.

};

Trie.prototype.keysWithPrefix = function(prefix){
// Return all keys connected to a branch as determined by the given prefix.

};
