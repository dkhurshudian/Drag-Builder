/**                                                                 
     * paresing editor DOM structure                                    
     * @type {functions}                                                
     */
Parse = function() {
            
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
                                    return      '<div kh-data-rel="'+info.name+'">'+
                                                            '<div kh-data-usage="accord_block_sortable">'+
                                                                        '<div class="'+info.name+'">'+
                                                                                    '<img src="'+info.before.imageUrl+'">'+
                                                                        '</div>'+
                                                                        '<span>'+info.before.label+'</span>'+
                                                            '</div>'+						
                                                '</div>'
                                                ;
                                                
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
            }); 
}
        