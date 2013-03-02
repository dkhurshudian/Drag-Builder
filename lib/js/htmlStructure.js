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
            
            "after":_.template("<div kh-data = 'messageElement' kh-data-element-type= '<%= type %>' ><div kh-data = 'messageElementContent'><%= content %></div><div kh-data-usage = 'controllers'><div kh-data-usage = 'sloyformessageElement'></div><div kh-data-usage = 'selection'> <%= selection %></div></div></div>"),
            
            "before":_.template("<div kh-data-rel='<%= name %>'><div kh-data-usage='accord_block_sortable'><div kh-data-class='<%= name %>'><img kh-data-class-img src='<%= image %>'><span><%= label %></span></div></div></div>"),
            
            "selectControlls" : '<div kh-data-class="block_add_del"><span kh-data-class="arrow_left"></span><div kh-data-usage="secected_controlls"><img src="/phpfoxdev/module/dance/static/css/default/default/itgotmetemplate/images/sprite_edit_template_block.png" kh-data-class="deleteEl"><img src="/phpfoxdev/module/dance/static/css/default/default/itgotmetemplate/images/sprite_edit_template_block.png" kh-data-class="clone"></div></div>'
        }
    }
}