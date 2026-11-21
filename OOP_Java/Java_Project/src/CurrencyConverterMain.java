
public class CurrencyConverterMain {

	public static void main(String[] args) {
		System.out.println("Today's exchange rate: ");
		System.out.println("USD to RS." + CurrencyConverter.DOLLAR_TO_RUPEE);
		
		CurrencyConverter converter;
		converter = new DollarToRupeeConverter();
		float rupee= converter.doConvert(5000);
		System.out.println("$5000=Rs. " + rupee);
		System.out.println("======================================================");
		
		converter = new RupeeToPound();
		float pounds= converter.doConvert(1500000);
		System.out.println("Rs. 1500000 = GBP. " + pounds );
		

	}

}
