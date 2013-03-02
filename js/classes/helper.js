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
            return selector.context?selector:kh(selector);
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
        }
    }
    
    
    
   }     
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);    
}