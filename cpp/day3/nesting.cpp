#include<iostream>
#include<string>
#include<iomanip>
using namespace std;

float cal_total(float m1, float m2, float m3){
	return m1+ m2+m3;
	
}
float cal_percent(float m1, float m2, float m3){
	float total=cal_total(m1,m2,m3);
	
	return total/3.0f;
}
void display_info(string name, int rollno,float m1,float m2,float m3){
	cout<<"\nstudent name: "<<name<<endl;
	cout<<"roll number: "<<rollno<<endl;
	cout<<"total marks: "<<cal_total(m1,m2,m3)<<endl;
	cout<< fixed<< setprecision(2);
	cout<<"percent: "<<cal_percent(m1,m2,m3)<<endl;
}

int main(){
	string name;
	int rollno;
	float m1,m2,m3;
	cout<< "enter student name: ";
	getline(cin,name);
	cout<<"enter roll no: ";
	cin>>rollno;
	cout<<"enter marks of 3 subject: ";
	cin>>m1>>m2>>m3;
	display_info(name,rollno,m1,m2,m3);
	return 0;
}
