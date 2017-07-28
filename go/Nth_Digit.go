package main

import (
    "fmt"
    "math"
    "strconv"
)

var list [9]int = [9]int {9, 90, 900, 9000, 90000, 900000, 9000000, 90000000, 900000000}

func findNthDigit(n int) int {
    m := n
    i := 0
    for ;i < len(list); i ++ {
        item := list[i] * (i + 1)
        m = m - item
        if m < 0 {
            m = m + item
            break
        }
    }
    if m == 0 {
        return 9
    }
    var res int
    num := int(math.Pow10(i)) + m / (i + 1)
    rem := m % (i + 1)

    if rem == 0 {
        str := strconv.Itoa(num - 1)
        res, _ = strconv.Atoi(string(str[len(str) - 1]))
    } else {
        res, _ = strconv.Atoi(string(strconv.Itoa(num)[rem - 1]))
    }
    return res;
}

func main() {
    fmt.Println(findNthDigit(10000))
}
