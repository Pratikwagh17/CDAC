#include<iostream>
using namespace std;
int min(int no1,int no2)
{
	if(no1<no2)
		return no1;
	else
		return no2;
}

int main()
{
   int no1,no2,no3,no4;
   cout<<"enter the no.: ";
   cin>>no1>>no2>>no3>>no4;
   cout<<"min is:  "<<min(min(no1,no2),min(no3,no4));
   //without modifying fucntion find min of 4 and print it
   //assume no duplicates
   return 0;
}
