var
kh = jQuery.noConflict(),

Editor = function(options){
    
    
    
    /**
     * defining classes
     */       
    var
        classes = {
            parser      : new Parse()
           ,message     : new Message()
           ,properties  : new Properties()
           ,helper      : new Helper()
        }
    ;
    
    /**
     * get resurses from Lib
     * @type {JSON}
     */
    var
        lib = {
             defaultOptions         :   helper.getLib('options')
            ,editorElementsGeneral  :   helper.getLib('editorElementsGeneral')
            ,elementList            :   helper.getLib('elementList')
        
        };
    
    
    /*
     *extending user seted uptions and default options
     *if user options no defined or no a object use default options
     */
    options = (typeof options == 'object' )?(kh.extend(lib.defaultOptions,options)):(lib.defaultOptions);
    
    
    /**
     * define general elements/constants
     * @type {jQuery Object}
     */
    var
        generalElements = {
             messageBox         :   kh(options.messagebox)
            ,draggElementBox    :   kh(options.elementDragable)
            ,propertiesBox      :   kh(options.messapropertiesgebox)
            ,accaardionSection  :   kh.parseHTML("<h3></h3>")[0]
    };                                                                   
    
    
    
    
    
    var initialize = function(){
            
            /**
            * Create Editor HTML
            * @type {Methods}
            */
            with(classes.parser){
                messagebox();
                elementbox();
                propertiesbox();
            }
        }
    
    
    
    var methods = {
        /**
         * methods of class Editor
         * @type {functions}
         */
        init:finitialize,
        
        setMessage:function(newsletter){
            /**
             * Installing already created newslatter
             * @type {Object}
             */
        },
        getMessage:function(type){
            
        },
        
        elements:{
            properties:{
                
            },
            'message':message,
            
        }
    }
    
    
    _.each(methods,function(fn,name){
        this[name] = fn;
    });
    
}

