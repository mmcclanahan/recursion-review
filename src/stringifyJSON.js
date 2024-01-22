// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var resultStr = '';
  //string base case
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }
  //number,boolean base case
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  //undefined
  if (!obj) {
    return 'null';
  }
  //array
  if (Array.isArray(obj)) {
    resultStr += '[';
    obj.forEach(function(element) {
      resultStr += stringifyJSON(element);
    });
    resultStr += ']';
    return resultStr;
  }

};
