class NodeItem {
  public val: any;
  public next: NodeItem;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  private head: NodeItem;
  private tail: NodeItem;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public push(val: any) {
    const newNode = new NodeItem(val);

    // 최초 노드 삽입
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head; // tail한테 this.head를 할당(주소 참조)
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }
}

const linkedList = new SingleLinkedList();
linkedList.push("Hello");
linkedList.push("GoodBye");

console.log(linkedList);
