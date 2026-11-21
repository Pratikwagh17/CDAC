#include<iostream>
//Write a program which will continue accepting numbers 
//till the user gives 0 / a negative number to stop. 
using namespace std;
int main()
{
	int number,no;
	while(true)
	{
		if(no%2==0){
			cout<<"no is even";
		}
		else  
		{
			cout<<"no is odd";
		}
		{
		
		cout<<"Enter number or 0 to stop:";
		cin>>number;
		}
		if(number<=0)
			{
				cout<<"\nEnding the system. ";
				break;
			}
	}
	cout<<"outside loop :bye bye";
	return 0;
}

