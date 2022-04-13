interface NodeHandler<T, K> {
  add: (value: T) => void;
  search: () => void;
  addPrev: (value: T, prevNode: T) => void;
}

type MyNode<T> = {
  prev: MyNode<T> | null;
  data: T;
  next: MyNode<T> | null;
};

class MyNodeImple<T> implements MyNode<T> {
  prev;
  data;
  next;
  constructor(
    data: T,
    prev: MyNode<T> | null = null,
    next: MyNode<T> | null = null
  ) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

class NodeHandlerImple<T> implements NodeHandler<T> {
  private head: MyNode<T> | null;
  private tail: MyNode<T> | null;

  constructor(value: T) {
    this.head = new MyNodeImple(value);
    this.tail = this.head;
  }

  add(value: T) {
    if (this.head === null) {
      this.head = new MyNodeImple(value);
      this.tail = this.head;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      const newNode = new MyNodeImple(value);
      node.next = newNode;
      newNode.prev = node;
      this.tail = newNode;
    }
  }

  search() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      if (node.next === null) {
        break;
      } else {
        node = node.next;
      }
    }
  }

  addPrev(value: T, prevNode: T) {
    if (this.head === null) {
      this.head = new MyNodeImple(value);
      return;
    } else {
      let node = this.tail;
      while (node.data !== prevNode) {}
    }
  }
}

export function doubleLinkedListInit() {
  const myNode = new NodeHandlerImple(0);

  for (let num of [...Array(5).keys()]) {
    myNode.add(num + 1);
  }
  myNode.search();
}
