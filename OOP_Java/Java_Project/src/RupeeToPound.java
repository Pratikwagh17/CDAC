
public class RupeeToPound implements CurrencyConverter {

	@Override
	public float doConvert(float amountInRupees) {
		float amountInPounds = amountInRupees / POUND_TO_RUPEE;
		// TODO Auto-generated method stub
		return amountInPounds;
	}

}
