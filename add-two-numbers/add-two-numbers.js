
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
	let n1 = [];
	let n2 = [];

	while (l1 || l2) {
		if (l1) {
			n1.push(l1.val);
			l1 = l1.next;
		}
		if (l2) {
			n2.push(l2.val);
			l2 = l2.next;
		}
	}

	const sum = (
		BigInt(n1.reverse().join('')) + BigInt(n2.reverse().join(''))
	).toString();

	let idx = sum.length - 1;
	let LL = new ListNode(parseInt(sum[sum.length - 1]));
	let tail = LL;

	while (idx-- > 0) {
		const node = new ListNode(parseInt(sum[idx]));

		tail.next = node;
		tail = tail.next;
	}

	return LL;
};