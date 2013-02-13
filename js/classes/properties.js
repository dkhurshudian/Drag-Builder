var Properties = function() {
    var methods ={
        /**
         * write class methods here
         */
        defaultFunction:function(){
            
        }
    }
         
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);    
}