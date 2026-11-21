#include <iostream>
#include<string>
using namespace std;
int main(){
	string s;
	int u_count,l_count,num_count,w_count;
	cout<<"write a sentence: ";
	getline(cin,s);
	for (int i=0;i<s.length();i++)
	
	{
		if(s[i]>='A' && s[i]<='Z')
		{
			u_count++;
		}
		else if(s[i]>='a'&&s[i]<='z')
		{
			l_count++;	
		}
		else if(s[i]>='0'&& s[i]<='9')
		{
			num_count++;
		}
		else if (s[i]==' ')
		{
			w_count++;
		}
}
	
	
	cout<<"count of all upper and lower "<<s.size()<<endl;
	cout<<"count of upper case: "<<u_count<<endl;
	cout<<"count of numbers: "<<num_count<<endl;
	cout<<"count of number of words: "<<w_count;
	return 0;
}