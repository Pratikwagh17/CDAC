#include<iostream>
//An array is given. Reverse the array without using another array. 
using namespace std;
int main()
{
	int n=5;
	int a[n]={11,22,33,44,55};//Initialize all elements of the array to zero. 
	cout<<"\nArray consists of :\n";
	 
	for(int index=0;index<n;index++)
	{
		cout<<"\n at a["<<index<<"]: "<<a[index];//Will print garbage values because initially there will be garbage. 
	}
	//reverse
	
	cout<<"\nAfter Reversed Array consists of :\n";
	for(int index=n-1;index>=0;index--)
	{
		cout<<"\n at a["<<index<<"]: "<<a[index];//Will print garbage values because initially there will be garbage. 
	}

	return 0;
}
