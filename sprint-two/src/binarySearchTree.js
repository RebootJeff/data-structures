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
