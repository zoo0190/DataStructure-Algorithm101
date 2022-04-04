interface NodeHandler<T> {
  readonly size: number;
  addLast: (value: T) => void;
  search: () => void;
}

type MyNode<T> = {
  data: T;
  next: MyNode<T> | null;
};

class MyNodeImple<T> implements MyNode<T> {
  data;
  next;
  constructor(data: T, next: MyNode<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

class NodeHandlerImple<T> implements NodeHandler<T> {
  private head;
  constructor(value: T, private _size: number = 1) {
    this.head = new MyNodeImple(value, null);
  }

  get size() {
    return this._size;
  }

  addLast(value: T) {
    if (this.size === 0) {
      this.head = new MyNodeImple(value, null);
      this._size++;
      return;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new MyNodeImple(value);
      this._size++;
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
}

export function linkedListInit() {
  const a = new NodeHandlerImple(1);
  a.addLast(2);
  a.addLast(4);
  a.search();
}
