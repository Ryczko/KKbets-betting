import { StyledCurrency } from './Currency.css';

export interface CurrencyProps {
  value: number | string;
  size?: number;
  leftSpacing?: number;
}

export default function Currency({ value, size, leftSpacing = 4 }: CurrencyProps) {
  return (
    <StyledCurrency className="currency-wrapper" value={value} size={size} leftSpacing={leftSpacing}>
      {value}
      <span className="currency">$</span>
    </StyledCurrency>
  );
}
