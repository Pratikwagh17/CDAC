#include<iostream>
using namespace std;
inline int sqr(int n){
	return n*n;
}
int main(){
	int num;
	cout<<"enter a number: ";
	cin>>num;
	int result = sqr(num);
	cout<<"\nthe square of given number is: "<<result<<endl;
	
	return 0;
}