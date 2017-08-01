package main

import "fmt"
import "strings"

func countSegments(s string) int {
    s = strings.TrimSpace(s)
    if s == "" {
        return 0
    }
    arr := strings.Split(s, " ")
    res := 0
    for _, item := range arr {
        if strings.TrimSpace(item) != "" {
            res ++
        }
    }
    return res
}

func main() {
    fmt.Println(countSegments(", , , ,        a, eaefa"))
}
