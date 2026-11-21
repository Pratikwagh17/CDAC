
#include <iostream>
using namespace std;
//Default value parameter 
//A parameter which will only be used if the user does not provide 
//Values are given directly in the function definition and activated only if the user fails to provide. 

void display(string name,string nationality="indian")
{
	cout<<"\nenter name :"<<name;
	cout<<"\nenter nationality: "<<nationality;
	
}

int main()
{

    display("amar");
    display("indian");
    
    return 0;
}
