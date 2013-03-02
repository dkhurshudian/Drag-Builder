var Select = function(editor) {
    with(editor){
        var selectVar = new classes.helper.localvarible({
            elements:'classes.message.element.targets',
            target  :'classes.message.target'
        });
    
        var selecting = function(){
            /*
             *call once ins electing
             */
            var $this = kh(this);
            var element = {};
            element.type    = $this.attr("kh-data-element-type");
            element.object  = classes.helper.getElementButtonObject(element.type)
            
            $this.attr("kh-data-selecting","true");
            
            $this.addClass(element.object.selecting.addClass);
            /*
             * palce for callback
             */
            element.object.selecting.callback.call($this,arguments,element);
            };
           
            
        var methods ={
            /**
             * write class methods here
             */
            
             
            
            disable:function(){
                this.status = false;
                selectVar('elements').die(this.event)
            },
            enable:function(){
                this.status = true;
                selectVar('elements').live(this.event)
            },
            status:false,
            init:_.once(function(){
                this.enable();
            }),
            
            event:{
                click:function(){
                    methods.selected = this;
                    
                    if(!kh(this).is("[kh-data-selecting]")){
                        /*
                         * once 
                         */
                        selecting.apply(this,arguments);
                    }
                    
                }
            }
        }
            
        /**
         * setter geter propering
         * @type {Object}
         */
        Object.defineProperty(this,"selected",
            {
                get:function(){
                    return selectVar('elements').filter("[kh-data-selecting=true]");
                },
                set:function(selected){
                    var element = false;
                    if(!selectVar('elements').find(selected).size()){
                        element  = classes.helper.selectorEqualizing(selected);
                        element.trigger("click");
                    }
                    console.assert(element,"Unable to selct element, argument is incorrect");
                    return element;
                }
            });
        
        
    }
    _.each(methods,function(fn,name){
           this[name] = fn;
           },this);    
}