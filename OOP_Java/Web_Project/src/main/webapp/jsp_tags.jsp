<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="java.time.LocalDate,java.time.LocalTime" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
	<body>
		<%-- Including the resource: demo.html --%>
		<%@ include file="test.html" %>
		<h2> Welcome to JSP tags demonstration</h2>
		<%-- Declaring a variable and defining some methods --%>
		<%!
		int num = 7 ;
		public String sayWelcome(String name){
				return "Welcome" + name;
							
		}		
		%>
		<h2>Num= <%=num %></h2>
		<h2>Square of <%=num %>is <%=(num*num) %></h2>
		<h2>Is <%=num  %> &lt; 9?<%=(num<9) %></h2>
		<h2>The method is saying <%=sayWelcome("jack") %></h2>
		<%-- Printing HELLO 5 times using h1 element --%>
		<%
		for (int i=1;i<=5;i++){
					
		%>
		<h1>HELLO</h1>
		<%
			}
		%>
		
		<%-- Displaying current date and local time using local date and local time --%>
		<%
		LocalDate today = LocalDate.now();
		LocalTime now = LocalTime.now();
		%>
		<h2>Todays Date is: <%=today %></h2>
		<h2>Current Time is: <%=now %></h2>
		
	</body>
</html>