using namespace std;
int main()
{
	int choice;
	do
	{
		//menu
		float cost_tea=20.00,cost_coffee=60.00,cost_water=15.00;
		int qty;
		cout<<"\nApni Taprii ";
		cout<<"\n1.Tea";
		cout<<"\n2.Coffee";
		cout<<"\n3.Water";
		cout<<"\n0.Exit";
		cout<<"\n:";
		//input
		cin>>choice;
		//switch to do taks
		switch(choice)
		{
			case 1:
				cout<<"\nEnter number of teas:";
				cin>>qty;
				cout<<"\nYou order total "<<qty<<" teas cost:"<<qty*cost_tea;
				break;
			case 2:
				cout<<"\nEnter number of Coffees:";
				cin>>qty;
				cout<<"\nYou order total "<<qty<<" coffee cost:"<<qty*cost_coffee;
				break;
			case 3:
				cout<<"\nEnter number of Water Bottles:";
				cin>>qty;
				cout<<"\nYou order total "<<qty<<" Water bottles :"<<qty*cost_water;
				break;			
			case 0:
				cout<<"\nExiting system. Thanks for using it. ";
				break;			
			default:
				cout<<"\nInvalid choice.";
				break;
		}
	}while(choice!=0);//Till exit option is not selected. 
	return 0;
}

