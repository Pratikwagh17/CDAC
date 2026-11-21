#include<iostream>
using namespace std;
void area(int r)
{
	cout<<"\n"<<"area of circle"<<"="<<(3.14*r*r);
}
int main ()
{
	int r;
   cout<<"\nradius of circle: ";
      cin>>r;  

   area(r);//pass by value
   return 0;
	
}

