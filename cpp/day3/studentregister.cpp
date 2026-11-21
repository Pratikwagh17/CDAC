#include <iostream>
using namespace std;

class Student
{
private:
	static int count;
	int roll_no;
	string name,gender;
public:
	//Create a `register_student` method 
	//which will accept name and gender from the user 
	//print on screen: "Student successfully registered with a roll number auto-generated." 
    register_student(string name,string gender)
    {
        count++;
        this->name=name;
        this->gender=gender;
        this->roll_no=count;
        cout<<"\nSuccessfully registered. Remember your roll number is "<<roll_no;
    }
	void display_student():
		{
			cout<<"\nRollno:"<<rollno<<"\tName:"<<name<<"\tGender:"<<gender;
		}
//get_count():Will return total number of students created so far 
 int get_count()
    {
		return(count);
    }
//get_roll():Return private data, that is, roll number, to outside the main method. 
 int get_roll()
    {
		return(roll_no);
    }
};


int Student::count;

int main()
{
    Student s1;
    
    s1.showCount();
    Student s2;
    s2.showCount();
    Student s3;
    Student::showCount();//Even a static member function has to be accessed using scope resolution. 
	cout<<"\nAccessing count:"<<Student::count;
		//When a static member is to be accessed outside the class, provided it is public, 
		//one must specify the name of the class, followed by scope resolution(::), 
		//followed by the name of the variable. 
    return 0;
}

