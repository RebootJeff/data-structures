// Prefix trees aka tries aka digital trees aka radix trees
var Trie = function(key, val){
// Not all nodes will have a val or children
// Only root node will have empty key
  this.children = [];
  this.prefix = null;
  this.key = key;
  this.val = val;
};

Trie.prototype.insert = function(key, val){
// Add new key-value pair to appropriate branch of the trie

};

Trie.prototype.hasKey = function(key){
// Return boolean based on weather or not given key is currently stored in the trie
};

Trie.prototype.retrieveVal = function(key){
// Return val stored with given key

};

Trie.prototype.keysWithPrefix = function(prefix){
// Return all keys connected to a branch as determined by the given prefix

};
