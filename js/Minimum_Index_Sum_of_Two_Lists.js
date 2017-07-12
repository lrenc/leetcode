/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let map = {};
    list1.forEach((item, i) => {
        map[item] = i;
    });
    let res = [];
    let minSum = 2000;
    list2.forEach((item, i) => {
        if (map[item] !== undefined) {
            let sum = map[item] + i;
            if (sum < minSum) {
                minSum = sum;
                res = [item];
            } else if (sum === minSum) {
                res.push(item);
            }
        }
    });
    return res;
};

let arr1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
let arr2 = ["KFC", "Shogun", "Burger King"]
console.log(findRestaurant(arr1, arr2));
