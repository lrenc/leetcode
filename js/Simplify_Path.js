/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path = path.split('/');
    var res = [];
    
    for (var i = 0, l = path.length ; i < l; i ++) {
        var item = path[i];
        if (item === ".." && res.length) {
            res.pop();
        } else if (item && item !== ".") {
            if (item === ".." && res.length === 0) {
                continue;
            }
            res.push(item);
        }
    }
    return '/' + res.join('/');
};

console.log(simplifyPath("/.."));