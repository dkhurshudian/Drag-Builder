var History = function(editor) {
   with(editor){
   var methods = {
        go:function(index){
            /**
             * get step by index, indexing start at 0
             * @argument index if undefined will go back 
             */
            
        },
        back:function(){
            this.go();
        },
        forward:function(){
            var step = false;
            /**
             * @returns false if has no forward step, or forward is succesfull will return correct step
             */
            
            return step;
        },
        status:function(){
            /**
             * can get status of message
             * @returns {Array}, first item in array correct index of message, second item is lenght of steps
             */
        },
        init:_.once(function(){
            
            }),
        add:function(){
            /**
             * will add step, better call. shuld call awter editing message
             * @type {Object}
             */
        },
        steps:[]
        
    }
    
    
    
    
   }     
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);    
}