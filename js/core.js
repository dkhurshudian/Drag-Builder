var
kh = jQuery.noConflict(),

Editor = function(options){
    
    

    /**
     * defining Clasess
     */
    this.classes                     = new Object;
    this.classes.helper              = new Helper(this);
    
    /**
     * get resurses from Lib
     * @type {JSON}
     */
    
    this.lib                        = new Object ;
    this.lib.defaultOptions         = this.classes.helper.getLib('options');
    this.lib.htmlStructures         = this.classes.helper.getLib('htmlStructure');
    this.lib.elementButtonList      = this.classes.helper.getLib('elementLayout');
    this.lib.options                = false;
        
        
    
    
    this.classes.parser              = new Parse(this);
    this.classes.message             = new Message(this);
    this.classes.elementButtons      = new ElementButtons(this);
    this.classes.properties          = new Properties(this);
    this.classes.history             = new History(this);
    this.classes.select              = new Select(this);
    
    /*
     *extending user seted options and default options
     *if user options not defined or no a object, use default options
     */
    this.lib.options = (typeof options == 'object' )?(kh.extend(true,this.lib.defaultOptions,options)):(this.lib.defaultOptions);
    
    
    

    
    
    var methods = {
        
        /**
         * methods of class Editor
         * @type {functions}
         */
        
        
        init: _.once(function(){
            /*
            *init fuction can be called ounce
            */
            with(this.classes){
                
                this.message.init();
                this.elementButtons.init();
                this.properties.init();
            }
            
            
        }),
        target:function(){
            return this.classes.helper.selectorEqualizing('[kh-data-usage="messageBox"]')
             
        }
        
        
        
    }
    
    /*
     * ading classes to Editor Class
     */
    _.each(_.extend(methods,this.classes),function(fn,name){
        this[name] = fn;
    },this);
    
    /**
     * Colling Init function 
     * wil initilize newslatter
     */
    if(this.lib.options.autoInit){
        this.init();
        this.classes.message.row.popover.show('td')
    }
    
    
}