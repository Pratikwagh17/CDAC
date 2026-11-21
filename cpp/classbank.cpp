#include<iostream>
using namespace std;

struct Bankbal{
	int accno;
	string name;
	float balance;
	
	public: 
	Bankbal()
	{
	accno=0;
	name="new acc";
	balance=0;
	}
	void set_accno()
	{
		cout<<"\nenter account no: ";
		cin>>accno;
		
	}
	int get_accno(){
//		cout<<accno;
		return accno;
	}
	
	
		void set_name()
	{
		cout<<"\nenter your name: ";
		cin>>name;
		
	}
	string get_name(){
//		cout<<accno;
		return name;
	}
	
	
		void set_balance()
	{
		cout<<"\nenter your balance: ";
		cin>>balance;
		
	}
	double get_balance(){
//		cout<<accno;
		return balance;
	}
	
	
	
	
};

int main(){
	Bankbal b1,b2,b3;
	
	b1.set_accno();
	cout<<"your acc balance is: "<<b1.get_accno();	
	
	
	b2.set_accno();
	cout<<"your acc balance is: "<<b2.get_accno();
	
	
	b3.set_accno();
	cout<<"your acc balance is: "<<b3.get_accno();
	
//	cout<<"list of acc no\n"<<b1;
	
	                             
	
	
	
	
	
	
	
	
	
	
	
	return 0;
}









