#include<iostream>
using namespace std;
void show(int value){
	cout<<"integer value: "<<value<<endl;
}
void show(double value){
	cout<<"double value: "<<value<< endl;
}
void show(char value){
	cout<<"character value: "<<value<<endl;
}
int main(){
	
	int value1;
	double value2; 
	char value3;  
	
	cout<<"enter integer: \n";
	cin>>value1;
	
	cout<<"enter double: \n";
	cin>>value2;
	
	cout<<"enter char: \n";
	cin>>value3;
	
	cout<< endl;
	
	show (value1);
	show (value2);
	show (value3);
	
	return 0;


}