package main

import "fmt"

func isPowerOfFour(num int) bool {
    for num > 1 && num % 4 == 0 {
        num /= 4
    }
    return num == 1
}

func main() {
    fmt.Println(isPowerOfFour(5))
}
