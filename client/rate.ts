export const rate = (base: string, target: string) =>
  fetch(
    `https://api.currencyfreaks.com/latest?apikey=${process.env.CURRENCY_FREAKS_API_KEY}&base=${base}&symbols=${target}`
  );
