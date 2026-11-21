#include<iostream>
using namespace std;
int main(){
	int a,b;
	cout<<"enter 1st no. : ";
	cin>>a;
	cout<<"enter 2nd no. : ";
	cin>>b;
	if(a>b){
		cout<<"a is greater";
	}
	else if(a<b){
		cout<<"b is greater";
	}
	else{
		cout<<"both are equal";

	}
	return 0;
}
