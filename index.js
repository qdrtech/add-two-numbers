
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let carry = 0;
    let listNode = dummyHead;

    while (l1 || l2) {
        let x1 = l1 ? l1.val : 0;
        let x2 = l2 ? l2.val : 0;
        let value = x1 + x2 + carry;

        //if remainder carry over
        carry = Math.floor(value / 10);
        listNode.next = new ListNode(value % 10);
        listNode = listNode.next

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }


        if (carry > 0) {
            listNode.next = new ListNode(1);
        }
    }

    return dummyHead.next;
};


let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

addTwoNumbers(l1, l2);