
var splitword = function (word) {
var chop = word.split("");
return chop;
}

var findvar = function (word) {
var letters = splitword(word)
var newarray = []
letters.forEach(function(i) {
  if(i.match(/[aeiou]/)){
    i = "-"
    newarray.push(i)
  }else {
    newarray.push(i)
    }
  });
var results = newarray.join("");
return results;
};

$(function () {
  $("button").click(function(){
    var results = $("#hide").val();
    var runFunction = findvar(results);
    $("p#results").text(runFunction)
  })

})
