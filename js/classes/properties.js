var Properties = function(editor) {
   with(editor){
      
      var methods ={
         /**
         * write class methods here
         */
         init:_.once(function(){
            classes.parser.propertiesbox();
            this.defaultStatus();
         }),
         target:function () {
            return classes.helper.selectorEqualizing(lib.options.propertyBox.selector);
         },
         getObject:classes.helper.getElementButtonObject,
         
         update:function(){
            /*
             * updating properties to selelected Element
             */
            var selected = classes.select.selected;
            var object = this.getObject(selected.getType());
            this.set(object);
         },
         set:function(type){
            /*
             * changing element in properies by first argument, 
             */
            var object = (typeof type=='object'?type:this.getObject(type)).properties;
            var header = this.target().children('[kh-data-properies="head"]');
            var content = this.target().children("div:last").children('[kh-data-properies="content"]');
            
            header.text(object.label);
            content.html(object.content);
            object.callback.call(object,this.target(),header,content);
         },
         defaultStatus:function(){
            /*
             * default seting
             */
            this.set({
               properties:{
                  label:"Message",
                  content:"<h5>No Properties</h5>",
                  callback:function(){}
               }})
         }
         
      }     
      _.each(methods,function(fn,name){
         this[name] = fn;
      },this);    
   }
}