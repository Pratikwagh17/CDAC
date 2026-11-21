package io_programming;
import java.io.Serializable;

public class Flight implements Serializable{

	
		private String flightno;
		private String airline;
		private String source;
		private String destination;
		
		public Flight() {
			
		}
		public Flight(String flightno, String airline, String source, String destination) {
			super();
			this.flightno = flightno;
			this.airline = airline;
			this.source = source;
			this.destination = destination;
		}

		public String getFlightno() {
			return flightno;
		}

		public void setFlightno(String flightno) {
			this.flightno = flightno;
		}

		public String getAirline() {
			return airline;
		}

		public void setAirline(String airline) {
			this.airline = airline;
		}

		public String getSource() {
			return source;
		}

		public void setSource(String source) {
			this.source = source;
		}

		public String getDestination() {
			return destination;
		}

		public void setDestination(String destination) {
			this.destination = destination;
		}
		@Override
		public String toString() {
			return "Flight [flightno=" + flightno + ", airline=" + airline + ", source=" + source + ", destination="
					+ destination + "]";
		}

		
		
	}


