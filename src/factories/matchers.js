    
    //
    // matcher factories
    var ESC = /([\-\.\*\+\?\^\$\{\}\(\)\|\[\]\/\\])/g,
    
        byLength = function(a, b) { return a.length - b.length },
        
        isRegExp = function(s, id) {
            return (
                is_string(id) && is_string(s) && id.length &&
                id.length <= s.length && 
                id == s.substr(0, id.length)
            );
        },
        
        getRegexp = function(r, rid)  {
            if ( !r || is_number(r) ) return r;
            
            var l = (rid) ? (rid.length||0) : 0;
            
            if ( l && rid == r.substr(0, l) /*isRegExp(r, rid)*/ )
                return new RegExp("^(" + r.substr(l) + ")");
            
            else
                return r;
        },
        
        getCombinedRegexp = function(tokens)  {
            for (var i=0, l=tokens.length; i<l; i++) tokens[i] = tokens[i].replace(ESC, '\\$1');
            return new RegExp("^((" + tokens.sort( byLength ).join( ")|(" ) + "))\\b");
        },
        
        SimpleMatcher = function(type, r, key) {
            
            // get a fast customized matcher for < r >
            
            // manipulate the codemirror stream directly for speed,
            // if codemirror code for stream matching changes,
            // only this part of the code needs to be adapted
            var strlen;
            key = key || 0;
            
            //this.r = r;
            //this.key = key || 0;
            this.type = type || T_STRMATCHER;
            
            if (T_CHARMATCHER == this.type)
            {
                this.match = function(stream, eat) {
                    
                    // manipulate the codemirror stream directly for speed
                    eat = (false !== eat);
                    var casedr = r; //(ignoreCase) ? r.toLowerCase() : r;
                    var casedch = ch = stream.string.charAt(stream.pos) || '';
                    //var casedch = ch; //(ignoreCase) ? sch.toLowerCase() : ch;
                    if (casedr == casedch) 
                    {
                        if (eat) stream.pos += 1;
                        return { key: key, val: ch };
                    }
                    return false;
                };
            }
            else if (T_STRMATCHER == this.type)
            {
                strlen = r.length;
                this.match = function(stream, eat) {
                    
                    // manipulate the codemirror stream directly for speed
                    eat = (false !== eat);
                    var casedr = r; //(ignoreCase) ? r.toLowerCase() : r;
                    var casedstr = str = stream.string.substr(stream.pos, strlen);
                    //var casedstr = str; //(ignoreCase) ? str.toLowerCase() : str;
                    if (casedr == casedstr) 
                    {
                        if (eat) stream.pos += strlen;
                        return { key: key, val: str };
                    }
                    return false;
                };
            }
            else if (T_REGEXMATCHER == this.type)
            {
                this.match = function(stream, eat) {
                    
                    // manipulate the codemirror stream directly for speed
                    eat = (false !== eat);
                    var match = stream.string.slice(stream.pos).match(r);
                    if (!match || match.index > 0) return false;
                    if (eat) stream.pos += match[0].length;
                    return { key: key, val: match };
                };
            }
            else if (T_NULLMATCHER == this.type)
            {
                this.match = function(stream, eat) { 
                    if (false !== eat) stream.skipToEnd();
                    return { key: key, val: "" };
                };
            }
            else
            {
                // unknown type
                this.match = function(stream, eat) { return false; };
            }
        },
        
        CompositeMatcher = function(matchers, useOwnKey) {
            
            var l = matchers.length;
            
            useOwnKey = (false!==useOwnKey);
            
            //this.matchers = matchers;
            this.type = T_COMPOSITEMATCHER;
            
            if (0 >= l)
            {
                this.match = function(stream, eat) { return false; };
            }
            else if (1 == l)
            {
                // if only one matcher, use it directly
                this.match = matchers[0].match;
            }
            else
            {
                // else check all the matchers one-by-one
                if (useOwnKey)
                {
                    this.match = function(stream, eat) {
                        var i, m;
                        for (i=0; i<l; i++)
                        {
                            // each one is a custom matcher in its own
                            m = matchers[i].match(stream, eat);
                            if (m) return { key: i, val: m.val };
                        }
                        return false;
                    };
                }
                else
                {
                    this.match = function(stream, eat) {
                        var i, m;
                        for (i=0; i<l; i++)
                        {
                            // each one is a custom matcher in its own
                            m = matchers[i].match(stream, eat);
                            if (m) return m;
                        }
                        return false;
                    };
                }
            }
        },
        
        BlockMatcher = function(start, end) {
            
            var token,
                startMatcher = new CompositeMatcher(start, false),
                endMatcher
            ;
            
            this.type = T_BLOCKMATCHER;
            
            this.match = function(stream, eat) {
                
                token = startMatcher.match(stream, eat);
                
                if (token)
                {
                    endMatcher = end[ token.key ];
                    
                    // regex given, get the matched group for the ending of this block
                    if ( is_number(endMatcher) )
                    {
                        // the regex is wrapped in an additional group, 
                        // add 1 to the requested regex group transparently
                        endMatcher = getSimpleMatcher( token.val[ endMatcher+1 ] );
                    }
                    
                    return endMatcher;
                }
                
                return false;
            };
        },
        
        getSimpleMatcher = function(r, key) {
            // get a fast customized matcher for < r >
            
            // manipulate the codemirror stream directly for speed,
            // if codemirror code for stream matching changes,
            // only this part of the code needs to be adapted
            
            key = key || 0;
            
            if (is_number(r))  
            {
                return r;
            }
            else if (is_char(r))
            {
                return new SimpleMatcher(T_CHARMATCHER, r, key);
            }
            else if (is_string(r))
            {
                return new SimpleMatcher(T_STRMATCHER, r, key);
            }
            else if (is_regex(r))
            {
                return new SimpleMatcher(T_REGEXMATCHER, r, key);
            }
            else if (null == r)
            {
                return new SimpleMatcher(T_NULLMATCHER, r, key);
            }
            else
            {
                return r;
            }
            
        },
        
        getCompositeMatcher = function(tokens, RegExpID, isRegExpGroup) {
            
            var tmp, i, l, l2, array_of_arrays = false, has_regexs = false;
            
            tmp = make_array(tokens);
            l = tmp.length;
            l2 = (l>>1) + 1;
            
            if (isRegExpGroup)
            {   
                // check if tokens can be combined in one regular expression
                // if they do not contain sub-arrays or regular expressions
                for (i=0; i<=l2; i++)
                {
                    if ( is_array( tmp[i] ) || is_array( tmp[l-1-i] ) ) 
                    {
                        array_of_arrays = true;
                        break;
                    }
                    else if ( isRegExp( tmp[i], RegExpID ) || isRegExp( tmp[l-1-i], RegExpID ) )
                    {
                        has_regexs = true;
                        break;
                    }
                }
            }
            
            if (isRegExpGroup && !(array_of_arrays || has_regexs))
            {   
                return new CompositeMatcher( [ getSimpleMatcher( getCombinedRegexp( tmp ) ) ] );
            }
            else
            {
                for (i=0; i<l; i++)
                {
                    if ( is_array( tmp[i] ) )
                        tmp[i] = getCompositeMatcher( tmp[i], RegExpID, isRegExpGroup );
                    else
                        tmp[i] = getSimpleMatcher( getRegexp( tmp[i], RegExpID ), i );
                }
                
                return new CompositeMatcher( tmp );
            }
        },
        
        getBlockMatcher = function(tokens, RegExpID) {
            var tmp, i, l, start, end, t1, t2;
            
            // build start/end mappings
            start=[]; end=[];
            tmp = make_array(tokens);
            if ( !is_array(tmp[0]) ) tmp = [tmp]; // array of arrays
            for (i=0, l=tmp.length; i<l; i++)
            {
                t1 = getSimpleMatcher( getRegexp( tmp[i][0], RegExpID ), i );
                t2 = (tmp[i].length>1) ? getSimpleMatcher( getRegexp( tmp[i][1], RegExpID ), i ) : t1;
                start.push( t1 );
                end.push( t2 );
            }
            return new BlockMatcher(start, end);
        }
    ;
