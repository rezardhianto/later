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
if (! _$jscoverage['constraint/year.js']) {
  _$jscoverage['constraint/year.js'] = [];
  _$jscoverage['constraint/year.js'][11] = 0;
  _$jscoverage['constraint/year.js'][30] = 0;
  _$jscoverage['constraint/year.js'][39] = 0;
  _$jscoverage['constraint/year.js'][48] = 0;
  _$jscoverage['constraint/year.js'][57] = 0;
  _$jscoverage['constraint/year.js'][67] = 0;
  _$jscoverage['constraint/year.js'][77] = 0;
}
_$jscoverage['constraint/year.js'].source = ["/**","* Year Constraint (Y)","* (c) 2013 Bill, BunKat LLC.","*","* Definition for a year constraint type.","*","* Later is freely distributable under the MIT license.","* For all details and documentation:","*     http://github.com/bunkat/later","*/","later.year = later.Y = {","","  /**","  * The name of this constraint.","  */","  name: 'year',","","  /**","  * The rough amount of seconds between start and end for this constraint.","  * (doesn't need to be exact)","  */","  range: 31556900,","","  /**","  * The year value of the specified date.","  *","  * @param {Date} d: The date to calculate the value of","  */","  val: function(d) {","    return d.Y || (d.Y = later.date.getYear.call(d));","  },","","  /**","  * The minimum and maximum valid values for the year constraint.","  * If max is past 2099, later.D.extent must be fixed to calculate leap years","  * correctly.","  */","  extent: function() {","    return [1970, 2099];","  },","","  /**","  * The start of the year of the specified date.","  *","  * @param {Date} d: The specified date","  */","  start: function(d) {","    return d.YStart || (d.YStart = later.date.next(later.Y.val(d)));","  },","","  /**","  * The end of the year of the specified date.","  *","  * @param {Date} d: The specified date","  */","  end: function(d) {","    return d.YEnd || (d.YEnd = later.date.prev(later.Y.val(d)));","  },","","  /**","  * Returns the start of the next instance of the year value indicated.","  *","  * @param {Date} d: The starting date","  * @param {int} val: The desired value, must be within extent","  */","  next: function(d, val) {","    return val &gt; later.Y.val(d) ? later.date.next(val) : undefined;","  },","","  /**","  * Returns the end of the previous instance of the year value indicated.","  *","  * @param {Date} d: The starting date","  * @param {int} val: The desired value, must be within extent","  */","  prev: function(d, val) {","    return val &lt; later.Y.val(d) ? later.date.prev(val) : undefined;","  }","","};"];
_$jscoverage['constraint/year.js'][11]++;
later.year = (later.Y = {name: "year", range: 31556900, val: (function (d) {
  _$jscoverage['constraint/year.js'][30]++;
  return (d.Y || (d.Y = later.date.getYear.call(d)));
}), extent: (function () {
  _$jscoverage['constraint/year.js'][39]++;
  return [1970, 2099];
}), start: (function (d) {
  _$jscoverage['constraint/year.js'][48]++;
  return (d.YStart || (d.YStart = later.date.next(later.Y.val(d))));
}), end: (function (d) {
  _$jscoverage['constraint/year.js'][57]++;
  return (d.YEnd || (d.YEnd = later.date.prev(later.Y.val(d))));
}), next: (function (d, val) {
  _$jscoverage['constraint/year.js'][67]++;
  return ((val > later.Y.val(d))? later.date.next(val): undefined);
}), prev: (function (d, val) {
  _$jscoverage['constraint/year.js'][77]++;
  return ((val < later.Y.val(d))? later.date.prev(val): undefined);
})});
