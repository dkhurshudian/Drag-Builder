var HTMLSTRUCTURE = function(){
    return {
        "generalElements":{
            "tableLayout"       : "<table kh-data-usage = 'messagetable'><tr><td kh-data-usage = 'messagecolumn'></td></tr></table>",
                        
            "elementDragable"   : "<div kh-data-usage = 'draggableList'></div>",
            
            "messageBox"        : "<div kh-data-usage = 'messageBox'></div>",
                            
            "properties"        : "<div kh-data-usage='properties'><div kh-data-properies='head'></div><div><div kh-data-usage='arrow'></div><div kh-data-properies = 'content'></div></div></div>",
            
            "accaardionSection" : "<h3></h3>",
            
            "accardionContent"  : "<div></div>"
        },
        "dragDropElements":{
            
            "after":_.template("<div kh-data = 'messageElement' kh-data-element-type= '<%= type %>' ><div kh-data = 'messageElementContent'><%= content %></div><div kh-data-usage = 'controllers'><div kh-data-usage = 'selection'></div></div></div>"),
            
            "before":"<div kh-data-rel=''><div kh-data-usage='accord_block_sortable'><div kh-data-class=''><img kh-data-class-img src=''><span></span></div></div></div>"
        }
    }
}