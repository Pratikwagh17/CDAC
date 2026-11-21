#include<iostream>
using namespace std;
int main(){
	int p,r,t;
	cout<<"amount you deposit: ";
	cin>>p;
	cout<<"rate per year: ";
	cin>>r;
	cout<<"time in year:";
	cin>>t;
	float si=(p*r*t)/100.00;

	cout<<"interest you got is: "<<(p*r*t)/100;
	cout<<"\ntotal amount you get: "<<p+si;
	return 0;
	
}
