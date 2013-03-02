var MessageElement = function(editor,type) {
   with(editor){
        
      var methods ={
            content:kh(classes.parser.messageElement(type))
        }
         
        _.each(methods,function(fn,name){
            this[name] = fn;
        },this);    
   }
}
var proto = {
            remove:function(){
                /*
                 *remove element from message,
                 *can be used like prototype and method
                 */
                var element = (!arguments[0])?this:classes.helper.selectorEqualizing(arguments[0]);
            },
            clone:function(){
                /*
                 *clone message
                 */
                var element = (!arguments[0])?this:classes.helper.selectorEqualizing(arguments[0]);
            }
        }
        //_.extend(methods,proto);
        _.each(proto,function(fn,name){
            MessageElement.prototype[name] = fn;
            MessageElement[name] = MessageElement.prototype[name];
        },this);