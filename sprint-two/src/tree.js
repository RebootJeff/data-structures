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

  if(this.value === val){
    result = true;
  } else {
    _.each(this.children, function(child, index, children){
      result = result || child.contains(val);
    });
  }

  return result;
};
