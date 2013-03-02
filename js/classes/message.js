var Message = function(editor) {
   with(editor){

    var interactiveVars = new classes.helper.localvarible({
        draggableList:'lib.options.elementDragable.selector',
        soratableTd  :'lib.options.messagebox.selector.find("[kh-data-usage="+kh(lib.htmlStructures.generalElements.tableLayout).attr("kh-data-usage")+"] td[kh-data-usage=messagecolumn]")',
        messageDefaultElement: "lib.htmlStructures.dragDropElements.after",
    });
    
    var methods = {
            target:interactiveVars("messageDefaultElement"),
            parse:classes.parser.messagebox,
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
            },
            init:_.once(function(){
                var methods = this;
                
                
                methods.parse();
                methods.element.init();
                
                interactiveVars('soratableTd').sortable({
                    item: "div[kh-data-rel]",
                    helper: "none",
                    receive: function(event, ui){
                        /*
                         * adding element in message
                         *
                         */
                        
                        var element = {
                            after		: ui.item,
                            before		: interactiveVars("draggableList").find("[kh-data-rel="+ui.item.attr("kh-data-class")+"]")
                        }
                        element.type = element.before.attr("kh-data-rel");
                        
                        classes.elementButtons.restoreElementAfterDraging(element);
                        
                        var newMessage = methods.element.parse(element.type).content;
                        
                        element.after.replaceWith(newMessage);
                        
                        classes.helper.getElementButtonObject(element.type).after.callback();
                        
                        //newMessage.content.replaceAll(element.after);
                        element.after = newMessage;
                        
                        
                        
                    }
                });
                
               select.init();
            }),
            element : {
               init:_.once(function(){
                  var targets =  kh('');
                  targets.selector = "[kh-data ="+kh(classes.parser.messageElement("test")).attr("kh-data")+"]";
                  targets.context = document;
                  
                  this.targets = targets;
                  this.list    = [];
               }),
               parse:function(elementType){
                   var object  = false;
                   if(typeof elementType == "string"){
                       object = new MessageElement(editor,elementType);
                   }
                   
                   this.list.push(object);
                   this.targets.push(object.content[0]);
                   return object;
               }
               
            }
         }
    }
    
    
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);  
}     
      
