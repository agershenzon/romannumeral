describe("splitword", function(){
  it("should find a string and split into array", function(){
    expect(splitword("ant")).to.equal["a","n","t"]
  });
});

  describe("findvar", function(){
  it("should find a vowel and replace each vowel with a '-'", function(){
    expect(findvar("ant")).to.equal["-","n","t"]
  });
  });
