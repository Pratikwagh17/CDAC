#include<iostream>
//Find minimum and maximum in the given array, along with the position of each. 
using namespace std;
int main()
{
	int a[]={66,11,55,22,99,88,77,12,45,67,89,34,28,19};
	int size=sizeof(a)/sizeof(a[0]);
	//Size of entire array / size of one block 
	//56/4-->14
	cout<<"\nArray length is:"<<size;
	//create references for min,min_position,max,max_position
	int min_position,max_position;
	min=max=a[];
	min_position=max_position=0;
	for(int index=1;index<size;index++)
	{
	  //If  a[index] is less than `minimum`, update `minimum` and `minimum_position`. 
	  
	  //If a[index]  is more than `maximum`, update `maximum` and `maximum_position`. 
	}
	//Print minimum and position of minimum. 
	//Print the maximum and the position of the maximum. 
	
	return 0;
}

