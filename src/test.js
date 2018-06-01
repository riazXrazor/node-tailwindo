const XRegExp = require('xregexp');
//(?<start> classs*=s*["'].*?)(?<given>(?<![-_.wd])container\-fluid(?![-_.wd]))(?<end>.*?["'])/i
const date = XRegExp(
    `(?<year>  [0-9]{4} ) -?  # year
     (?<month> [0-9]{2} ) -?  # month
     (?<day>   [0-9]{2} )     # day`, 'x');

     const date2 = XRegExp(`
     (?<start> classs*=s*["'].*?)
     (?<given1> <![-_.wd])
     container\-fluid
     (?<given2> ![-_.wd])
     (?<end>.*?["'])
     `, 'x');