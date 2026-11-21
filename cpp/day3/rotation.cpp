#include<iostream>
//A user has been provided with an array of five elements. Accept from the user a number of types `rotation` and perform a clockwise rotation in the given array,
// printing every pass, every rotation in the process.  
using namespace std;
int main()
{
	int a[]={11,22,33,44,55};
	int size=sizeof(a)/sizeof(a[0]);
	cout<<"\nArray length is:"<<size;
	int rotations;
	cout<<"\nEnter the number of times rotation is needed: ";
	cin>>rotations;
	

	//print
	for(int index=0;index<size;index++;min,max)
	{
		cout<<"\na["<<index<<"]:"<<a[index];
	
	}
	//Print minimum and position of minimum. 
	cout<<"\nMinimum element "<<min<<" and is located at "<<min_position;
	//Print the maximum and the position of the maximum. 
	cout<<"\nMaximum element "<<max<<" and is located at "<<max_position;	
	return 0;
}

