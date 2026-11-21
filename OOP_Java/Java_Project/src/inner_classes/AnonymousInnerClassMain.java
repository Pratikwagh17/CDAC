package inner_classes;

public class AnonymousInnerClassMain {

	public static void main(String[] args) {
		CurrencyConverter converter;
		/*
		converter = new CurrencyConverter() {

			@Override
			public float doConvert(float amountInRupees) {
				// TODO Auto-generated method stub
				return amountInRupees / 8.75f;
			}
			
		};*/
		
		converter = new CurrencyConverter() {
			
			@Override
			public float doConvert(float amount) {
				// TODO Auto-generated method stub
				return amount / 8.23f;
			}
		};
		System.out.println(converter.doConvert(50000));
		

	}

}
