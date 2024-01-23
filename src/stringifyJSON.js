// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var resultStr = '';
  //string base case
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'null') {
    return 'null';
  } else if (typeof obj === 'function' || obj === undefined) {
    return undefined;
  } else if (!obj) {
    return 'null';
  } else if (Array.isArray(obj)) {
    resultStr += '[';
    if (obj.length > 0 && obj !== undefined) {
      for (var i = 0; i < obj.length - 1; i++) {
        resultStr += stringifyJSON(obj[i]) + ',';
      }
      // accounting for the final element
      resultStr += stringifyJSON(obj[obj.length - 1]);
    }
    resultStr += ']';
    return resultStr;
  } else if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      resultStr += '{';
      for (var key in obj) {
        var keyStr = stringifyJSON(key);
        var valueStr = stringifyJSON(obj[key]);
        if (valueStr !== undefined && valueStr !== undefined) {
          resultStr += keyStr + ':' + valueStr + ',';
        }
      }
      var commaIndex = resultStr.lastIndexOf(',');
      resultStr = resultStr.slice(0, commaIndex) + resultStr.slice(commaIndex + 1) + '}';
    }
    return resultStr;
  }

};


