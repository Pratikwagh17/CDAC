package example.listeners;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;
import jakarta.servlet.annotation.WebListener;

/**
 * Application Lifecycle Listener implementation class WebAppListeners
 *
 */
@WebListener
public class WebAppListeners implements ServletContextListener {

    /**
     * Default constructor. 
     */
    public WebAppListeners() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see ServletContextListener#contextInitialized(ServletContextEvent)
     */
    public void contextInitialized(ServletContextEvent sce)  { 
    	System.out.println("Application is starting up...");
    	//Obtaining  a handel to the application specific object i.e. ServletContext
    	ServletContext appContext = sce.getServletContext();
    	//Binding some data at application level
    	appContext.setAttribute("ourSlogan","Change is the way of life");
    }

	/**
     * @see ServletContextListener#contextDestroyed(ServletContextEvent)
     */
    public void contextDestroyed(ServletContextEvent sce)  { 
    	System.out.println("Application is shutting down...");
    }
	
}
