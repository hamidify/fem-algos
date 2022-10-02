type Node<T> = {
  value: T;
  next?: Node<T>;
}

export default class Queue<T> {
  public length: number;
  public head?: Node<T>;
  public tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  enqueue(item: T): void {
    const newNode = { value: item }
    this.length += 1;
    if (!this.tail) {
      this.tail = this.head = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }
  deque(): T | undefined {
    if (!this.head) { return undefined }
    const nodeRemoved = this.head;
    this.head = this.head?.next
    nodeRemoved.next = undefined;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = undefined;
    }
    return nodeRemoved.value;

  }

  peek(): T | undefined {
    return this.head?.value;
  }
}