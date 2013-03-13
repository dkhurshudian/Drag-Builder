var Message = function(editor) {
   with(editor){

    var interactiveVars = new classes.helper.localvarible({
        draggableList:'lib.options.elementDragable.selector',
        soratableTd  :'lib.options.messagebox.selector.find("[kh-data-usage="+kh(lib.htmlStructures.generalElements.tableLayout).attr("kh-data-usage")+"] td[kh-data-usage=messagecolumn]")',
        evenetCollback : 'classes.history.event'
    });
    
    var methods = {
            parse:classes.parser.messagebox,
            get:function(type){
                /**
                 * get message Content
                 * if type is true return content ready to send
                 * or false content able to edit
                 * @type {string}
                 */
               var result = false;
               var message = this.target();
               var messJSON = [];
               var table = message.find('[kh-data-usage="messagetable"]');
               
               var selected = classes.select.selected;
               selected?classes.select.unselecting():false;
               table.each(function($this){
                  var $table = [];
                  kh(this).find('[kh-data-usage="messagecolumn"]').each(function($$this){
                     var $td = [];
                     kh(this).children('[kh-data="messageElement"]').each(function($$$this){
                        var $element = {};
                        $element = newslatterEditor.classes.helper.getAllStyles(this)[0];
                        $td.push($element)
                     });
                     $table.push($td)
                  });
                  messJSON.push($table)
               })
               
               selected?selected.select():false;
               
               if(type == 'save'){
                  result = JSON.stringify(messJSON);
               }
               else if(type == 'history'){
                  result = messJSON
               }
               else if(type == 'test'){
                  result = messJSON
               }
               else {
                  result = messJSON
               }
               
               
               return result; 
            },
            set:function(newsletter){
                /**
                 * Installing already created newslatter
                 * @type {Object}
                 */
               newsletter = newsletter instanceof String?kh.parseJSON(newsletter):newsletter;
               if(newsletter){
                  var message = this.target();
                  this.empty();
                  
                  _(newsletter).each(function(td){
                     var table = classes.message.row.parse('table',true);
                     
                     _(td).each(function(elements){
                        var td = classes.message.row.parse('td');
                        _(elements).each(function(element){
                           var type = classes.helper.selectorEqualizing(element.element).attr("kh-data-element-type");
                           var elem = classes.message.element.parse(type);
                           
                           td.append(elem.content);
                           
                        })
                        table.find('tr').append(td);
                     })
                     
                     message.append(table);
                  })
                  this.sortable();
                  classes.elementButtons.sortable();
               }
            },
            empty:function(){
               classes.message.row.popover.hide();
               this.target().empty();
               //this.init();
            },
            
            sortable:function(method){
               var elementButtons = interactiveVars('soratableTd'),
               result = false,
               methods = this;
               if(!method){
                  result = elementButtons.sortable({
                  item: "div[kh-data-rel]",
                  helper: "none",
                  distance:20,
                  cancel:'.ui-resizable-e',
                  connectWith:elementButtons,
                  beforeStop:interactiveVars("evenetCollback"),
                  receive: function(event, ui){
                        classes.message.row.popover.update();
                     }
                  });
               }
               else if(method == "disable"){
                  result = elementButtons.sortable("disable");
               }
               else if(method == "enable"){
                  result = elementButtons.sortable("enable");
               }
               return result;
            },
            target:function () {
               return classes.helper.selectorEqualizing(lib.options.messagebox.selector);
            },
            init:function(){
                this.parse();
                this.row.init();
                var table = this.row.parse('table');
                this.target().append(table);
                this.sortable();
                classes.elementButtons.sortable();
                history.init();
                this.element.init();
		select.init();
               classes.history.event.apply(this,arguments);
            },
            element : {
               init:_.once(function(){
                  var targets =  kh('');
                  targets.selector = "[kh-data ="+kh(classes.parser.messageElement("test")).attr("kh-data")+"]";
                  targets.context = document;
                  
                  this.targets = targets;
                  this.list    = [];
               }),
               parse:function(elementType){
                  /* 
                   * Parsing Message Element, by type
                   */
                   var object  = false;
                   if(typeof elementType == "string"){
                       object = new MessageElement(editor,elementType);
                   }
                   if(elementType != "test"){
                     this.list.push(object);
                     this.targets.push(object.content[0]);
                   }
                   return object;
               },
               find:function(element){
                  /*
                   * find element in message list,
                   * @returns MessageElement object
                   */
                  element = classes.helper.selectorEqualizing(element).first();
                  var list = this.list;
                  return _.find(list,function(){
                     var $this = arguments[0].content;
                     var result = $this.filter(element);
                     
                     
                     return result.size()?result:false;
                  })
               },
               remove:function(element){
                  /*
                   * remove element from message. also will remove from lists,
                   * based on first argument;
                   * @argument element can be anything, selector, jQuery object etc
                   */
                  element = classes.helper.selectorEqualizing(element);
                  element = this.find(element);
                  var index = this.list.indexOf(element);
                  
                  classes.select.unselecting();
                  element.content.remove();
                  
                  classes.helper.removeFromArray(this.list,index);
                  classes.helper.removeFromArray(this.targets,index);
                  
               },
               clone:function(element){
                  var element = classes.message.element.find(element),
                     type = element.getType(),
                     newElement = classes.message.element.parse(type);  
                  return [element,newElement];
               }
               
            },
            row:{
               init:_.once(function(){
                  target().find('[kh-data-usage="messagecolumn"]').live('click',function(){classes.message.row.popover.show(this)});
                  
                  
               }),
               popover:{
                  append:function(element){
                     var Controlls = kh('<div>').attr({onclickk:'a.apply(this,arguments)','kh-data-usage':"row_controll"});
                     var buttons = [
                        kh('<span>').attr({src:"",'kh-data-usage':'remove'})  .text('X'),
                        kh('<span>').attr({src:"",'kh-data-usage':'table'})   .text('\\/'),
                        kh('<span>').attr({src:"",'kh-data-usage':'td'})      .text('\>'),
                     ];
                     _(buttons).each(function(img){
                        img.bind('click',function(){alert('s')}).appendTo(Controlls)
                     });
                     
                     element.popover({
                        title: false,
                        //position:"top",
                        content: kh('<div>').append(Controlls),
                        hideOnHTMLClick:true,
                        trigger:'none'
                        
                     });
                     
                     kh('.content').off('click','[kh-data-usage=row_controll]',classes.message.row.event).on('click','[kh-data-usage=row_controll]',classes.message.row.event)
                  },
                  update:function(){
                     this.show(this.showed);   
                  },
                  show:function(element){
                     element = classes.helper.selectorEqualizing(element);
                     if(this.showed)this.showed.popover('hide');
                     element.popover('show');
                     this.showed = element;
                  },
                  showed:false,
                  hide:function(){
                     if(this.showed){
                        this.showed.popover('hide');
                        this.showed = false;
                     }
                     else{
                        console.warn('No row selected');
                     }
                  }
               },
               parse:function(elementType){
                  /* 
                   * Parsing Message ROW, by row type(table,td)
                   */
                  var result = false;
                  if(elementType == "td"){
                     
                     result = classes.parser.message.td();
                     result = classes.helper.selectorEqualizing(result);
                     result.resizable({ handles: "e"});
                     this.popover.append(result);
                  }
                  else if(elementType == "table"){
                     var td = arguments[1]?false:this.parse('td');
                     result = classes.helper.selectorEqualizing(classes.parser.message.table()).find('tr').append(td).end();
                  }
                  
                  this.list[elementType].push(result); 
                  return result
               },
               event:function(event){
                  var element = false,
                     type = false;
                  var target  = classes.helper.selectorEqualizing(event.target);
                  
                  classes.history.event.apply(this,arguments);
                  if(target.is('[kh-data-usage=remove]')){
                     //remove
                     classes.message.row.remove();
                  }
                  
                  else if(target.is('[kh-data-usage=td]')){
                     var element = classes.message.row.popover.showed;
                     classes.message.row.add('td',element);
                  }
                  else if(target.is('[kh-data-usage=table]')){
                     var element = classes.message.row.popover.showed.parents('table:first');
                     classes.message.row.add('table',element);
                  }
                  
                  
               },
               add:function(type,element){
                  element  = classes.helper.selectorEqualizing(element);
                  
                  var newContent = this.parse(type);
                  element.after(newContent);
                  this.popover.update();
                  
                  classes.message.sortable();
                  classes.elementButtons.sortable();
                  
                  
                  
                  
               },
               remove:function(element){
                  /*
                   * remove element from message. also will remove from lists,
                   * based on first argument;
                   * @argument element can be anything, selector, jQuery object etc
                   */
                  element = classes.helper.selectorEqualizing(element);
                  var list = this.list[element[0].localName];
                  var index = list.indexOf(element);
                  
                  if(element.find(classes.select.selected.content).size())classes.select.unselecting();
                  this.popover.hide();
                  element.remove();
                  
                  classes.helper.removeFromArray(list,index);
                  
               },
               list:{
                  'table':[],
                  'td':[]
               }
               
            }

         }
    }
    
    
    _.each(methods,function(fn,name){
        this[name] = fn;
    },this);  
}     
      
