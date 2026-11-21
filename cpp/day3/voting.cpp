#include <iostream>
#include<string>
using namespace std;
 class human{
 private:
 	string name,gender;
 	int  age;
 	 public:
 	 	void set_age(float age){ 
		  this->age=age;
 	 	
		  }
 	 	void set_gender (string gender){
 	 		this->gender=gender;
		  }
 	void set_name(string name){
	 this->name=name;
	 	 }
	 	 void display_age()
	 {
	 	cout<<"age"<<age;
	 	
	 }
	 void display_name()
	 {
	 	cout<<"name"<<name;
	 	
	 }
	 void display_gender(){
	 	cout<<"gender is "<<gender;


	 };
	 
 	void can_vote(){
	
 	if (age >= 18){
 		cout<<name<<"can vote";	
	 }
	 else {
	 	cout<<"can not vote";
	}
 	
 	 }
 };
 
 
 
 
 
 
 
 int main(){
 	human h1;

    h1.set_name(" samar ");
    h1.set_age(25);
    h1.set_gender("  male  ");

    h1.display_name();
    h1.display_age();

    h1.display_gender();


    h1.can_vote();

    return 0;

 	
 }