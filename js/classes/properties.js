var Properties = function(editor) {
   with(editor){
      
      var methods ={
         /**
         * write class methods here
         */
         defaultFunction:function(){
            
         },
         init:_.once(function(){
            classes.parser.propertiesbox()
         }),
         update:function(){
            //var selected = 
         },
         set:function(){
            
         }
         
         
      
      }     
      _.each(methods,function(fn,name){
         this[name] = fn;
      },this);    
   }
}