var Select = function(editor) {
    with(editor){
        var selected;
        var select = function(){
            
            };
        var methods ={
            /**
             * write class methods here
             */
        set:function(){
            /*
             * 
             */
        },
        get:function(){
            return selected;
        },
        disable:{
        
        },
        enable:{
            
        },
        init:_.once(function(){
            this.enable
            })
        }
        
        
        
    }
    _.each(methods,function(fn,name){
           this[name] = fn;
           },this);    
}