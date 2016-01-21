describe("upperNum", function () {
it("takes user input and makes everything uppercase", function(){
  expect(upperNum("zxcv")).to.equal("ZXCV")
});
});

describe("numArray", function () {
it("takes user input and makes in array", function(){
  expect(numArray("jim")).to.equal["J", "I", "M"]
});
});

describe("valueArray", function(){
  it("will loop through array and give value to each array", function(){
    expect(valueArray("XVC")).to.equal[10, 5, 100]
  });

  it("will loop through array and give error if entry is non-numeral", function(){
    expect(valueArray("zoo")).to.equal("Please Enter Correct Numerals")
  });

});

describe("addArray", function () {
it("takes the sum total of all arrays", function(){
  expect[10, 5, 100].to.equal[115]
});
});
