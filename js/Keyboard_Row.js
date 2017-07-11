/**
 * @param {string[]} words
 * @return {string[]}
 */

var map = {
    'q': 1,
    'w': 1,
    'e': 1,
    'r': 1,
    't': 1,
    'y': 1,
    'u': 1,
    'i': 1,
    'o': 1,
    'p': 1,
    'a': 2,
    's': 2,
    'd': 2,
    'f': 2,
    'g': 2,
    'h': 2,
    'j': 2,
    'k': 2,
    'l': 2,
    'z': 3,
    'x': 3,
    'c': 3,
    'v': 3,
    'b': 3,
    'n': 3,
    'm': 3
};

function oneLine(word) {
    let i = 1;
    let l = word.length;
    for (; i < l; i ++) {
        if (map[word[i]] !== map[word[0]]) {
            return false;
        }
    }
    return true;
}

var findWords = function(words) {
    var res = words.filter(function(item) {
        let word = item.toLowerCase();
        return oneLine(word);
    });
    return res;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))
