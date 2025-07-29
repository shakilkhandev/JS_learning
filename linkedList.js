class node {

    constructor(data ){
        this.data = data;
        this.next = null ;
    }
}

class linkedList{
    constructor(){
      this.head = null ;
      this.tail = null;
    }
    addFirst(data){
        const newNode = new node(data);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
           newNode.next = this.head ;
           this.head = newNode ;
        }
    }
        
        printList(){           
            current = this.head;

            while(current != null ){
                console.log(current.data);
                current = current.next;
            }

        }

}


const firstLinkedList = new linkedList();

console.log(firstLinkedList);

console.log("after add ");

firstLinkedList.addFirst("First Node ");
firstLinkedList.addFirst("two Node ");
firstLinkedList.addFirst("three Node ");
firstLinkedList.addFirst("four Node ");
firstLinkedList.addFirst("five Node ");

console.log(firstLinkedList);
