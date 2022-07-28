import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      md: string;
      sm: string;
    };
    colors: {
      background: {
        dark: string;
        medium: string;
        light: string;
      };
      accent: {
        light: string;
        dark: string;
      };
      font: {
        light: string;
        dark: string;
      };
    };
  }
}
