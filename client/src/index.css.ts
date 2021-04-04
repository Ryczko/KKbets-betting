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
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar {
	width: 5px;
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}

body {
  background-color: ${({ theme }) => theme.colors.black.dark};
  font-family: 'Arimo', sans-serif;
  color: ${({ theme }) => theme.colors.white.dark};
}

a {
  color: ${({ theme }) => theme.colors.white.dark};
  text-decoration: none;
}

main {
  min-height: 100%;
  padding-bottom: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    padding-bottom: 0;
  }
}
`;
