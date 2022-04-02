export default function linkedList() {
  type NodeType = {
    data: string;
    next?: NodeType | null;
  };

  class Node {
    data: string = '';
    next?: NodeType;

    constructor(data: string, next?: NodeType) {
      this.data = data;
      this.next = next;
    }
  }

  const node1 = new Node('abc');
  console.log(node1);
}
