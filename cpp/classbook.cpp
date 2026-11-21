#include <iostream>
using namespace std;
class person {
	string name;
	int age;
	
	public:
		void getdata(void);
		void display(void);
			
};

void person :: getdata(void) {
	
	cout<<"enter name: ";
	cin>>name;
	cout<< "enter age: ";
	cin>>age;
	
}
void person :: display(void){
	cout<<"\nnamee: "<<name;
	cout<<"\nagee: "<<age;
	
}

int main(){
	person p;
	p.getdata();
	p.display();
	
	return 0;
}