type MyNode<T> = {
  data: T;
  next: MyNode<T> | null;
};

export class MyNodeImple<T> implements MyNode<T> {
  data;
  next;
  constructor(data: T, next: MyNode<T> | null) {
    this.data = data;
    this.next = next;
  }
}
