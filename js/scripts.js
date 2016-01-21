var countBy = function (incr,max) {
  var text = "";
  for (var i = incr; i < max; i+=incr) {
    text = text + (i + ", ")
  }

  return text;
}


$(document).ready(function() {
  $("button").click(function(){

    var input1 = parseInt($("#increment").val());
    var input2 = parseInt($("#max").val());
    var funct = countBy(input1, input2);
    $("#results").text("");
    $("#results").append(funct);

  });
});
