var Message = function(editor) {
   with(editor){

    var interactiveVars = new classes.helper.localvarible({
        draggableList:'lib.options.elementDragable.selector',
        soratableTd  :'lib.options.messagebox.selector.find("[kh-data-usage="+kh(lib.htmlStructures.generalElements.tableLayout).attr("kh-data-usage")+"] td[kh-data-usage=messagecolumn]")',
        messageDefaultElement: "lib.htmlStructures.dragDropElements.after",
    });
    
    var methods = {
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
            methods.parse()
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
                    element.type = element.before.attr("kh-data-rel")
                    
                    classes.elementButtons.restoreElementAfterDraging(element);
                    
                    var newMessage = new methods.messageElement(element.type);
                    
                    element.after.replaceWith(newMessage.content);
                    
                    classes.helper.getElementButtonObject(element.type).after.callback();
                    
                    //newMessage.content.replaceAll(element.after);
                    element.after = newMessage;
                    
                    methods.elements.push(element.after);
                    
                    
                }
            })
        }),
        messageElement :function(elementType){
            this.content = kh(classes.parser.messageElement(elementType));
            
        },
        elements:[]
        
    }
    
    
    
   }     
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);    
}