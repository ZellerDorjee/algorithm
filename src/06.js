// 重建二叉树
// 输入一棵二叉树前序遍历和中序遍历的结果，请重建该二叉树。
// 注意:
// 二叉树中每个节点的值都互不相同；
// 输入的前序遍历和中序遍历一定合法；
// 样例
// 给定：
// 前序遍历是：[3, 9, 20, 15, 7]
// 中序遍历是：[9, 3, 15, 20, 7]
// 返回：[3, 9, 20, null, null, 15, 7, null, null, null, null]
// 返回的二叉树如下所示：
//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length==0||inorder.length==0){
        return null;
    };
    let tree = [];
    let index = inorder.indexOf(preorder[0])
    tree.left = buildTree(preorder.slice(1,index+1),inorder.slice(0,index));
    tree.right = buildTree(preorder.slice(index+1),inorder.slice(index+1))
    tree.val = preorder[0]
    return tree
};