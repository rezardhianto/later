/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['array/sort.js']) {
  _$jscoverage['array/sort.js'] = [];
  _$jscoverage['array/sort.js'][13] = 0;
  _$jscoverage['array/sort.js'][14] = 0;
  _$jscoverage['array/sort.js'][15] = 0;
  _$jscoverage['array/sort.js'][18] = 0;
  _$jscoverage['array/sort.js'][19] = 0;
}
_$jscoverage['array/sort.js'].source = ["/**","* Sort","* (c) 2013 Bill, BunKat LLC.","*","* Sorts an array in natural ascending order, placing zero at the end","* if zeroIsLast is true.","*","* Later is freely distributable under the MIT license.","* For all details and documentation:","*     http://github.com/bunkat/later","*/","","later.array.sort = function (arr, zeroIsLast) {","  arr.sort(function(a,b) {","    return +a - +b;","  });","","  if(zeroIsLast &amp;&amp; arr[0] === 0) {","    arr.push(arr.shift());","  }","};"];
_$jscoverage['array/sort.js'][13]++;
later.array.sort = (function (arr, zeroIsLast) {
  _$jscoverage['array/sort.js'][14]++;
  arr.sort((function (a, b) {
  _$jscoverage['array/sort.js'][15]++;
  return ((+ a) - (+ b));
}));
  _$jscoverage['array/sort.js'][18]++;
  if ((zeroIsLast && (arr[0] === 0))) {
    _$jscoverage['array/sort.js'][19]++;
    arr.push(arr.shift());
  }
});
