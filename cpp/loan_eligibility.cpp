#include<iostream>
using namespace std;
int main(){
	int a,b;
	cout<<"age: ";
	cin>>a;
	cout<<"monthly salary: ";
	cin>>b;
	if(a>=21 && b>=25000){
		cout<<"loan eligible";
	}
	else
	{
	cout<<"not eligible";
	}
	return 0;
}
