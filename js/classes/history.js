var History = function(editor) {
   with(editor){
   var methods = {
        go:function(index){
            /**
             * get step by index, indexing start at 0
             * @argument index if undefined will go back 
             */
            var message = this.steps[index].message;
            
            classes.message.set(message);
            this.index = index;
        },
        back:function(){
            var index = this.index-1;
            
            index < 0 ?false:this.go(index);
        },
        forward:function(){
            var step = false;
            /**
             * @returns false if has no forward step, or forward is succesfull will return correct step
             */
            step = this.index  ==  this.status()[1]-1?false:this.index+1;
            
            if(step){
               this.go(step);
            }
            return step;
        },
        index:0,
        status:function(){
            /**
             * can get status of message
             * @returns {Array}, first item in array correct index of message, second item is lenght of steps
             */
            return [
               this.index,
               this.steps.length
               
            ]
        },
        init:_.once(function(){
            //console.log("History init");
            var selector = "[kh-data-class="+kh(lib.htmlStructures.dragDropElements.selectControlls).attr("kh-data-class")+"]";
            //target().on('click',selector,this.event);
            }),
        add:function(){
            /**
             * will add step, better call. shuld call awter editing message
             * @type {Object}
             */
            var message  = classes.message.get('history');
            var step = {
               'message':message
            }
            var start = this.index+1;
            var end = this.status()[1]-1;
            
            start <= end?classes.helper.removeFromArray(this.steps,start,end):false;
            
            var index = this.steps.push(step)-1;
            this.index = index;
        },
        
         event:function(){
            var result = false,
                type   = false;
            //console.log("EventChange",arguments,this);
            
            //if(arguments[0].type == 'sortbeforestop') type = 'sort';
            
            
            
            switch (type) {
               case "sort":$(function(){
                  
                  });
               break;
               case "element":$(function(){
                  
                  });
               break;
               case "row":$(function(){
                  
                  }); 
               break;
            }
           
            
            
         classes.history.add(arguments)
                  
         },
        steps:[]
        
    }
    
    
    
    
   }     
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);    
}