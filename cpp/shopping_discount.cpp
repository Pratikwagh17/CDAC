#include <iostream>
using namespace std;
int main(){
	float p;
	cout<<"price of product: ";
	cin>>p;
	if (p>=5000){
	cout<<"get the discount: "<<p*0.1;
	cout<<"\nfinal amout after discount: "<<p-(p*0.1);

	}
	else{
		cout<<"not eligible for discount!!!";
		cout<<"\nfinal amount:"<<p;
		
	}
	
	
	return 0;
}
