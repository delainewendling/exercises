describe("The specifications for word checking", function(){

  it("Should have a check word count function", function(){
    expect(checkWordCount).toBeDefined();
  });

  it("Check word count should ", function(){
    expect(checkWordCount(99)).toBe(true)
    expect(checkWordCount(101)).toBe(false);
  });

  it('Duplicate Check should be defined', function(){
    expect(duplicateCheck).toBeDefined();
  });

  it("No Duplicate Words", function(){
    expect(duplicateCheck()).toBe(false);
  });

  it('Verify Alpha Numeric function should be defined', function(){
    expect(verifyAlphaNumeric).toBeDefined();
  });

  it("Text should not have any characters that are not alphanumeric", function(){
    expect(alphaNumeric(/[^a-zA-Z\d\s:\u00C0-\u00FF]/).toBe(false)
    expect(alphaNumeric(/[a-zA-Z\d\s:\u00C0-\u00FF]/).toBe(true)
  });

})