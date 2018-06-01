'use strict';

var XRegExp = require('xregexp');
//(?<start> classs*=s*["'].*?)(?<given>(?<![-_.wd])container\-fluid(?![-_.wd]))(?<end>.*?["'])/i
var date = XRegExp('(?<year>  [0-9]{4} ) -?  # year\n     (?<month> [0-9]{2} ) -?  # month\n     (?<day>   [0-9]{2} )     # day', 'x');

var date2 = XRegExp('\n     (?<start> classs*=s*["\'].*?)\n     (?<given1> <![-_.wd])\n     container-fluid\n     (?<given2> ![-_.wd])\n     (?<end>.*?["\'])\n     ', 'x');