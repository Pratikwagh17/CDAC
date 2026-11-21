#include <iostream>
#include <string>
//Take a line of string. Print the frequency of every alphabet. 
using namespace std;

int main()
{
    string a[]={"rahul","krushna","abhishek","pratik","prajwal"};
    cout<<"Array:";
    for(string i:a)
    	cout<<i<<", ";
    for(string i=0;i<sizeof(a)/sizeof(a[0]);i++)
    	{
    		for(string j=0;j<sizeof(a)/sizeof(a[0])-1;j++)
    		{
    			if(a[j]>a[j+1])
    			{
    				int temp=a[j];
    				a[j]=a[j+1];
    				a[j+1]=temp;
				}
			}
		}
	cout<<"\nSorted Array:";
    for(string i:a)
    	cout<<i<<", ";	
    
    
    return 0;
}
