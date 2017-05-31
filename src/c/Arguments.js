var _ = require("lodash");

module.exports = function(ast, comp, e, context){
    var has_named = false;
    var r = {};
    var i = 0;
    _.each(ast.args, function(arg){
        if(arg.type === "NamedArgument"){
            r[arg.id.value] = comp(arg.value);
            has_named = true;

        }else if(has_named){
            throw new Error("non-named arg after named arg");
        }else{
            r[i] = comp(arg);
            i++;
        }
    });
    return has_named
        ? e("obj", r)
        : e("array", _.values(r));
};
