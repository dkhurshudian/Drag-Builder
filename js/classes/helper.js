var Helper = function() {
    var methods = {
        getLib : function(url){
            /**
             * Library information
             * @type {string}
             */
            var 
            pathToLib = 'lib/json/',
            libFormat = '.json',
            errorMessage = 'can"t load Resurse becouse: ',
            libPath = pathToLib+url+libFormat;
            
            var result = kh.ajax({
                url:libPath,
                async:true,
                success:console.log
            })
            //return kh.getJSON(libPath).error(function(msg){console.error(errorMessage+msg)});
            return result;
        }
    }
    
    
    
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);
}