package main

import (
    "fmt"
)

func countPrimes(n int) int {
    var primes []bool = make([]bool, n)
    for i := 0; i < n; i ++ {
        primes[i] = true
    }
    for i := 2; i < n; i ++ {
        if primes[i] == true {
            for j := i * 2; j < n; j += i {
                primes[j] = false
            }
        }
    }
    res := 0
    for i := 2; i < n; i ++ {
        if primes[i] == true {
            res ++
        }
    }
    return res
}

func main() {
    fmt.Println(countPrimes(10))
}
