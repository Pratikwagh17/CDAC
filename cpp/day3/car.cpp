
#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
//	int n=5;
	cout<<"X";
	
  
  for(int i=1;i<=5  ;i++)  
  {
  	
  	cout<<"\nx"<<setw(i)<<"x";
  	//               1            X      
  	//               2            XX     
	 //              3            XXX    
  }
  cout<<"\n********";
 
    /*cout << left << setw(15) << "Name"
         << setw(10) << "Roll"
         << setw(10) << "Marks" << endl;

    cout << left << setw(15) << name
         << setw(10) << roll
         << fixed << setprecision(2) << marks << endl;
*/
    return 0;
}
 