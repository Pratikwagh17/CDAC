#include <iostream>
#include<string>
using namespace std;

int main(){

int num;
cout<<"enter a number: ";
cin>>num;
auto checkevenodd=[](int n)->string{
if(n%2==0){
	return "even";
}else{
	return "odd";
}
};
string result = checkevenodd(num);
cout<<"\n"<<num<<" is "<<result<<" number"<<endl;
return 0;
}