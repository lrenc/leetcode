package main

import (
    "fmt"
    "strings"
)

func wordPattern(pattern string, str string) bool {
    arr := strings.Split(str, " ")
    lib := make(map[string]string)

    if len(arr) != len(pattern) {
        return false
    }
    for i, l := 0, len(arr); i < l; i ++ {
        key := string(pattern[i])
        item := arr[i]
        if value, ok := lib["key_" + key]; ok && value != item {
            return false
        }

        if value, ok := lib["item_" + item]; ok && value != key {
            return false
        }
        lib["key_" + key] = item
        lib["item_" + item] = key
    }
    return true
}

func main() {
    pattern := "aaa"
    str := "aa aa aa aa"
    fmt.Println(wordPattern(pattern, str))
}
