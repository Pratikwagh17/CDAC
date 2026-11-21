#include <iostream>
using namespace std;
int main (){
	float a,b;
	
	cout<<"consumed unit: ";
	cin>>a;
	cout<<"rate per unit: ";
	cin>>b;
	int c=a*b;
	cout<<"total bill: "<<c<<"\n";
	
	if(c>2000){
		cout<<"high consumption";
	}
	else{
		cout<<"normal consumption";
	}
	return 0;
}
