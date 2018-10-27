//singleton
export var utilTool=(
function(){
    var _singleIns=null;
    function utilSingleton(){
        if(!(this instanceof utilSingleton))
        return null;
        if(_singleIns == null)
            _singleIns = this;
        return _singleIns;
    }
    utilSingleton.prototype.randomByRange=function(min,max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    return utilSingleton;
}
)();
