export const currencies = () =>
  fetch(
    "https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=" +
      process.env.CURRENCY_FREAKS_API_KEY
  );
