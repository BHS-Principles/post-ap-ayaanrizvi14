var LIST = [
  "Dhruvs natural hottness",
  "all otther things",
  "seetness"
];

var BTN = document.getElementById("myButton");

for(var i = 0 ; i < 3; i++){
  var newBTN = BTN.cloneNode(true);
  document.body.append(newBTN);
  alert("Check me OUT!!!!! " + LIST[i])
}

