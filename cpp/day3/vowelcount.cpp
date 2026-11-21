#include<iostream>
#include<string>
//vowels:a e i o u
using namespace std;
int main()
{
	string line;
	int count=0;
	cout<<"Enter a line:";
	getline(cin,line);
	//count vowel
	for(char c:line)
	{
		if(c=='a'|| c=='e'|| c=='i'|| c=='o'|| c=='u')
			count++;
	}
	cout<<"\nTotal vowels in line are:"<<count;
	return 0;
}
