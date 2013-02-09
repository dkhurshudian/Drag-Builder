Helper = function() {
    var methods ={
        getLib : function(url){
            /**
             * Library information
             * @type {string}
             */
            var
            pathToLib = '../../lib/json',
            libFormat = '.json',
            errorMessage = 'can"t load Resurse becouse: ',
            libPath = pathToLib+url+libFormat;
            
            return kh.parseJSON(kh.getJSON(libPath).error(function(msg){console.error(errorMessage+msg)}));
        }
    }
        
    _.each(methods,function(fn,name){
        this[name] = fn;
    });    
}