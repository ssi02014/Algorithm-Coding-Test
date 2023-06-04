class MaxHeap {
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

  // 최상위 부모 노드
  getPeek() {
    return this.items[0];
  }

  //힙의 크기(항목 개수)를 반환하는 메소드
  getSize() {
    return this.items.length;
  }

  // 힙에서 원소를 넣는 함수
  add(item) {
    this.items[this.items.length] = item;

    this.bubbleUp();
  }

  // 힙에서 원소를 빼내는 함수
  poll() {
    const item = this.items[0];

    this.items[0] = this.items.at(-1);
    this.items.pop();

    this.bubbleDown();

    return item;
  }

  bubbleUp() {
    let index = this.items.length - 1;

    while (this.getParent(index) && this.getParent(index) < this.items[index]) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      this.getLeftChild(index) &&
      (this.getLeftChild(index) > this.items[index] ||
        this.getRightChild(index) > this.items[index])
    ) {
      let largerIndex = this.getLeftChildIndex(index);

      if (
        this.getRightChild(index) &&
        this.getRightChild(index) > this.items[largerIndex]
      ) {
        largerIndex = this.getRightChildIndex(index);
      }
      this.swap(largerIndex, index);
      index = largerIndex;
    }
  }
}

function solution(n, k, enemy) {
  const maxHeap = new MaxHeap();
  let result = 0;

  for (let i = 0; i < enemy.length; i++) {
    maxHeap.add(enemy[i]);
    n -= enemy[i];

    if (n < 0) {
      if (!k) break;
      if (k) {
        const maxValue = maxHeap.poll();
        n += maxValue;
        k--;
      }
    }
    result++;
  }

  return result;
}
