package main

import "math"

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func getDepth(node *TreeNode) int {
    if node == nil {
        return 0
    }
    depth := 1 + math.Max(float64(getDepth(node.Left)), float64(getDepth(node.Right)))
    return int(depth)
}

func isBalanced(root *TreeNode) bool {
    if root == nil {
        return true
    }
    if math.Abs(float64(getDepth(root.Left)) - float64(getDepth(root.Right))) > 1 {
        return false
    }
    return isBalanced(root.Left) && isBalanced(root.Right)
}
