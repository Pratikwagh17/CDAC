#include<iostream>
using namespace std;
int main(){
	int a;
	cout<<"enter your marks: ";
	cin>>a;
	if(90<a<100 ){
		cout<<"A grade";
	}
	else if(a>=75 && a<=89){
		cout<<"B grade";
	
	}
	else if(a>=60 && a<=74){
		cout<<"C grade";
	}
	else if(a>=40 && a<=59){
		cout<<"D grade";
	}
	else if(a<40){
		cout<<"F grade";
	}
	else
	{
		cout<<"invalid marks";
	}
	return 0;
}
