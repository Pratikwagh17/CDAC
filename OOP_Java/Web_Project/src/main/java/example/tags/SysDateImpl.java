package example.tags;

import java.io.IOException;
import java.time.LocalDate;

import jakarta.servlet.jsp.JspException;
import jakarta.servlet.jsp.JspWriter;
import jakarta.servlet.jsp.tagext.TagSupport;

public class SysDateImpl extends TagSupport{
	//Do start tag
	@Override
	public int doStartTag() throws JspException{
		return EVAL_BODY_INCLUDE;
	}
	
	
	//do end tag
	@Override
	public int doEndTag() throws JspException{
		JspWriter out = pageContext.getOut();
		LocalDate today = LocalDate.now();
		try {
			out.print("<h2>Todays date is " + today +"</h2>");
		}catch (IOException e) {
		e.printStackTrace();
		}
		return EVAL_PAGE;
	}

}
