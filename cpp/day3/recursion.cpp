#include<iostream>
using namespace std;
int cal_sum(int n){
	if (n<=1){return n;
	
	}return n+cal_sum(n-1);
	
}
int main(){
	
	int num;
	cout<<"enter num: ";
	cin>>num;
	int result= cal_sum(num);
	cout<<"\nsum of natural number from 1 to entered number: "<<result;
	return 0;
}
