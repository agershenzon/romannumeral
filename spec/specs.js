describe("upperNum", function () {
it("takes user input and makes everything uppercase", function(){
  expect(upperNum("zxcv")).to.equal("ZXCV")
});
});

describe("numArray", function () {
it("takes user input and makes everything uppercase", function(){
  expect(numArray("jim")).to.equal["J", "I", "M"]
});
});

describe("valueArray", function(){
  it("will loop through array and give value to each array", function(){
    expect(valueArray("XVC")).to.equal(115)
  });
});
