class Queue {
    constructor() {
      this.arr = [];
    }
    //push: 배열 뒷부분에다 값 삽입
    enqueue(item) {
      this.arr.push(item);
    }
    //shift: 배열 앞부분 값을 삭제
    dequeue() {
      return this.arr.shift();
    }
  }
  
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1이 삭제

