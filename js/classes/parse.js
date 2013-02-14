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
                                                'selector'  : helper.selectorEqualizing(options.messagebox),
                                                'html'      : lib.htmlStructures.generalElements.messageBox
                                    };
                                    
                            /**
                             * writing editor message block
                             * @type {replacing}
                             */
                                    messageBox.selector.wrap(messageBox.html);
                                    //generalElements.messageBox.wrap();             
                             
                        },                                                       
                        elementbox : function(){
                                    var elementBox = {
                                                'selector'  : helper.selectorEqualizing(options.elementDragable),
                                                'html'      : lib.htmlStructures.generalElements.elementDragable
                                    } 
                                    /** 
                                     * writing editor draggable elements parent
                                     * @type {Object}
                                     */
                                    elementBox.selector.wrap(elementBox.html);   
                            
                        },                                                        
                        propertiesbox : function(){
                                    var propertiesBox = {
                                                'selector'  : options.propertyBox,
                                                'html'      : lib.htmlStructures.generalElements.propertyBox
                                    };
                            /**
                             * writing editor properties
                             * @type {Object    }
                             */
                                    propertiesBox.selector.wrap(propertiesBox.html);
                               
                        },
                        dragElementsList : function(){
                                    
                                    var dragElementBox = {
                                                'selector'  : helper.selectorEqualizing(options.elementDragable),
                                                'html'      : lib.htmlStructures.generalElements,
                                                'accardion' : lib.htmlStructures.generalElements.accaardionSection,
                                                'layout'    : lib.htmlStructures.dragDropElements.before
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
                                                            }).
                                                            siblings('span').text(info.before.label).
                                                            siblings('[kh-data-class]').children("img").attr({
                                                                        'src':info.before.inageUrl
                                                            }).
                                                            end()
                                    }
                                    
                                    _.each(dragElementBox,function(info,group){
                                                accaardionSection = dragElementBox.accardion;
                                                
                                                accaardionSection.innerText = group;
                                                
                                                _.each(info,function(element){
                                                            
                                                            var elementContent = dragableElements(element);
                                                            kh(accaardionSection).append(elementContent);
                                                });
                                                
                                                dragElementBox.selector.append(accaardionSection);                                    
                                        
                                        
                                                accaardionSection.innerText = '';
                                    });                                                 
                            
                        }
            }
            _.each(methods,function(fn,name){
                        this[name] = fn;
            },this); 
}
        