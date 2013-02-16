/**
 * replice 'Layout' to classname
 */
var CLASS = function(public,private) {
    
    
    function error(descrition){
        console.error(descrition +" option undefined or invalid format");
        return "return";
    }
    private = (private == undefined || !(public instanceof Object))?({}):(private);
    
        with(private){
            if(public instanceof Object){
                _.each(public,function(fn,name){
                    this[name] = fn;
                },this);
            }
            else {
                error("public");
                return;
            }
        }
    
    
}