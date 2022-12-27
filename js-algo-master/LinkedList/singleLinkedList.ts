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

  public pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // current는 기존 tail Node를 바라봄
    // newTail은 기존 tail Node의 바로 이전 Node를 바라봄
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    // this.length가 0이되면 head와 tail을 null로 할당
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    // 제거 된 기존 tail Node를 리턴, 배열 메서드의 pop도 제거된 요소를 반환 함
    return current;
  }
}

const linkedList = new SingleLinkedList();
linkedList.push("Hello");
linkedList.push("GoodBye");
linkedList.push("!!");

linkedList.pop();
linkedList.pop();
linkedList.pop();
linkedList.pop();
console.log(linkedList);
