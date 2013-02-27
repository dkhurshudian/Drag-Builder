var ElementButtons = function(editor) {
   with(editor){
   var interactiveVars = new classes.helper.localvarible({
        draggableList:'lib.options.elementDragable.selector',
        soratableTd  :'lib.options.messagebox.selector.find("[kh-data-usage="+kh(lib.htmlStructures.generalElements.tableLayout).attr("kh-data-usage")+"] td[kh-data-usage=messagecolumn]")',
        messageDefaultElement: "lib.htmlStructures.dragDropElements.after"
    });
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
        },
        restoreElementAfterDraging:function(element){
            /**
             * restore element after draging to message
             * 
             */
            //"test");
            var type = element.type,
                newContent = classes.parser.dragableElement(type);
                
            element.before.replaceWith(newContent);
            
            this.sortable();
    
            
        },
        sortable:function(method){
            var elementButtons = kh(interactiveVars('draggableList')).find("[kh-data-usage=accord_block_sortable]"),
                result = false;
            if(!method){
                    result = elementButtons.sortable({
                        helper: "clone",
                        connectWith:  interactiveVars('soratableTd')
                    });
            }
            else if(method == "disable"){
                result = elementButtons.sortable("disable");
            }
            else if(method == "disaenableble"){
                result = elementButtons.sortable("enable");
            }
            return result;
        },
        disable:function(){
            return this.sortable("disable");
        },
        enable:function(){
            return this.sortable("enable");
        },
        init:_.once(function(){
            
            this.elements = this.elements.concat(classes.parser.elementbox()[1]);
            
            interactiveVars('draggableList').accordion();
            this.sortable();
            
        }),
        
        elements:[]
        
        
    }
    
    
    
    
   }     
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);    
}