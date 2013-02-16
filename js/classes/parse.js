/**                                                                 
     * paresing editor DOM structure                                    
     * @type {functions}                                                
     */
Parse = function() {
            /*var
                        messageBox ={
                                    'selector'  : options.messagebox,
                                    'html'      : lib.editorElementsGeneral.messagebox
                        },
                        elementBox = {
                                    'selector'  : options.elementDragable,
                                    'html'      : lib.editorElementsGeneral.elementDragable
                        },
                        propertiesBox = {
                                    'selector'  : options.property,
                                    'html'      : lib.editorElementsGeneral.messapropertiesgebox
                        },
                        dragElementBox = {
                                    'selector'  : draggElementBox.append,
                                    'html'      : elementButtonList,
                                    'accardion' : generalElements.accaardionSection,
                                    'layout'    : lib.htmlStructures.dragDropElements.before
                        }            
*/
            var methods = {
                        messagebox : function(){
                                    
                                    var messageBox ={
                                                'selector'  : classes.helper.selectorEqualizing(lib.options.messagebox.selector),
                                                'html'      : lib.htmlStructures.generalElements.messageBox,
                                                'callback'  : lib.options.messagebox.callback
                                                
                                    };
                                    
                            /**
                             * writing editor message block
                             * @type {replacing}
                             */
                                    messageBox.selector.replaceWith(messageBox.html);
                                    
                                    //generalElements.messageBox.replaceWith();             
                                    messageBox.callback();
                        },                                                       
                        elementbox : function(){
                                    var elementBox = {
                                                'selector'  : classes.helper.selectorEqualizing(lib.options.elementDragable.selector),
                                                'html'      : lib.htmlStructures.generalElements.elementDragable,
                                                'callback'  : lib.options.elementDragable.callback
                                    } 
                                    /** 
                                     * writing editor draggable elements parent
                                     * @type {Object}
                                     */
                                    elementBox.selector.replaceWith(elementBox.html);   
                                    classes.parser.dragElementsList();
                                    elementBox.callback();
                                    
                        },                                                        
                        propertiesbox : function(){
                                    var propertiesBox = {
                                                'selector'  : classes.helper.selectorEqualizing(lib.options.propertyBox.selector),
                                                'html'      : lib.htmlStructures.generalElements.properties,
                                                'callback'  : lib.options.propertyBox.callback
                                    };
                            /**
                             * writing editor properties
                             * @type {Object    }
                             */
                                    propertiesBox.selector.replaceWith(propertiesBox.html);
                                    propertiesBox.callback();
                               
                        },
                        dragElementsList : function(){
                                    
                                    var dragElementBox = {
                                                'selector'          : classes.helper.selectorEqualizing('[kh-data-usage=draggableList]'),
                                                'html'              : lib.htmlStructures.generalElements.elementDragable,
                                                'accaardionSection' : classes.helper.selectorEqualizing(lib.htmlStructures.generalElements.accaardionSection),
                                                'accardionContent'  : classes.helper.selectorEqualizing(lib.htmlStructures.generalElements.accardionContent), 
                                                'layout'            : lib.htmlStructures.dragDropElements.before,
                                                'elemenetButtonlis' : lib.elementButtonList
                                    };
                                    
                                    
                                    var dragableElements = function(info){
                                    /**
                                     * Privite method for parsing draggable element
                                     * @type {Object}
                                     */
                        
                                                return kh(dragElementBox.layout).attr({
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
                                    with(dragElementBox){
                                                _.each(elemenetButtonlis,function(info,group){
                                                           
                                                            accaardionSectionA = accaardionSection.clone().text(group);
                                                            accardionContentA = accardionContent.clone();
                                                            selector.append(accaardionSectionA,accardionContentA);  
                                                            _.each(info,function(element){       
                                                                        var elementContent = dragableElements(element);
                                                                        accardionContentA.append(elementContent);
                                                            });
                                                                                              
                                                            
                                                            
                                                            //accaardionSection.innerHTML = '';        
                                                });
                                    }
                                    
                        }
                        
            }
            _.each(methods,function(fn,name){
                        this[name] = fn;
            },this); 
}
        