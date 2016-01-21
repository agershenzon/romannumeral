var upperNum = function (numerals) {
var upperNumerals = numerals.toUpperCase()
return upperNumerals
}

var numArray = function (numerals) {
  var upper = upperNum(numerals)
  var split = upper.split("")
  return split
}

var valueArray = function (numerals) {
  var array = numArray(numerals);
  var newarray = []
  var I = 1;
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;
  // console.log(newarray);
  // console.log(array);

  array.forEach(function(entry){
    if(entry.match(/[I]/)){
      entry = 1;
      newarray.push(entry);
    }else if (entry.match(/[V]/)) {
      entry = 5;
      newarray.push(entry);
    } else if (entry.match(/[X]/)) {
      entry = 10;
      newarray.push(entry);
    } else if (entry.match(/[L]/)) {
      entry = 50;
      newarray.push(entry);
    } else if (entry.match(/[C]/)) {
      entry = 100;
      newarray.push(entry);
    } else if (entry.match(/[D]/)) {
      entry = 500;
      newarray.push(entry);
    } else if (entry.match(/[M]/)) {
      entry = 1000;
      newarray.push(entry);
    }else {
      newarray ="Please Enter Correct Numerals"
    };
    // debugger;
    console.log(newarray)
    return newarray
  });
};

// $(function () {
//
//
// })
