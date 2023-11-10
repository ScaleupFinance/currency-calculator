interface FooterProps {
  baseCurrency: string;
  rate: number;
  targetCurrency: string;
}

export const Footer = ({ baseCurrency, rate, targetCurrency }: FooterProps) => (
  <footer>
    <p>Indicative Exchange Rate</p>
    <p>
      1 {baseCurrency} = {rate} {targetCurrency}
    </p>
  </footer>
);
