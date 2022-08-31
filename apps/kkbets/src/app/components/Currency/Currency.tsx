import { useTheme } from 'styled-components';
import { StyledCurrency } from './Currency.css';

export interface CurrencyProps {
  value: number | string;
  size?: number;
  leftSpacing?: number;
}

export default function Currency({ value, size, leftSpacing = 4 }: CurrencyProps) {
  const theme = useTheme();

  return (
    <StyledCurrency className="currency-wrapper" value={value} size={size} leftSpacing={leftSpacing}>
      <div className="value">{value}</div>
      <svg version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <title>points</title>
        <g fill={theme.colors.accent.light} transform="translate(-92.701 -72.378)">
          <path d="m117.7 72.378a25 25 0 0 0-25 25 25 25 0 0 0 25 25 25 25 0 0 0 25-25 25 25 0 0 0-25-25zm-11.408 10.946h6.92v12.724l9.5875-12.724h8.0192l-10.488 13.007 11.011 15.103h-8.4884l-8.0192-11.252-1.6221 2.0578v9.1938h-6.92v-28.11z" />
        </g>
      </svg>
    </StyledCurrency>
  );
}
