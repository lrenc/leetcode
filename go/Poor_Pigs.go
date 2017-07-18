package main

import (
    "fmt"
    "math"
)

func log(x, y int) float64 {
    return math.Log(float64(y)) / math.Log(float64(x))
}

func poorPigs(buckets int, minutesToDie int, minutesToTest int) int {
    return int(math.Ceil(log(1 + minutesToTest / minutesToDie, buckets)))
}

func main() {
    buckets := 1000
    minutesToDie := 15
    minutesToTest := 60
    fmt.Println(poorPigs(buckets, minutesToDie, minutesToTest))
}
