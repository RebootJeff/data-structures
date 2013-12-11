describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.
  it("should have a value that can be set", function() {
    tree.value = 1;
    expect(tree.value).toEqual(1);
  });

  it("should have a child after adding it", function() {
    var child1 = makeTree();
    child1.value = 1;
    tree.addChild(child1);
    expect(tree.children[0].value).toEqual(child1.value);
  });

  it("should find values using contains", function() {
    var child1 = makeTree();
    child1.value = 1;
    tree.addChild(child1);
    expect(tree.contains(1)).toBe(true);
  });
});
