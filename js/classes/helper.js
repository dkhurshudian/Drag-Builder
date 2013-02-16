var Helper = function() {
    var methods = {
        getLibJSON : function(url){
            /**
             * Library information
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
            option = option.toUpperCase();
            var result = window[option]
            if(_.isUndefined(result) && !(_.isFUnction(result))){
                console.error(result+" is undefined lib");
                return false;
            }
            else return window[option]();
        }
    }
    
    
    
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);
}