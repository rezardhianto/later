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
if (! _$jscoverage['core/schedule.js']) {
  _$jscoverage['core/schedule.js'] = [];
  _$jscoverage['core/schedule.js'][13] = 0;
  _$jscoverage['core/schedule.js'][16] = 0;
  _$jscoverage['core/schedule.js'][19] = 0;
  _$jscoverage['core/schedule.js'][20] = 0;
  _$jscoverage['core/schedule.js'][23] = 0;
  _$jscoverage['core/schedule.js'][24] = 0;
  _$jscoverage['core/schedule.js'][27] = 0;
  _$jscoverage['core/schedule.js'][28] = 0;
  _$jscoverage['core/schedule.js'][31] = 0;
  _$jscoverage['core/schedule.js'][35] = 0;
  _$jscoverage['core/schedule.js'][36] = 0;
  _$jscoverage['core/schedule.js'][40] = 0;
  _$jscoverage['core/schedule.js'][42] = 0;
  _$jscoverage['core/schedule.js'][44] = 0;
  _$jscoverage['core/schedule.js'][47] = 0;
  _$jscoverage['core/schedule.js'][48] = 0;
  _$jscoverage['core/schedule.js'][49] = 0;
  _$jscoverage['core/schedule.js'][54] = 0;
  _$jscoverage['core/schedule.js'][55] = 0;
  _$jscoverage['core/schedule.js'][56] = 0;
  _$jscoverage['core/schedule.js'][57] = 0;
  _$jscoverage['core/schedule.js'][61] = 0;
  _$jscoverage['core/schedule.js'][66] = 0;
  _$jscoverage['core/schedule.js'][68] = 0;
  _$jscoverage['core/schedule.js'][72] = 0;
  _$jscoverage['core/schedule.js'][73] = 0;
  _$jscoverage['core/schedule.js'][77] = 0;
  _$jscoverage['core/schedule.js'][81] = 0;
  _$jscoverage['core/schedule.js'][82] = 0;
  _$jscoverage['core/schedule.js'][84] = 0;
  _$jscoverage['core/schedule.js'][86] = 0;
  _$jscoverage['core/schedule.js'][87] = 0;
  _$jscoverage['core/schedule.js'][88] = 0;
  _$jscoverage['core/schedule.js'][89] = 0;
  _$jscoverage['core/schedule.js'][95] = 0;
  _$jscoverage['core/schedule.js'][96] = 0;
  _$jscoverage['core/schedule.js'][97] = 0;
  _$jscoverage['core/schedule.js'][98] = 0;
  _$jscoverage['core/schedule.js'][102] = 0;
  _$jscoverage['core/schedule.js'][105] = 0;
  _$jscoverage['core/schedule.js'][106] = 0;
  _$jscoverage['core/schedule.js'][107] = 0;
  _$jscoverage['core/schedule.js'][108] = 0;
  _$jscoverage['core/schedule.js'][109] = 0;
  _$jscoverage['core/schedule.js'][110] = 0;
  _$jscoverage['core/schedule.js'][112] = 0;
  _$jscoverage['core/schedule.js'][113] = 0;
  _$jscoverage['core/schedule.js'][118] = 0;
  _$jscoverage['core/schedule.js'][121] = 0;
  _$jscoverage['core/schedule.js'][122] = 0;
  _$jscoverage['core/schedule.js'][123] = 0;
  _$jscoverage['core/schedule.js'][124] = 0;
  _$jscoverage['core/schedule.js'][129] = 0;
  _$jscoverage['core/schedule.js'][130] = 0;
  _$jscoverage['core/schedule.js'][132] = 0;
  _$jscoverage['core/schedule.js'][133] = 0;
  _$jscoverage['core/schedule.js'][134] = 0;
  _$jscoverage['core/schedule.js'][139] = 0;
  _$jscoverage['core/schedule.js'][140] = 0;
  _$jscoverage['core/schedule.js'][141] = 0;
  _$jscoverage['core/schedule.js'][142] = 0;
  _$jscoverage['core/schedule.js'][145] = 0;
  _$jscoverage['core/schedule.js'][146] = 0;
  _$jscoverage['core/schedule.js'][150] = 0;
  _$jscoverage['core/schedule.js'][153] = 0;
  _$jscoverage['core/schedule.js'][157] = 0;
  _$jscoverage['core/schedule.js'][161] = 0;
  _$jscoverage['core/schedule.js'][165] = 0;
  _$jscoverage['core/schedule.js'][169] = 0;
}
_$jscoverage['core/schedule.js'].source = ["/**","* Schedule","* (c) 2013 Bill, BunKat LLC.","*","* Returns an object to calculate future or previous occurrences of the","* specified schedule.","*","* Later is freely distributable under the MIT license.","* For all details and documentation:","*     http://github.com/bunkat/later","*/","","later.schedule = function(sched) {","","  // compile the schedule components","  var schedules = [], schedulesLen = sched.schedules.length,","      exceptions = [], exceptionsLen = sched.exceptions ? sched.exceptions.length : 0;","","  for(var i = 0; i &lt; schedulesLen; i++) {","    schedules.push(later.compile(sched.schedules[i]));","  }","","  for(var j = 0; j &lt; exceptionsLen; j++) {","    exceptions.push(later.compile(sched.exceptions[j]));","  }","","  function getInstances(dir, count, startDate, endDate, isRange) {","    var d = startDate ? new Date(startDate) : new Date(),","        instances = getStart(dir, count, d, endDate, isRange);","","    return instances.length === 0 ? undefined :","           count === 1 ? instances[0] : instances;","  }","","  function getStart(dir, count, startDate, endDate, isRange) {","    var nextIndex = indexFn(dir), compare = compareFn(dir),","        schedStarts = [], next, results = [];","","    // calc the earliest start date for each schedule","    calcSchedStarts(dir, schedStarts, startDate);","","    while(count--) {","","      while((next = schedStarts[nextIndex(schedStarts)])) {","","        // make sure we didn't go past the end date","        if((endDate &amp;&amp; compare(next.getTime(), endDate.getTime()))) {","          next = null;","          break;","        }","","        // make sure that this date isn't included in any exception","        // if it is, update the schedule starts and try again","        var exceptionEnd = getExceptionEnd(dir, next);","        if(exceptionEnd) {","          calcSchedStarts(dir, schedStarts, exceptionEnd);","          continue;","        }","","        // date is good, push to results and tick schedules to next time","        results.push( isRange ?","          [new Date(next), new Date(getEnd(dir, schedStarts, next))] :","           new Date(next)","        );","","        tickSchedStarts(dir, schedStarts, next);","","        break;","      }","","      // break out if we've run out of valid dates","      if(!next) {","        break;","      }","    }","","    return results;","  }","","","  function getEnd(dir, schedStarts, next) {","    var compare = compareFn(dir), end;","","    for(var i = 0; i &lt; schedulesLen; i++) {","      // find the max end date for any schedule that is valid at 'next'","      if(schedStarts[i] &amp;&amp; schedStarts[i].getTime() === next.getTime()) {","        var schedEnd = schedules[i].end(dir, next);","        if(!end || compare(schedEnd,end)) {","          end = schedEnd;","        }","      }","    }","","    // find the min start date of any exception starting from 'next'","    for(var j = 0; j &lt; exceptionsLen; j++) {","      var exceptStart = exceptions[j].start(dir, next);","      if(compare(end, exceptStart)) {","        end = exceptStart;","      }","    }","","    return new Date(end);","  }","","  function getExceptionEnd(dir, next) {","    var compare = compareFn(dir), result;","    if(exceptionsLen) {","      for(var i = 0; i &lt; exceptionsLen; i++) {","        var exceptStart = exceptions[i].start(dir, next);","        if(exceptStart &amp;&amp; (exceptStart.getTime() === next.getTime() || compare(next, exceptStart))) {","          //var end = exceptions[i].end(dir, next);","          var end = dir === 'next' ? exceptions[i].end(dir, next) : new Date(exceptStart.getTime()-1000);","          result = !result || compare(end, result) ? end : result;","        }","      }","    }","","    return result;","  }","","  function tickSchedStarts(dir, schedStarts, next) {","    for(var i = 0; i &lt; schedulesLen; i++) {","      if(schedStarts[i] &amp;&amp; schedStarts[i].getTime() === next.getTime()) {","        schedStarts[i] = schedules[i].start(dir, schedules[i].tick(dir, next));","      }","    }","  }","","  function calcSchedStarts(dir, schedStarts, next) {","    var compare = compareFn(dir);","","    for(var i = 0; i &lt; schedulesLen; i++) {","      if(!schedStarts[i] || compare(next, schedStarts[i])) {","        schedStarts[i] = schedules[i].start(dir, next);","      }","    }","  }","","  function compareFn(dir) {","    return dir === 'next' ?","      function(a,b) { return a &gt; b; } :","      function(a,b) { return b &gt; a; };","  }","","  function indexFn(dir) {","    return dir === 'next' ? later.array.minIndex : later.array.maxIndex;","  }","","","  return {","","    isValid: function(d) {","      return getInstances('next', 1, d, d) !== undefined;","    },","","    next: function(count, startDate, endDate) {","      return getInstances('next', count || 1, startDate, endDate);","    },","","    prev: function(count, startDate, endDate) {","      return getInstances('prev', count || 1, startDate, endDate);","    },","","    nextRange: function(count, startDate, endDate) {","      return getInstances('next', count || 1, startDate, endDate, true);","    },","","    prevRange: function(count, startDate, endDate) {","      return getInstances('prev', count || 1, startDate, endDate, true);","    }","","  };","","};"];
_$jscoverage['core/schedule.js'][13]++;
later.schedule = (function (sched) {
  _$jscoverage['core/schedule.js'][16]++;
  var schedules = [], schedulesLen = sched.schedules.length, exceptions = [], exceptionsLen = (sched.exceptions? sched.exceptions.length: 0);
  _$jscoverage['core/schedule.js'][19]++;
  for (var i = 0; (i < schedulesLen); (i++)) {
    _$jscoverage['core/schedule.js'][20]++;
    schedules.push(later.compile(sched.schedules[i]));
}
  _$jscoverage['core/schedule.js'][23]++;
  for (var j = 0; (j < exceptionsLen); (j++)) {
    _$jscoverage['core/schedule.js'][24]++;
    exceptions.push(later.compile(sched.exceptions[j]));
}
  _$jscoverage['core/schedule.js'][27]++;
  function getInstances(dir, count, startDate, endDate, isRange) {
    _$jscoverage['core/schedule.js'][28]++;
    var d = (startDate? new Date(startDate): new Date()), instances = getStart(dir, count, d, endDate, isRange);
    _$jscoverage['core/schedule.js'][31]++;
    return ((instances.length === 0)? undefined: ((count === 1)? instances[0]: instances));
}
  _$jscoverage['core/schedule.js'][35]++;
  function getStart(dir, count, startDate, endDate, isRange) {
    _$jscoverage['core/schedule.js'][36]++;
    var nextIndex = indexFn(dir), compare = compareFn(dir), schedStarts = [], next, results = [];
    _$jscoverage['core/schedule.js'][40]++;
    calcSchedStarts(dir, schedStarts, startDate);
    _$jscoverage['core/schedule.js'][42]++;
    while ((count--)) {
      _$jscoverage['core/schedule.js'][44]++;
      while ((next = schedStarts[nextIndex(schedStarts)])) {
        _$jscoverage['core/schedule.js'][47]++;
        if ((endDate && compare(next.getTime(), endDate.getTime()))) {
          _$jscoverage['core/schedule.js'][48]++;
          next = null;
          _$jscoverage['core/schedule.js'][49]++;
          break;
        }
        _$jscoverage['core/schedule.js'][54]++;
        var exceptionEnd = getExceptionEnd(dir, next);
        _$jscoverage['core/schedule.js'][55]++;
        if (exceptionEnd) {
          _$jscoverage['core/schedule.js'][56]++;
          calcSchedStarts(dir, schedStarts, exceptionEnd);
          _$jscoverage['core/schedule.js'][57]++;
          continue;
        }
        _$jscoverage['core/schedule.js'][61]++;
        results.push((isRange? [new Date(next), new Date(getEnd(dir, schedStarts, next))]: new Date(next)));
        _$jscoverage['core/schedule.js'][66]++;
        tickSchedStarts(dir, schedStarts, next);
        _$jscoverage['core/schedule.js'][68]++;
        break;
}
      _$jscoverage['core/schedule.js'][72]++;
      if ((! next)) {
        _$jscoverage['core/schedule.js'][73]++;
        break;
      }
}
    _$jscoverage['core/schedule.js'][77]++;
    return results;
}
  _$jscoverage['core/schedule.js'][81]++;
  function getEnd(dir, schedStarts, next) {
    _$jscoverage['core/schedule.js'][82]++;
    var compare = compareFn(dir), end;
    _$jscoverage['core/schedule.js'][84]++;
    for (var i = 0; (i < schedulesLen); (i++)) {
      _$jscoverage['core/schedule.js'][86]++;
      if ((schedStarts[i] && (schedStarts[i].getTime() === next.getTime()))) {
        _$jscoverage['core/schedule.js'][87]++;
        var schedEnd = schedules[i].end(dir, next);
        _$jscoverage['core/schedule.js'][88]++;
        if (((! end) || compare(schedEnd, end))) {
          _$jscoverage['core/schedule.js'][89]++;
          end = schedEnd;
        }
      }
}
    _$jscoverage['core/schedule.js'][95]++;
    for (var j = 0; (j < exceptionsLen); (j++)) {
      _$jscoverage['core/schedule.js'][96]++;
      var exceptStart = exceptions[j].start(dir, next);
      _$jscoverage['core/schedule.js'][97]++;
      if (compare(end, exceptStart)) {
        _$jscoverage['core/schedule.js'][98]++;
        end = exceptStart;
      }
}
    _$jscoverage['core/schedule.js'][102]++;
    return new Date(end);
}
  _$jscoverage['core/schedule.js'][105]++;
  function getExceptionEnd(dir, next) {
    _$jscoverage['core/schedule.js'][106]++;
    var compare = compareFn(dir), result;
    _$jscoverage['core/schedule.js'][107]++;
    if (exceptionsLen) {
      _$jscoverage['core/schedule.js'][108]++;
      for (var i = 0; (i < exceptionsLen); (i++)) {
        _$jscoverage['core/schedule.js'][109]++;
        var exceptStart = exceptions[i].start(dir, next);
        _$jscoverage['core/schedule.js'][110]++;
        if ((exceptStart && ((exceptStart.getTime() === next.getTime()) || compare(next, exceptStart)))) {
          _$jscoverage['core/schedule.js'][112]++;
          var end = ((dir === "next")? exceptions[i].end(dir, next): new Date((exceptStart.getTime() - 1000)));
          _$jscoverage['core/schedule.js'][113]++;
          result = (((! result) || compare(end, result))? end: result);
        }
}
    }
    _$jscoverage['core/schedule.js'][118]++;
    return result;
}
  _$jscoverage['core/schedule.js'][121]++;
  function tickSchedStarts(dir, schedStarts, next) {
    _$jscoverage['core/schedule.js'][122]++;
    for (var i = 0; (i < schedulesLen); (i++)) {
      _$jscoverage['core/schedule.js'][123]++;
      if ((schedStarts[i] && (schedStarts[i].getTime() === next.getTime()))) {
        _$jscoverage['core/schedule.js'][124]++;
        schedStarts[i] = schedules[i].start(dir, schedules[i].tick(dir, next));
      }
}
}
  _$jscoverage['core/schedule.js'][129]++;
  function calcSchedStarts(dir, schedStarts, next) {
    _$jscoverage['core/schedule.js'][130]++;
    var compare = compareFn(dir);
    _$jscoverage['core/schedule.js'][132]++;
    for (var i = 0; (i < schedulesLen); (i++)) {
      _$jscoverage['core/schedule.js'][133]++;
      if (((! schedStarts[i]) || compare(next, schedStarts[i]))) {
        _$jscoverage['core/schedule.js'][134]++;
        schedStarts[i] = schedules[i].start(dir, next);
      }
}
}
  _$jscoverage['core/schedule.js'][139]++;
  function compareFn(dir) {
    _$jscoverage['core/schedule.js'][140]++;
    return ((dir === "next")? (function (a, b) {
  _$jscoverage['core/schedule.js'][141]++;
  return (a > b);
}): (function (a, b) {
  _$jscoverage['core/schedule.js'][142]++;
  return (b > a);
}));
}
  _$jscoverage['core/schedule.js'][145]++;
  function indexFn(dir) {
    _$jscoverage['core/schedule.js'][146]++;
    return ((dir === "next")? later.array.minIndex: later.array.maxIndex);
}
  _$jscoverage['core/schedule.js'][150]++;
  return ({isValid: (function (d) {
  _$jscoverage['core/schedule.js'][153]++;
  return (getInstances("next", 1, d, d) !== undefined);
}), next: (function (count, startDate, endDate) {
  _$jscoverage['core/schedule.js'][157]++;
  return getInstances("next", (count || 1), startDate, endDate);
}), prev: (function (count, startDate, endDate) {
  _$jscoverage['core/schedule.js'][161]++;
  return getInstances("prev", (count || 1), startDate, endDate);
}), nextRange: (function (count, startDate, endDate) {
  _$jscoverage['core/schedule.js'][165]++;
  return getInstances("next", (count || 1), startDate, endDate, true);
}), prevRange: (function (count, startDate, endDate) {
  _$jscoverage['core/schedule.js'][169]++;
  return getInstances("prev", (count || 1), startDate, endDate, true);
})});
});
