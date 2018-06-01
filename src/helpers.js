const XRegExp = require('xregexp');
export function preg_replace_callback(pattern, callback, subject, limit){
	// Perform a regular expression search and replace using a callback
	// 
	// discuss at: http://geekfg.net/
	// +   original by: Francois-Guillaume Ribreau (http://fgribreau)
	// *     example 1: preg_replace_callback("/(\\@[^\\s,\\.]*)/ig",function(matches){return matches[0].toLowerCase();},'#FollowFriday @FGRibreau @GeekFG',1);
	// *     returns 1: "#FollowFriday @fgribreau @GeekFG"
	// *     example 2: preg_replace_callback("/(\\@[^\\s,\\.]*)/ig",function(matches){return matches[0].toLowerCase();},'#FollowFriday @FGRibreau @GeekFG');
	// *     returns 2: "#FollowFriday @fgribreau @geekfg"
	limit = !limit?-1:limit;
// console.log(pattern);
	var _flag = pattern.substr(pattern.lastIndexOf(pattern[0])+1),
		_pattern = pattern.substr(1,pattern.lastIndexOf(pattern[0])-1),
		reg = XRegExp(_pattern,_flag),
		rs = null,
		res = [],
		x = 0,
		ret = subject;
	if(limit === -1){
		var tmp = [];
		
		do{
      tmp = XRegExp.exec(subject, reg);

			if(tmp !== null){
        // console.log(subject,reg,tmp);
        // console.log("-----------------------------------------------")
				res.push(tmp);
			}
		}while(tmp !== null && _flag.indexOf('g') !== -1)
	}
	else{
    res.push(XRegExp.exec(subject, reg));
	}
	
	for(x = res.length-1; x > -1; x--){//explore match
		ret = ret.replace(res[x][0],callback(res[x]));
	}
	return ret;
}

export function preg_quote (str, delimiter) { // eslint-disable-line camelcase
    //  discuss at: http://locutus.io/php/preg_quote/
    // original by: booeyOH
    // improved by: Ates Goral (http://magnetiq.com)
    // improved by: Kevin van Zonneveld (http://kvz.io)
    // improved by: Brett Zamir (http://brett-zamir.me)
    // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    //   example 1: preg_quote("$40")
    //   returns 1: '\\$40'
    //   example 2: preg_quote("*RRRING* Hello?")
    //   returns 2: '\\*RRRING\\* Hello\\?'
    //   example 3: preg_quote("\\.+*?[^]$(){}=!<>|:")
    //   returns 3: '\\\\\\.\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:'
  
    return (str + '')
            .replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&')
  }


  export function stripslashes (str) {
    //       discuss at: http://locutus.io/php/stripslashes/
    //      original by: Kevin van Zonneveld (http://kvz.io)
    //      improved by: Ates Goral (http://magnetiq.com)
    //      improved by: marrtins
    //      improved by: rezna
    //         fixed by: Mick@el
    //      bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    //      bugfixed by: Brett Zamir (http://brett-zamir.me)
    //         input by: Rick Waldron
    //         input by: Brant Messenger (http://www.brantmessenger.com/)
    // reimplemented by: Brett Zamir (http://brett-zamir.me)
    //        example 1: stripslashes('Kevin\'s code')
    //        returns 1: "Kevin's code"
    //        example 2: stripslashes('Kevin\\\'s code')
    //        returns 2: "Kevin\'s code"
  
    return (str + '')
      .replace(/\\(.?)/g, function (s, n1) {
        switch (n1) {
          case '\\':
            return '\\'
          case '0':
            return '\u0000'
          case '':
            return ''
          default:
            return n1
        }
      })
  }