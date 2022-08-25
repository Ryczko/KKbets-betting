import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
${normalize}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0; 
}


::-webkit-scrollbar-track {
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 2px;
	background-color: ${({ theme }) => theme.colors.background.dark};
}

::-webkit-scrollbar {
	width: 5px;
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	border-radius: 2px;
	box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.accent.light};
	background-color: ${({ theme }) => theme.colors.accent.light};
}

body {
  background-color: ${({ theme }) => theme.colors.background.dark};
  font-family: 'Arimo', sans-serif;
  color: ${({ theme }) => theme.colors.font.dark};
  overflow-y: scroll;
}

a {
  color: ${({ theme }) => theme.colors.font.dark};
  text-decoration: none;
}

.MuiAutocomplete-root, .MuiFormControl-root, .MuiTextField-root {
  margin: 0;
}

main {
  min-height: 100%;
  padding-bottom: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    padding-bottom: 0;
  }
}

.display-above-md {
  display: none;
  
   @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
     display: block;
   }
}

.display-above-sm {
  display: none;
  
   @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
     display: block;
   }
}

`;
