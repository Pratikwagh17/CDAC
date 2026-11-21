#include<iostream>
using namespace std;
int main()
{
	int a[10];
	int sum = 0;
	cout<< "enter 10 elements: \n";
	for (int i = 0;i<10; i++)
	{
		cin>>a[i];
		sum+=a[i];
		
	}
	double avg=sum/10.0;
	cout<<"\nsum= "<<sum<<endl;
	cout<<"average= "<<avg<<endl;
	cout<<"\nelements above average: ";
	int above = 0;
	for (int i=0;i<10;i++)
	{
		if(a[i]>avg)
		{
			cout<<a[i]<<" ";
			above++;
			
		}
		
	}
		cout<<"\n\nelements below average: \n";
		int below=0;
		for (int i =0;i<10;i++)
		{
			if (a[i]<avg)
			{
				cout<<a[i]<<" ";
				below++;
			}
		}

	cout<<"\n\nnumber of elements above average= "<<above<<endl;
	cout<<"number of elements below average = "<<below<<endl;
	





	return 0;
}