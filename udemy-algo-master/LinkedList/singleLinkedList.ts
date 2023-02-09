import Node from "../Node/node.js";

class SingleLinkedList {
  private head: Node;
  private tail: Node;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public push(val: any) {
    // newNode 생성
    const newNode = new Node(val);

    if (!this.head) {
      // 최초 노드 삽입, head, tail 모두 newNode를 가리킴
      this.head = newNode;
      this.tail = this.head; // 주소 참조
    } else {
      // 요소가 뒤에 추가되니 tail의 next를 먼저
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

    // current가 연결리스트의 마지막 요소까지 이동시킴
    // 즉 next에 아무것도 없을 때까지
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // current는 기존 tail Node를 바라봄(제거해야 되는 노드)
    // newTail은 기존 tail Node의 바로 이전 Node를 바라봄(마지막이 될 노드)
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

  public shift() {
    // head가 없으면 undefined 반환
    if (!this.head) return;

    const currentHead = this.head;

    this.head = currentHead.next;
    this.length--;

    // 길이가0이면 tail을 null로 셋팅
    if (!this.length) {
      this.tail = null;
    }

    return currentHead;
  }

  public unshift(val: any) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  public get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  public set(index: number, val: any) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  /**
   * @description 링크드리스트 특정 인덱스에 노드를 추가
   */
  public insert(index: number, val: any) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;

    this.length++;

    return this;
  }

  public size() {
    return this.length;
  }
}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡd
// 실행
const linkedList = new SingleLinkedList();
linkedList.push("Hello");
linkedList.push("GoodBye");
linkedList.push("!!");

console.log(linkedList.insert(0, "@@"));
console.log(linkedList.insert(4, "##"));

// console.log(linkedList);
console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));
console.log(linkedList.get(3));
console.log(linkedList.get(4));
