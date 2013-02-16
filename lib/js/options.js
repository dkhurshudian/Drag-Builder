var OPTIONS = function(){
    return {
        "messagebox":{
            "selector":"[kh-data-usage=messagebox]",
            "callback":function(){
                
                }
            },
        "elementDragable":{
            "selector":"[kh-data-usage=elementDragable]",
            "callback":function(){
               kh("[kh-data-usage=draggableList]").accordion()
            }
            },
        "propertyBox":{
            "selector":"[kh-data-usage=property]",
            "callback":function(){
                
                }
            }
}
}