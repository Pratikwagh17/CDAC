#include<iostream>
//1,2,3...,10
using namespace std;

int main()
{
	int n,multiply=1;
	cout<<"Enter number:";
	cin>>n;
	for (int i=1;i<=n;i++)
	{
		cout<<i<<"*";
		multiply=multiply*i;
	}	
	cout<<"="<<multiply;
	return 0;
}

