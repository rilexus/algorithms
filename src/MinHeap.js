class MinHeap {
  data;
  length;
  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value) {
    this.data[this.length] = value;
    this.#heapifyUp(this.length);
    this.length++;
  }

  delete() {
    if (this.length === 0) {
      return;
    }
    if (this.length === 1) {
      this.data = [];
      this.length = 0;
    }

    this.length--;
    this.#swap(0, this.length);
    this.#heapifyDown(0);
  }

  #parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  #parent(index) {
    return this.data[this.#parentIndex(index)];
  }

  #leftChildIndex(index) {
    return index * 2 + 1;
  }

  #leftChild(index) {
    return this.data[this.#leftChildIndex(index)];
  }

  #rightChildIndex(index) {
    return index * 2 + 2;
  }

  #swap(index1, index2) {
    const v1 = this.#getValue(index1);
    const v2 = this.#getValue(index2);
    this.data[index1] = v2;
    this.data[index2] = v1;
  }

  #rightChild(index) {
    return this.data[this.#rightChildIndex(index)];
  }

  #getValue(index) {
    return this.data[index];
  }

  #heapifyUp(index) {
    if (index === 0) {
      return;
    }
    const value = this.#getValue(index);
    const parentValue = this.#parent(index);

    if (parentValue > value) {
      const parentIndex = this.#parentIndex(index);
      this.#swap(index, parentIndex);
      this.#heapifyUp(parentIndex);
    }
  }

  #heapifyDown(index) {
    const leftIndex = this.#leftChildIndex(index);
    const rightIndex = this.#rightChildIndex(index);

    if (index >= this.length || leftIndex >= this.length) {
      return;
    }
    const rightValue = this.#rightChild(index);
    const leftValue = this.#leftChild(index);
    const value = this.#getValue(index);
    if (leftValue > rightValue && value > rightValue) {
      this.#swap(index, rightIndex);
      this.#heapifyDown(rightIndex);
    } else if (rightValue > leftValue && value > leftValue) {
      this.#swap(index, leftIndex);
      this.#heapifyDown(leftIndex);
    }
  }
}
