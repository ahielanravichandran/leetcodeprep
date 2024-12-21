export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    }
  }
  getNextNode() {
    return this.next;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    console.log({
      currentHead,
      newHead,
    });
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }
  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}
