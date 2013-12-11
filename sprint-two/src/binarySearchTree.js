var makeBinarySearchTree = function(val){
  var instance = {};
  instance.value = val;
  instance.left = null;
  instance.right = null;
  _.extend(instance, bstMethods);
  return instance;
};

var bstMethods = {
  insert: function(val){
    var newNode = makeBinarySearchTree(val);
    if(this.value === val){
      return;  // do nothing
    } else if(this.value < val){
      if(this.right){
        this.right.insert(val);
      } else {
        this.right = newNode;
      }
    } else {
      if(this.left){
        this.left.insert(val);
      } else {
        this.left = newNode;
      }
    }
  },

  contains: function(val){
    var result = false;

    if(this.value === val){
      result = true;
    } else if(this.value < val){
      result = result || this.right.contains(val);
    } else {
      result = result || this.left.contains(val);
    }

    return result;
  },

  depthFirstLog: function(callback){
    callback(this.value);
    this.left && this.left.depthFirstLog(callback);
    this.right && this.right.depthFirstLog(callback);
  }
};
