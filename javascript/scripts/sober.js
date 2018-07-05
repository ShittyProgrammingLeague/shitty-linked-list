function LinkedList(){
	this.head = null;

	return this;
}

LinkedList.prototype.printList = function(node){
	if(typeof node === 'undefined')
		node = this.head;
 	
 	if(node !== null){
 		console.log(node.val);
 		this.printList(node.next);
 	}
}

LinkedList.prototype.add = function(val){
	if( this.head === null){
		this.head = new Node(val);
	} else {
		var tailNode = this.head.getTail();
		tailNode.next = new Node(val);
	}
}

function Node(val){
	this.val = val;
	this.next = null;
	return this;
}

Node.prototype.getTail = function(){
	var node = this;
	while(node.next !== null){
		node = node.next;
	}

	return node;
}

var ll = new LinkedList();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(541);

ll.printList();