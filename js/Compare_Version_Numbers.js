/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {

     var v1 = version1.split('.');
     var v2 = version2.split('.');

     var i = 0;
     var l1 = v1.length;
     var l2 = v2.length;

     for (; i < l1 && i < l2; i ++) {
         var item1 = +v1[i];
         var item2 = +v2[i];
         if (item1 > item2) {
             return 1;
         } else if (item1 < item2) {
             return -1;
         }
     }
     
     if (l1 - l2 > 0) {
         return 1;
     } else if (l1 - l2 < 0) {
         return -1;
     }
     return 0;
 };

console.log(compareVersion('0', '1'));
