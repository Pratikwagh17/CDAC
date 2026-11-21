#include<iostream>
using namespace std;
 
 
 float add(float no1,float no2) {
 	return no1 + no2; 	 
 }
 float sub(float no1, float no2) {
 	return no1 -  no2;
 }
 float multiply(float no1, float no2) {
 	return no1 * no2;
 }
 float devide(float no1, float no2){
	return no1 / no2;
}


int main()
{
	double no1,no2;
	cout<<"enter Two Num: ";
	cin>>no1>>no2; 	
	float sum= add(no1,no2);
	float diff= sub(no1,no2);
	float product= multiply(no1,no2);
	float quotient= devide(no1,no2);
	
	cout<<"\naddition="<<sum<<endl;
	cout<<"\nsubstraction="<<diff<<endl;
	cout<<"\nmultiplication="<<product<<endl;
	cout<<"\ndevidation="<<quotient<<endl;
	
	return 0;
	
}