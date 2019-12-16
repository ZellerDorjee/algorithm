// 从尾到头打印链表
// 输入一个链表的头结点，按照 从尾到头 的顺序返回节点的值。
// 返回的结果用数组存储。
// 样例
// 输入：[2, 3, 5]
// 返回：[5, 3, 2]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {Number[]}
 */

// O(n)
var printListReversingly = function(head) {
    let arry = [];
    let newHead = head;
    while(newHead) {
        arry = [newHead.val, ...arry]
        newHead = newHead.next;
    }
    return arry;
}