var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(childTree){
  this.children = this.children || [];
  this.children.push(childTree);
};

treeMethods.contains = function(val){
  var result = false;

  var recursiveCall = function(tree){
    if(tree.value === val){
      result = true;
    } else {
      _.each(tree.children, function(child, index, children){
        recursiveCall(child);
      });
    }
  };

  recursiveCall(this);
  return result;
};
