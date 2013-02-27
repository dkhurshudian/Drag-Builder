var InteractiveInit = function(){
		
				
	function afterFirstDroppingInList(event, ui){
		var element = {
			after		: ui.item,
			before		: interactiveVars("draggableList").find("[kh-data-rel="+ui.item.children("[kh-data-class]").attr("kh-data-class")+"]")
		}
		
		
		
		
		
		
		
		
		
		
		element.before.append(element.after.clone());
		
		
		
		element.after.replaceWith(interactiveVars("messageDefaultElement"));
	}
	
	
	
	
	
	var methods = {
		
		elementButtons	:function(){
			
			interactiveVars('draggableList').accordion();		
			
			interactiveVars('draggableList').find("[kh-data-rel]")
			.sortable({
				helper: "clone",
				revert: "invalid",
				connectWith:  interactiveVars('soratableTd')
			    });
		},
		messageBox	:function(){
			var methods = this;
			interactiveVars('soratableTd').sortable({
				item: "div[kh-data-rel]",
				helper:"clone",
				receive: function(event, ui){
					methods.afterFirstDroppingInList(event, ui)
				}
			})
		},
		afterFirstDroppingInList:function (event, ui){
			var element = {
				after		: ui.item,
				before		: interactiveVars("draggableList").find("[kh-data-rel="+ui.item.children("[kh-data-class]").attr("kh-data-class")+"]")
			}
			
			message
		},
		
		update		:function(){
			
		}
	}
	_.each(methods,function(fn,name){
		this[name] = fn;
	},this);
}