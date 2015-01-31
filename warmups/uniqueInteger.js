function processData(input) {
   var foo = input.split('\n');
   var sample = foo[1].split(' ').map(function (element) {
       return parseInt(element)
   });

  var results;
  if (sample.length === 1) {
    results = sample[0];
  }

  sample.sort();
  var results = sample.filter(function(element, index, array) {
    var prev = array[index - 1];
    var next = array[index + 1];
    if (index !== array.length) {
      return element !== prev && element !== next;
    }
  });

  console.log(results.join(''));
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
