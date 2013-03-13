var Select = function(editor) {
    with(editor){
        var selectVar = new classes.helper.localvarible({
            elements:'classes.message.element.targets',
            target  :'classes.message.target'
        });
    
        var selecting = function(){
            /*
             *call once in selecting
             */
            var $this = classes.message.element.find(this);
            
            var element = {};
            element.type    = $this.getType();
            element.object  = classes.helper.getElementButtonObject(element.type);
            
            $this.select();
            /*
             * palce for callback
             */
            element.object.selecting.callback.call($this,arguments,element);
            classes.properties.update();
            };
           
            
        var methods ={
            /**
             * write class methods here
             */
            disable:function(){
                /*
                 * Disableing message selectable
                 */
                this.status = false;
                selectVar('elements').find('[kh-data-usage="sloyformessageElement"]').die(this.event)
            },
            enable:function(){
                /*
                 *enableing message selectable
                 */
                this.status = true;
                selectVar('elements').find('[kh-data-usage="sloyformessageElement"]').live(this.event)
            },
            
            status:false,
            
            init:_.once(function(){
                MessageElement.prototype.select = function(){
                    /*
                     *add select options to message Element
                     */
                    this.content.attr("kh-data-selecting","true").trigger("select").addClass(this.context.classes.helper.getElementButtonObject(this.getType()));
                }
                MessageElement.prototype.unselect = function(){
                    /*
                     *add unselect options to message Element
                     */
                    var selected = this.content;
                    var type = this.getType();
                    var object = this.context.classes.helper.getElementButtonObject(type);
                    selected.removeAttr("kh-data-selecting").trigger("unselect").removeClass(object.selecting.addClass);
                }
                this.enable();
            }),
            unselecting:function(element){
                /*
                 * unselecting selected element in message, if variable element is not defined will unselect selected element,
                 */
                var selected = classes.message.element.find(element?element:classes.select.selected),
                    object   = classes.helper.getElementButtonObject(selected.getType());
                selected.unselect();
                classes.properties.defaultStatus();
            },
            event:{
                click:function(){
                    var element = kh(this).parents("[kh-data = 'messageElement']:first");
                    if(classes.select.selected && classes.select.selected !== classes.message.element.find(element)){
                        /*
                         * can be colld if heas selected element, and selected element not clicked element
                         */
                        methods.unselecting();
                    }
                    if(!classes.select.selected){
                        /*
                         * once 
                         */
                        selecting.apply(element,arguments);
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
                    var selected = selectVar('elements').filter("[kh-data-selecting=true]");
                    return classes.message.element.find(selected);
                },
                set:function(selected){
                    var element = false;
                    if((!selectVar('elements').find(selected).size())){
                        element  = classes.helper.selectorEqualizing(selected);
                        element.trigger("click");
                    }
                    
                    console.assert(typeof selected != "boolean" && element,"Unable to selct element, argument is incorrect");
                    return (typeof selected == "boolean")?false:element;
                }
            });
        
        
    }
    _.each(methods,function(fn,name){
       this[name] = fn;
    },this);    
}