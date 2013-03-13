var MessageElement = function(editor,type) {
   with(editor){
      
      var methods ={
            content:kh(classes.parser.messageElement(type)),
            context:editor,
            init:function(){
               var element = this.content;
               element.on("click",'[kh-data-usage="secected_controlls"]>img[kh-data-class="deleteEl"]',function(){
                  /*
                   *deleting
                   */
                   var $this = kh(this).parents("[kh-data = 'messageElement']:first"),
                     element = classes.message.element.find($this);
                     classes.history.event.apply(this,arguments);
                     classes.message.element.remove(element);
                  
               }).on("click",'[kh-data-usage="secected_controlls"]>img[kh-data-class="clone"]',function(){
                  /*
                   *cloning
                   */
                  var $this = kh(this).parents("[kh-data = 'messageElement']:first");
                  classes.history.event.apply(this,arguments);
                  var clone = classes.message.element.clone($this);
                  clone[0].content.before(clone[1].content);
               })
            }
        }
         
        _.each(methods,function(fn,name){
            this[name] = fn;
        },this);
        
        this.init();
   }
}
var proto = {
            remove:function(){
                /*
                 *remove element from message,
                 *can be used like prototype and method
                 */
                //var element = 
            },
            clone:function(){
                /*
                 *clone message
                 */
                var element = (!arguments[0])?this:classes.helper.selectorEqualizing(arguments[0]);
            },
            getType:function(){
               var element = this.context.classes.helper.selectorEqualizing(this.content)
               return element.attr("kh-data-element-type");
            }
        }
        //_.extend(methods,proto);
        _.each(proto,function(fn,name){
            MessageElement.prototype[name] = fn;
            MessageElement[name] = MessageElement.prototype[name];
            
        },this);