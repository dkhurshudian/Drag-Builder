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
             defaultOptions         :   classes.helper.getLib('options')
            ,htmlStructures         :   classes.helper.getLib('htmlStructure')
            ,elementButtonList      :   classes.helper.getLib('elementList')
        
        };
    
    
    /*
     *extending user seted options and default options
     *if user options no defined or no a object use default options
     */
    options = (typeof options == 'object' )?(_.extend(lib.defaultOptions,options)):(lib.defaultOptions);
    
    
    /**
     * define general elements/constants
     * @type {jQuery Object}
     */
    var
        generalElements = {
             messageBox         :   kh(options.messagebox.selector)
            ,draggElementBox    :   kh(options.elementDragable.selector)
            ,propertiesBox      :   kh(options.property.selector)
            ,accaardionSection  :   kh.parseHTML("<h3></h3>")[0]
    };                                                                   
    
    
    

    
    
    var methods = {
        /**
         * methods of class Editor
         * @type {functions}
         */
        
        /*
         *init fuction can be called ounce
         */
        init: _.once(function(){
            
            /**
            * Create Editor HTML
            * @type {Methods}
            */
            with(classes.parser){
                messagebox();
                elementbox();
                propertiesbox();
            }
        }),
        
        
        elements:{
            properties:{
                
            },
            'message':classes.message,
            
        }
    }
    
    
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);
    return{
        'status':'no active please call method init()'
    }
    
}

