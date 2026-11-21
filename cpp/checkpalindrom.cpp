#include<iostream>
//Take a number from the user. Print each digit separately. 
//Output is individual digits printed. 
//Process % to extract the last digit and / to remove the last digit. 
//Input is: read the number from the user. 
using namespace std;
int main()
{
	int number,digit,r_number,temp_number;
	cout<<"Enter a number:";
	cin>>number;
	while(number>0)
	{
		number=temp_number 
		digit=number%10;
		number=number/10;
		r_number=r_number*10+digit;
		
		
	}
	cout<<"r_number: "<<r_number;
	
	return 0;
}



