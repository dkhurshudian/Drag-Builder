var Parse = function(editor) {
   with(editor){

    /**                                                                 
            * paresing editor DOM structure                                    
            * @type {functions}                                                
            */                 
            var elementBox          = new classes.helper.localvarible({
                                                'selector'  : "lib.options.elementDragable.selector",
                                                'html'      : "lib.htmlStructures.generalElements.elementDragable",
                                                'callback'  : "lib.options.elementDragable.callback"
                                    });
            var messageBox          = new classes.helper.localvarible({
                                                'selector'              : "lib.options.messagebox.selector",
                                                'html'                  : "lib.htmlStructures.generalElements.messageBox",
                                                'callback'              : "lib.options.messagebox.callback",
                                                'tableLayout'           : "lib.htmlStructures.generalElements.tableLayout"
                                                
                                    });
            var propertiesBox       = new classes.helper.localvarible({
                                                'selector'  : "lib.options.propertyBox.selector",
                                                'html'      : "lib.htmlStructures.generalElements.properties",
                                                'callback'  : "lib.options.propertyBox.callback"
                                    });
            var dragElementBox      = new classes.helper.localvarible({
                                                'selector'          : "classes.helper.selectorEqualizing('[kh-data-usage=draggableList]')",
                                                'html'              : "lib.htmlStructures.generalElements.elementDragable",
                                                'accaardionSection' : "classes.helper.selectorEqualizing(lib.htmlStructures.generalElements.accaardionSection)",
                                                'accardionContent'  : "classes.helper.selectorEqualizing(lib.htmlStructures.generalElements.accardionContent)", 
                                                'layout'            : "lib.htmlStructures.dragDropElements.before",
                                                'elemenetButtonlis' : "lib.elementButtonList"
                                    });
            var messageElement      = new classes.helper.localvarible({
                        'layout'    : "lib.htmlStructures.dragDropElements.after"
                        });
            
            var methods = {
                        messagebox : _.once(function(){
                                    
                                    var parseTable = function(){
                                               /**
                                                * parsing HTML of table in emssage box,
                                                * html based on resulrses from lib
                                                */
                                                return messageBox('tableLayout');
                                    }
                                    
                                    /**
                                     * writing editor message block
                                     * @type {replacing}
                                     */     
                                    
                                    
                                    messageBox("selector",kh(messageBox('html')).replaceAll(messageBox('selector')));
                                    
                                    messageBox('selector').append(parseTable());
                                    
                                    messageBox('callback')();
                        }),                                                       
                        elementbox : function(){
                                    
                                    /** 
                                     * writing editor draggable elements parent
                                     * @type {Object}
                                     * @returns {Array} first item is elementBox, secound item is element-button array
                                     */
                                    var elementButtons = false,
                                        result = false;
                                    elementBox("selector",kh(elementBox('html')).replaceAll(kh(elementBox('selector'))));
                                    
                                    
                                    elementBox('callback')();
                                    
                                    elementButtons = this.dragElementsList();
                                    
                                    result = [elementBox("selector"),elementButtons]
                                    return result
                                    
                        },                                                        
                        propertiesbox : function(){
                                    
                            /**
                             * writing editor properties
                             * @type {Object    }
                             */
                                    propertiesBox("selector",kh(propertiesBox('html')).replaceAll(propertiesBox('selector')));
                                    
                                    propertiesBox('callback')();
                               
                        },
                        dragableElement:function (type){
                                    /**
                                     * Privite method for parsing one draggable element
                                     * @return {jQuery Object}
                                     */
                                    
                                    var result  = false,
                                        info    = typeof type == "string"?classes.helper.getElementButtonObject(type):type;
                                    
                                    
                                    if(info){
                                                
                                                result =  kh(dragElementBox('layout')).attr({
                                                            'kh-data-rel':info.name
                                                            }).find('[kh-data-usage]:first>div[kh-data-class]').attr({
                                                                        'kh-data-class':info.name
                                                                        }).end().
                                                                        find('span').text(info.before.label).end().
                                                                        find('[kh-data-class]>img').attr({
                                                                                    'src':info.before.imageUrl
                                                                        }).
                                                                        end();
                                    }
                                                                        
                                                            
                                    return result
                                                
                        },
                        dragElementsList : function(){
                                    
                                   
                                    
                                    var dragableElements = this.dragableElement,
                                        result = [];
                                    
                                    
                                    _.each(dragElementBox('elemenetButtonlis'),function(info,group){
                                               
                                                var accaardionSectionA = dragElementBox('accaardionSection').clone().text(group);
                                                
                                                var accardionContentA = dragElementBox('accardionContent').clone();
                                                
                                                elementBox("selector", elementBox('selector').append(accaardionSectionA,accardionContentA) );
                                                
                                                  
                                                _.each(info,function(element){
                                                            /**
                                                             * parse draggable element using privite function dragableElements,
                                                             * ofter parsing will apend drgable element document
                                                             */
                                                            var elementContent = dragableElements(element);
                                                            result.push(elementContent);
                                                            accardionContentA.append(elementContent);
                                                            
                                                });
                                                                                    
                                    });
                                    
                                    return result
                        },
                        messageElement:function(type){
                                    var result = false;
                                    var elementObject = typeof type == "string"?classes.helper.getElementButtonObject(type):type;
                                    
                                    var options = {
                                                type:elementObject.name,
                                                content: elementObject.after.content
                                    }
                                    
                                    result = messageElement("layout")(options);
                                    
                                    return result;
                                    
                        }
                        
            }
    
    
    
   }     
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);    
}