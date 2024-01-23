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
  else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  //null
  else if (typeof obj === 'null') {
    return 'null';
  }
  //undefined
  else if (!obj) {
    return 'null';
  }
  //array
  if (Array.isArray(obj)) {
    resultStr += '[';
    if (obj.length > 0 && obj !== undefined) {
      for (var i = 0; i < obj.length - 1; i++) {
        resultStr += stringifyJSON(obj[i]) + ',';
      }
      // accounting for the final element
      resultStr += stringifyJSON(obj[obj.length - 1]);
    }
    resultStr += ']';
    // comma
    return resultStr;
  //'[null]' to equal '[]'
  } else if (typeof obj === 'object') {
    resultStr += '{';
    //function basecase
    // Mabe try putting edge cases of functions or undefined for values here?
    if (Object.keys(obj.length) === 0) {
      resultStr += '}';
    } else {
      for (var key in obj) {
        if (obj[key] !== undefined && typeof obj[key] !== 'function') {
          resultStr += '';
        } else {
          resultStr += stringifyJSON(key) + ': ' + stringifyJSON(obj[key]) + ',';
        }
      }
      resultStr = resultStr.slice(0, resultStr.length - 1) + '}';
    }
    return resultStr;
  }

};
/*
Cannot convert undefined or null to object
at Function.keys (<anonymous>)
    at stringifyJSON (src/stringifyJSON.js:40:16)
    at file:///Users/toast/Desktop/HR%20sprints/rfp2401-recursion-review/spec/stringifyJSONSpec.js:7:20
    at Array.forEach (<anonymous>)
    at Context.<anonymous> (spec/stringifyJSONSpec.js:5:26)
*/
// obj.forEach(function(element)