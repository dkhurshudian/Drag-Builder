/**                                                                 
     * paresing editor DOM structure                                    
     * @type {functions}                                                
     */
var Parse = function() {
            
            var methods = {
                        messagebox : function(){                                      
                            /**
                             * writing editor message block
                             * @type {replacing}
                             */
                                    generalElements.messageBox.wrap(lib.editorElementsGeneral.messagebox);             
                             
                        },                                                       
                        elementbox : function(){                                      
                                    /**
                                     * writing editor draggable elements parent
                                     * @type {Object}
                                     */
                                    generalElements.draggElementBox.wrap(lib.editorElementsGeneral.elementDragable);   
                            
                        },                                                        
                        propertiesbox : function(){                                   
                            /**
                             * writing editor properties
                             * @type {Object    }
                             */
                                    generalElements.propertiesBox.wrap(lib.editorElementsGeneral.messapropertiesgebox);
                               
                        },
                        dragElementsList : function(){
                                    
                                    var dragableElements = function(info){
                                    /**
                                     * Privite method for parsing draggable element
                                     * @type {Object}
                                     */
                                    return kh(lib.htmlStructures.dragDropElements.before).attr({
                                                'kh-data-rel':info.name
                                                }).find('[kh-data-usage]:first>div[kh-data-class]').attr({
                                                            'kh-data-class':info.name
                                                            }).
                                                            siblings('span').text(info.before.label).
                                                            siblings('[kh-data-class]').children("img").attr({
                                                                        'src':info.before.inageUrl
                                                            }).
                                                            end()
                                    }
                                    
                                    _.each(lib.elementList,function(info,group){
                                                accaardionSection = generalElements.accaardionSection;
                                                
                                                accaardionSection.innerText = group;
                                                
                                                _.each(info,function(element){
                                                            
                                                            var elementContent = dragableElements(element);
                                                            kh(accaardionSection).append(elementContent);
                                                });
                                                
                                                draggElementBox.append(accaardionSection);                                    
                                        
                                        
                                                accaardionSection.innerText = '';
                                    });                                                 
                            
                        }
            }
            _.each(methods,function(fn,name){
                        this[name] = fn;
            },this); 
}
        