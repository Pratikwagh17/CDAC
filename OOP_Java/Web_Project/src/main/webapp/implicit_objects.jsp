<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
	<body>
		<%-- Demonstrating some implicit objects --%>
		<%-- Obtaining session ID --%>
		<%
		String SessionID=session.getId();
		%>
		<%-- Obtaining our slogan form application specific object --%>
		<%
		Object slogan = application.getAttribute("ourSlogan");
		%>
		<%-- Displaying sessionid and slogan --%>
		<%
		out.println("<h2> session ID: "+ SessionID +"</h2>");
		out.println("<h2> our slogan: "+ slogan +"</h2>");
		%>	
	</body>
</html>