var Helper = function() {
    var methods = {
        getLib : function(url){
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
            return selector.context?selector:kh(selector);
        }
    }
    
    
    
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);
}