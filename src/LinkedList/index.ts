interface NodeHandler<T> {
  add: (value: T) => void;
  search: () => void;
}

type MyNode<T> = {
  data: T;
  next: MyNode<T> | null;
};

class MyNodeImple<T> implements MyNode<T> {
  data;
  next;
  constructor(data: T, next: MyNode<T> | null) {
    this.data = data;
    this.next = next;
  }
}

class NodeHandlerImple<T> implements NodeHandler<T> {
  constructor(private head: MyNode<T> | null = null) {}

  add(value: T) {}

  search() {}
}

export function linkedListInit() {
  const firstNode = new MyNodeImple(1, null);
  const secondNode = new MyNodeImple(2, null);
  firstNode.next = secondNode;
  console.log(firstNode);
}
