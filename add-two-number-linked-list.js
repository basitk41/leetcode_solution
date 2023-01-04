/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let res;
  let str1 = convertListToString(l1);
  let str2 = convertListToString(l2);
  let str3 = `${+str1 + +str2}`;
  return linkedList(str3.split("").reverse());
};

const convertListToString = (list) => {
  let str = "";
  while (list?.val) {
    str += `${list.val}`;
    list = list.next;
  }
  return str;
};

function linkedList(arr) {
  let list = new ListNode(arr[0]);

  let selectedNode = list;
  for (let i = 1; i < arr.length; i++) {
    selectedNode.next = new ListNode(arr[i]);
    selectedNode = selectedNode.next;
  }

  return list;
}
