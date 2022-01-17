// узел
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value // значение узла
    this.next = next // следующий узел
  }
}

// список
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  // метод добавляет новый узел в начало списка и возвращает весь список
  prepend(value) {
    const newNode = new LinkedListNode(value)
    this.head = newNode // новый узел указали как начало списка
    if (!this.tail) {
      this.tail = newNode // если список пустой, то новый узел и начало и конец списка
    }
    return this // возвращает список
  }

  // метод добавляет новый узел в конец списка и возвращает весь список
  append(value) {
    const newNode = new LinkedListNode(value)
    if (!this.head || !this.tail) { // если список пустой, то новый узел и начало и конец списка
      this.head = newNode
      this.tail = newNode
      return this
    }
    this.tail.next = newNode // next последнего узла указывает на новый узел
    this.tail = newNode // теперь новый узел это последний узел
    return this
  }

  // метод удаляет подходящие узлы из списка по значению и возвращает весь список
  delete(value) {
    if (!this.head) {
      return null // если список пустой, то возвращаем null
    }
    if (this.head.value === value && !this.head.next) { // если узел сам по себе head и tail, значит он единственный в списке
      this.head = null
      this.tail = null
      return this
    }
    if (this.head && this.head.value === value) { // если значение первого узла совпадает с value ...
      this.head = this.head.next // "первым узлом" становится следующий узел, то есть next первого узла
    }
    let currentNode = this.head
    while (currentNode.next) { // пока есть next у узла он не последний, потому что у последнего узла next = null
      if (currentNode.next.value === value) { // если значание совпадает
        currentNode.next = currentNode.next.next // currentNode.next.next указывает на следующий узел после удаленного узла
      } else {
        currentNode = currentNode.next // переходит на следующий узел по списку
      }
    }
    if (this.tail && this.tail.value === value) { // если значание послденего узла совпадает с value ...
      this.tail = currentNode // хвостом становится currentNode (currentNode = последний узел у которого next !== null и значание не совпадает с value)
    }
    return this
  }

  // метод удаляет последний узел и возвращает его
  deleteTail() {
    if (!this.tail) {
      return null
    }
    let deletedNode = this.tail // записывает последний узел как удаленный узел
    if (this.head.value === value && !this.head.next) { // если узел сам по себе head и tail, значит он единственный в списке
      this.head = null
      this.tail = null
      return deletedNode
    }
    let currentNode = this.head
    while(currentNode.next) { // пока узел не последний
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }
    this.tail = currentNode // currentNode - это предпоследний узел или head
    return deletedNode
  }

  // метод удаляет первый узел и возвращает его
  deleteHead() {
    if (!this.head) {
      return null
    }
    let deletedNode = this.head // записывает первый узел как удаленный узел
    if (this.head.next) { // если есть второй узел ...
      this.head = this.head.next // то первым узлом становится второй узел
    } else { // или если только один узел (сам по себе head и tail)
      this.head = null
      this.tail = null
    }
    return deletedNode
  }

  // метод находит подходящие узлы из списка по значению и возвращает массив найденных узлов
  find(value) {
    if (!this.head) {
      return null // если список пустой, то возвращаем null 
    }
    let findedNodes = []
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        findedNodes.push(currentNode)
      }
      currentNode = currentNode.next // переходит на следующий узел
    }
    return findedNodes // возвращает массив найденных узлов
  }

  getList() { // выводит список
    return this
  }
}

const linkedList = new LinkedList()
linkedList.prepend(1)
linkedList.append(2)
linkedList.getList()
