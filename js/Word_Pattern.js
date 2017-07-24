/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let arr = str.split(' ');
    // 长度不相等
    if (pattern.length !== arr.length) {
        return false;
    }
    let map = {};
    let i = 0;
    let l = arr.length;
    for (; i < l; i ++) {
        let key = pattern[i];
        let item = arr[i];
        if (map['key_' + key] && map['key_' + key] !== item) {
            return false;
        }
        if (map['item_' + item] && map['item_' + item] !== key) {
            return false;
        }
        map['key_' + key] = item;
        map['item_' + item] = key;
    }

    return true;
};

var pattern = 'abba';
var str = 'cat dog dog cat';
console.log(wordPattern(pattern, str));
