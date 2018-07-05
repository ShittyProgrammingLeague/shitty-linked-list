#include <iostream>
#include <windows.h>

class LinkedList
{
public:
	LinkedList()
		: head(nullptr)
	{
	}

	struct Node
	{
		Node(int _num)
			: num (_num)
			, next(nullptr)
		{
		}
		int num = 0;
		Node* next;
	};

	Node* head;
	
	Node* GetTail() const
	{
		if (!head)
			return nullptr;
		if (head->next == nullptr)
			return head;
		Node* node = head->next;
		while (node)
		{
			if (node->next)
				node = node->next;
			else
				break;
		}
		return node;
	}

	void Add(int myNum)
	{
		Node* node = new Node(myNum);
		if (!head)
			head = node;
		else
		{
			Node* tail = GetTail();
			//assert(tail);
			tail->next = node;
		}
	}
};

int main()
{
	LinkedList ll;
	ll.Add(1);
	ll.Add(2);
	ll.Add(3);
	ll.Add(4);
	ll.Add(541);

	LinkedList::Node* node = ll.head;
	while (node)
	{
		char* msgbuf = new char[1000000];
		sprintf(msgbuf, "%d\n", node->num);
		OutputDebugString(msgbuf);
		node = node->next;
	}
}