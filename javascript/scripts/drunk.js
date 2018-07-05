var linkedList = {
    head: null,

    add: function(num) {
        if (this.head == null) {
            this.head = new Node(num);
            return;
        }

        var next = this.head.next;

        debugger;

        while (next !== null) {
            next = next.next;
        }

        next = new Node(num);
        return;

    },

    getTail: function() {
        if (this.head == null) {
            this.head = new Node(num);
        }

        var next = this.head.next;

        while (next !== null) {
            next = this.head.next;
        }

        return next;
    }

}


function Node(num) {
    var val = num;
    var next = null;

    return this;
}


console.log("HERE ")
linkedList.add(1);
console.log("HERE 1")
linkedList.add(2);
console.log("HERE 2")
linkedList.add(3);
console.log("HERE 3")
linkedList.add(4);
console.log("HERE 4")
linkedList.add(5);
console.log("HERE 5")
linkedList.add(541);

// console.log(linkedList.head.val)