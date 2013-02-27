var
kh = jQuery.noConflict(),

Editor = function(options){
    
    
    
    /**
     * defining Clasess
     */
    this.classes                     = new Object;
    this.classes.helper              = new Helper(this);
    this.classes.parser              = new Parse(this);
    this.classes.message             = new Message(this);
    this.classes.elementButtons      = new ElementButtons(this);
    this.classes.properties          = new Properties(this);
    this.classes.history             = new History(this);


    
    
    
    
    
    /**
     * get resurses from Lib
     * @type {JSON}
     */
    //var
        this.lib = {
            defaultOptions         :   this.classes.helper.getLib('options'),
            htmlStructures         :   this.classes.helper.getLib('htmlStructure'),
            elementButtonList      :   this.classes.helper.getLib('elementLayout'),
            options                :   false
        
        };
    
    
    /*
     *extending user seted options and default options
     *if user options no defined or no a object use default options
     */
    this.lib.options = (typeof options == 'object' )?(kh.extend(true,this.lib.defaultOptions,options)):(this.lib.defaultOptions);
    
    
    

    
    
    var methods = {
        
        /**
         * methods of class Editor
         * @type {functions}
         */
        
        /*
         *init fuction can be called ounce
         */
        init: _.once(function(){
            with(this.classes){
                
                this.message.init();
                this.elementButtons.init();
                this.properties.init();
                
                
            }
            
            
        }),
        
        
        elements:{
            'properties':this.classes.properties,
            'message':this.classes.message,
            'elementButtons':this.classes.elementButtons
            
        }
    }
    
    
    _.each(_.extend(methods,this.classes),function(fn,name){
        this[name] = fn;
    },this);
    
    /**
     * Colling Init function 
     * wil initilize newslatter
     */
    if(this.lib.options.autoInit){
        this.init();
        
    }
    
    
}

