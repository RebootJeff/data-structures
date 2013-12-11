describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of binarySearchTree

  it("should carry a value", function() {
    binarySearchTree.value = 5;
    expect(binarySearchTree.value).toEqual(5);
  });

  it("should correctly insert values", function(){
    binarySearchTree.value = 5;
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(6);
    expect(binarySearchTree.right.value).toEqual(8);
    expect(binarySearchTree.left.value).toEqual(3);
    expect(binarySearchTree.right.left.value).toEqual(6);
  });

});
