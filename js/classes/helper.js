var Helper = function(editor) {
   with(editor){

    var methods = {
        getLibJSON : function(url){
            /**
             * Library information, include libs using ajax
             * @returns library object
             * @type {string}
             */
            var result,
            pathToLib = 'lib/json/',
            libFormat = '.json',
            errorMessage = "can't load Resurse becouse: ",
            libPath = pathToLib+url+libFormat;
            
            

            kh.ajax({
                url:libPath,
                dataType:'json',
                async:false,
                success:function(d){
                    result = d
                }
                });
            return result;
        },
        
        selectorEqualizing:function(selector){
            /**
             * converting string and DOM selector to jquery object
             * @type {jQuery Object}
             */
            var result = selector;
            if(!selector.jquery){
               /*
                * selector is no jQuery
                */
               result = kh(selector);
               if(selector.context){
                  /*
                   *no MessageElement
                   */
                  result = selector.content;
               }
               
               
            }
            return result
        },
        
        getLib:function(option){
            /**
             * @returns object basen on first argument,
             */
            option = option.toUpperCase();
            var result = window[option]
            if(_.isUndefined(result) && !(_.isFUnction(result))){
                console.error(result+" is undefined lib");
                return false;
            }
            else return window[option]();
        },
        
        localvarible : function (options){
            /**
             * function for creating varible shortcut/link,
             * first arguent(options) is object,
             * 
             */
            return _.bind(function (key,value){
                /**
                 * third argument equal to this object of function as secound argument
                 * @type {Object}
                 */
                
                var result = false;
                
                if(!value){
                    //geter
                    result = eval(this[key]);
                }
                else{
                    //seter
                    var varible = this[key];
                    eval(varible+" = value");
                    
                }
                return result
            },options);
        },
        
        getElementButtonObject: function(prop){
            /**
             * get Element butotn full object
             */
            var list = lib.elementButtonList,
                result = false;
            if(typeof prop == "string"){
                /*
                 *with name
                 */
                var name = prop;
                
                _(list).each(function(group, groupname){
                    _(group).each(function(element){
                        var name = element.name;
                        if(this == name){
                            result = element;
                            return;
                        }
                    },name);
                    if(!result)return;
                });
            }
            
            return result;
        },
         removeFromArray:function(array,from, to) {
            var rest = array.slice((to || from) + 1 || array.length);
            array.length = from < 0 ? array.length + from : from;
            return array.push.apply(array, rest);
         },
         
         getAllStyles:function (e,bool){
            if(typeof e == "string" || e.context == undefined) e = kh(e);
            var elementStylesArray = [],styleString;
            var ifIE = navigator.userAgent.indexOf("MSIE")==-1;                      //for IE
            //cssPropVal = (ifIE)?("getPropertyValue"):("getPropertyCSSValue");                    //for IE
                kh(e).each(function(k, elemenet){
                        var elemenet = e[k];
                        var styleArray = window.getComputedStyle, styleString="",  defaultElemnet = (kh("<"+elemenet.tagName+">").appendTo("body")[0]);;
                        var defaultStyles = styleArray(defaultElemnet), basedStyles = styleArray(elemenet);
                        var style = {};
                        kh(basedStyles).each(function(kk,ee){
                                var styleKey = basedStyles[kk],tmpstyleKey = defaultStyles[kk],styleValue,tmpstyleValue;
                                if(ifIE) {                                                                  //for IE               
                                        styleValue= basedStyles.getPropertyValue(styleKey);
                                        tmpstyleValue = defaultStyles.getPropertyValue(tmpstyleKey);
                                }
                                else{                                 
                                   
                                        styleValue= basedStyles.getPropertyCSSValue(styleKey).cssText;
                                        tmpstyleValue = defaultStyles.getPropertyCSSValue(tmpstyleKey).cssText;
                                }
                                if(styleValue != tmpstyleValue){
                                        styleString += styleKey+":"+styleValue+";";
                                }
                        });
                        kh(defaultElemnet).remove();
                        style.element = e[k].outerHTML;
                        style.css = styleString;
                        elementStylesArray.push(style);
         });
            return elementStylesArray;
        }
         
    }
    
    
    
   }     
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);    
}