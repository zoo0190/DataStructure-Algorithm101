interface NodeHandler<T> {
  readonly size: number;
  addLast: (value: T) => void;
  search: () => void;
  remove: (value: T) => void;
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
  private head: MyNode<T> | null;
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
      if (node === null) return;
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

  remove(value: T) {
    if (this.head === null || this.size === 0) {
      console.log('No Data!!');
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      this._size--;
      return;
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      this._size--;
      return;
    } else {
      let node = this.head;
      while (node.next) {
        if (node.next.data === value) {
          node.next = node.next.next;
          this._size--;
          return;
        } else {
          node = node.next;
        }
      }
    }
  }
}

export function linkedListInit() {
  const myNode = new NodeHandlerImple(0);
  for (let num of [...Array(5).keys()]) {
    myNode.addLast(num + 1);
  }
  myNode.remove(2);
  myNode.search();
}
