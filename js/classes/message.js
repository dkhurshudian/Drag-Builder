var Message = function(){
    var methods = {
        get:function(type){
            /**
             * get message Content
             * if type is true return content ready to send
             * or false content able to edit
             * @type {string}
             */
        },
        set:function(newsletter){
            /**
             * Installing already created newslatter
             * @type {Object}
             */
        }
        
    }
    
    
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this); 
}