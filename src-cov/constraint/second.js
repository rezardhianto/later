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
if (! _$jscoverage['constraint/second.js']) {
  _$jscoverage['constraint/second.js'] = [];
  _$jscoverage['constraint/second.js'][11] = 0;
  _$jscoverage['constraint/second.js'][30] = 0;
  _$jscoverage['constraint/second.js'][37] = 0;
  _$jscoverage['constraint/second.js'][46] = 0;
  _$jscoverage['constraint/second.js'][55] = 0;
  _$jscoverage['constraint/second.js'][65] = 0;
  _$jscoverage['constraint/second.js'][74] = 0;
  _$jscoverage['constraint/second.js'][75] = 0;
  _$jscoverage['constraint/second.js'][84] = 0;
  _$jscoverage['constraint/second.js'][94] = 0;
}
_$jscoverage['constraint/second.js'].source = ["/**","* Second Constraint (s)","* (c) 2013 Bill, BunKat LLC.","*","* Definition for a second constraint type.","*","* Later is freely distributable under the MIT license.","* For all details and documentation:","*     http://github.com/bunkat/later","*/","later.second = later.s = {","","  /**","  * The name of this constraint.","  */","  name: 'second',","","  /**","  * The rough amount of seconds between start and end for this constraint.","  * (doesn't need to be exact)","  */","  range: 1,","","  /**","  * The second value of the specified date.","  *","  * @param {Date} d: The date to calculate the value of","  */","  val: function(d) {","    return d.s || (d.s = later.date.getSec.call(d));","  },","","  /**","  * The minimum and maximum valid second values.","  */","  extent: function() {","    return [0, 59];","  },","","  /**","  * The start of the second of the specified date.","  *","  * @param {Date} d: The specified date","  */","  start: function(d) {","    return d;","  },","","  /**","  * The end of the second of the specified date.","  *","  * @param {Date} d: The specified date","  */","  end: function(d) {","    return d;","  },","","  /**","  * Returns the start of the next instance of the second value indicated.","  *","  * @param {Date} d: The starting date","  * @param {int} val: The desired value, must be within extent","  */","  next: function(d, val) {","    var next = later.date.next(","      later.Y.val(d),","      later.M.val(d),","      later.D.val(d),","      later.h.val(d),","      later.m.val(d) + (val &lt;= later.s.val(d) ? 1 : 0),","      val);","","    // correct for passing over a daylight savings boundry","    if(!later.date.isUTC &amp;&amp; next.getTime() &lt;= d.getTime()) {","      next = later.date.next(","        later.Y.val(next),","        later.M.val(next),","        later.D.val(next),","        later.h.val(next),","        later.m.val(next),","        val + 7200);","    }","","    return next;","  },","","  /**","  * Returns the end of the previous instance of the second value indicated.","  *","  * @param {Date} d: The starting date","  * @param {int} val: The desired value, must be within extent","  */","  prev: function(d, val, cache) {","    return later.date.prev(","      later.Y.val(d),","      later.M.val(d),","      later.D.val(d),","      later.h.val(d),","      later.m.val(d) + (val &gt;= later.s.val(d) ? -1 : 0),","      val);","  }","","};"];
_$jscoverage['constraint/second.js'][11]++;
later.second = (later.s = {name: "second", range: 1, val: (function (d) {
  _$jscoverage['constraint/second.js'][30]++;
  return (d.s || (d.s = later.date.getSec.call(d)));
}), extent: (function () {
  _$jscoverage['constraint/second.js'][37]++;
  return [0, 59];
}), start: (function (d) {
  _$jscoverage['constraint/second.js'][46]++;
  return d;
}), end: (function (d) {
  _$jscoverage['constraint/second.js'][55]++;
  return d;
}), next: (function (d, val) {
  _$jscoverage['constraint/second.js'][65]++;
  var next = later.date.next(later.Y.val(d), later.M.val(d), later.D.val(d), later.h.val(d), (later.m.val(d) + ((val <= later.s.val(d))? 1: 0)), val);
  _$jscoverage['constraint/second.js'][74]++;
  if (((! later.date.isUTC) && (next.getTime() <= d.getTime()))) {
    _$jscoverage['constraint/second.js'][75]++;
    next = later.date.next(later.Y.val(next), later.M.val(next), later.D.val(next), later.h.val(next), later.m.val(next), (val + 7200));
  }
  _$jscoverage['constraint/second.js'][84]++;
  return next;
}), prev: (function (d, val, cache) {
  _$jscoverage['constraint/second.js'][94]++;
  return later.date.prev(later.Y.val(d), later.M.val(d), later.D.val(d), later.h.val(d), (later.m.val(d) + ((val >= later.s.val(d))? -1: 0)), val);
})});
