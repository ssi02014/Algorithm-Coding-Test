class Heap {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  //값을 서로 바꾸는 메소드
  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1],
    ];
  }

  //부모 인덱스 구하는 메소드

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  //왼쪽 자식 인덱스 구하는 메소드

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  //오른쪽 자식 인덱스 구하는 메소드

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  //부모 노드 구하는 메소드

  getParent(index) {
    return this.items[this.getParentIndex(index)];
  }

  //왼쪽 자식 노드 구하는 메소드

  getLeftChild(index) {
    return this.items[this.getLeftChildIndex(index)];
  }

  //오른쪽 자식 노드 구하는 메소드

  getRightChild(index) {
    return this.items[this.getRightChildIndex(index)];
  }

  //최대 힙의 경우 최댓값을 반환하고 최소 힙의 경우 최솟값을 반환하는 메소드

  getPeek() {
    return this.items[0];
  }

  //힙의 크기(항목 개수)를 반환하는 메소드

  getSize() {
    return this.items.length;
  }
}

module.exports = Heap;
