#include <iostream>
#include<string>
using namespace std;

class Human
{
public:
    string name, gender;

    void showName()
    {
        cout << "Name: " << name << endl;
        cout << "gender: " << gender << endl;

    }
};

class Student : public Human
{
public:
    string degree;

    void Degree()
    {
        cout<<"Degree: "<<degree<< endl;
    }
};

class Employee : public Student
{
public:
    int salary;

    void showsalary()
    {
        cout << "Salary: " << salary << endl;
    }
};

int main()
{
    Employee s;

    s.name = "Amit";
    s.gender = "M";
    s.degree = 101;
//    s.Degree = "Computer Engineering";

    s.showName();
    s.gender;
//    s.showRollNo();
//    s.showDegree();

    return 0;
}
