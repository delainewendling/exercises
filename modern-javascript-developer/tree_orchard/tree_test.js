describe("The specification for tree orchard", function(){

  it("there should be a plant function defined", function(){
    expect(Plant).toBeDefined();
  });

  it("there should be a tree function defined", function(){
    expect(Tree).toBeDefined();
  });

  it("increaseHeight method is defined", function(){
    expect(Plant.prototype.increaseHeight).toBeDefined();
  })

  it("decreaseHeight method is defined", function(){
    expect(Plant.prototype.decreaseHeight).toBeDefined();
  })

  it("increaseHeight method is defined", function(){
    expect(Plant.prototype.height).toBeDefined();
  })

  it("increaseHeight method is defined", function(){
    expect(Tree.prototype.grow).toBeDefined();
  })

  it("increaseHeight method is defined", function(){
    expect(Tree.prototype.trim).toBeDefined();
  })

  it('should add two stringed numbers', function(){
    expect(PearTree.trim(2)).toBe(1);
  });

})