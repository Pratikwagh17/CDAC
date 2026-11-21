#include<iostream>
#include<string>
using namespace std;
int main(){
/*	

	string teatype;
	float price;
	char rating;
	
	cout<<"tea type"<<endl;
	getline(cin,teatype);
	cout<<"price of tea per serve: "<<endl;
	cin>>price;
	cout<<"Give a rating: "<<endl;
	cin>>rating;
	
	
	cout<<"I want"<<teatype<<"tea" <<endl;
	cout<<price<<endl;
	cout<< rating<<endl;
	*/
	


/*	
	string teatype;
	int price;
	float roundprice=(float) price;
	
	cout<<"which tea you want "<<endl;
	cin>>teatype;
	
	cout<<"price of tea "<<endl;
	cin>>price;
	
	
	roundprice=price+ price*0.1;
	
	cout<<"price after discount "<<roundprice;
	
	*/
	
	
	
/*	
	string fav_tea;
	int quantity;
	
	cout<<"tea you want "<<endl;
	getline(cin,fav_tea);
	
	cout<<"quantity "<<endl;
	cin>>quantity;
	
	cout<< fav_tea<<endl;
	cout<<"i want "<<quantity<< " cup of tea ";
	
	*/


/*	
	
//	int cups;
	float teapack, price,totalprice;
	
	cout<<"tea pack you want: ";
	cin>>teapack;
	
	cout<<"price of tea: "<<endl;
	cin>>price;
	
	totalprice= price +(price*0.1);
	cout<<"total price of tea: "<<totalprice;	
	
	*/
	
	
	
	
	
/*	
	
	
	int teabags;
	 
	cout<<"no. of tea bags: "<<endl;
	cin>>teabags;
	
	if(teabags<20){
	int teabagsgot=teabags+10;
		cout<<"got teabags: "<<teabagsgot;		
		
	}	
	
	else{
		cout<<"better luck nxt time!!!";
	}
	
	*/
	
	
	
/*	
	
	 int cups,memberyear ;
	 
	 cout<<"cups of tea you buy: "<<endl;
	 cin>>cups;
	 
	 cout<<"membership since: "<<endl;
	 cin>>memberyear;
	 
	 if(cups>12 || memberyear>1){
	 	cout<<"got a discount"<<endl;
		 	 	
	 }else{
	 	cout<<"better luck next time!!!";
	 }
	
	*/
	
	/*
	
	string teaorder;
	
	cout<<"order of tea: "<<endl;
	getline(cin, teaorder);
	
	if(teaorder=="green tea"){
		cout<<"your order has been confirm"<<endl;
	}
	else{
		cout<<"enter valid item"<<endl;
	}
	
	*/
	
	
/*	
	
	int hour;
	cout<<"enter current time: "<<endl;
	cin>>hour;
	
	if(hour>=8 && hour<=18){
		cout<<"tea shop is open!";
	} 
	else{
		cout<<"the shop is closed!";
	}
	
	*/
/*	
	
	int teatype;
	double price;
	
	cout<<"enter a choice:"<<endl;
	cout<<"1.lemon tea"<<endl;
	cout<<"2. black tea"<<endl;
	cout<<"3.tea"<<endl;
	cout<<"invalid inputs"<<endl;
	 cin>>teatype;

	
	switch(teatype){
		case 1:
			price=20;
			cout<<"you enter lemon tea"<<price;
			break;
			
		case 2:
			price=30;
			cout<<"you enter black tea"<<price;
			break;
			
		case 3:
			price=40;
			cout<<"you enter tea"<<price;
			break;
			
		default:
			
			cout<<"invalid input";
			break;
	}
	*/
	
	
/*	
	int cups;
	
	cout<<"total cups: "<<endl;
	cin>>cups;
	
	while(cups>0){
		cups--;
		cout<<"1 cup served"<<endl;
		cout<<"reamaining cups"<<cups<<endl;
		
	}
	cout<< "all the tea cups are served";
	
	*/  
	
	string wanttea;
	
	do{
		cout<<"you want tea? ";
		getline(cin,wanttea);
	}
	while(wanttea=="no" || wanttea=="No");
	
	  
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	return 0;
}