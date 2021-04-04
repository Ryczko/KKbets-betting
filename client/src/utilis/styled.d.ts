import 'styled-componets';

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: {
            md: string;
        };
        colors: {
            black: {
                dark: string;
                medium: string;
                light: string;
                theLightest: string;
            };
            green: {
                light: string;
                dark: string;
            };
            white: {
                dark: string;
            };
        };
    }
}
