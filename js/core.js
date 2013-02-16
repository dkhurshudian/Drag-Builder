var
kh = jQuery.noConflict(),

Editor = function(options){
    
    
    
    /**
     * defining Clasess
     */
    
    //var
    classes = {
            helper      : new Helper(),
            parser      : new Parse(),
            message     : new Message(),
            properties  : new Properties()
    }
    
        
    ;
    
    /**
     * get resurses from Lib
     * @type {JSON}
     */
    //var
        lib = {
             defaultOptions         :   classes.helper.getLib('options')
            ,htmlStructures         :   classes.helper.getLib('htmlStructure')
            ,elementButtonList      :   classes.helper.getLib('elementLayout')
        
        };
    
    
    /*
     *extending user seted options and default options
     *if user options no defined or no a object use default options
     */
    lib.options = (typeof options == 'object' )?(kh.extend(true,lib.defaultOptions,options)):(lib.defaultOptions);
                                                              
    
    
    

    
    
    var methods = {
        
        /**
         * methods of class Editor
         * @type {functions}
         */
        
        /*
         *init fuction can be called ounce
         */
        init: function(){
            
            /**
            * Create Editor HTML
            * @type {Methods}
            */
            with(classes.parser){
                messagebox();
                elementbox();
                propertiesbox();
            }
        },
        
        
        elements:{
            properties:{
                
            },
            'message':classes.message,
            
        }
    }
    
    
    _.each(_.extend(methods,classes),function(fn,name){
        this[name] = fn;
    },this);
    
    
}

