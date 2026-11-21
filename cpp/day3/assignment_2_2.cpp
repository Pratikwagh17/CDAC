#include <iostream>
using namespace std;
int main(){
	int rows=3,cols=3;
	int m[rows][cols];
	for (int r=0;r<rows;r++)
	{	
		for (int c=0;c<cols;c++)
	{
		cout<<"enter the matrix: for m["<<r<<"]["<<c<<"]:";
		cin>>m[r][c];
	}
	}
	
	cout<<"\n your written matrix is: \n";
	for (int r=0;r<rows;r++)
	{
		int rsum=0;
		
		for (int c=0;c<cols;c++)
		{			
			cout<<m[r][c]<<"\t";
			rsum+=m[r][c];
		}
		cout<<"  "<<rsum<<endl;
		cout<<endl;
	}
	int totsum=0;
	for (int c=0;c<cols;c++)
	{
		int csum=0;
		for (int r=0;r<rows;r++)
		{
			csum+=m[r][c];
		}
		cout<<csum<<"\t";
		totsum += csum;
	}
		cout<<endl;
		cout<<endl;
	cout<<"Grand Total: "<<totsum<<endl;
	cout<<endl;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	return 0;
}