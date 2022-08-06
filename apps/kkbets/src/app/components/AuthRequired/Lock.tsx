import React from 'react';
import { useTheme } from 'styled-components';

function Lock(): JSX.Element {
  const theme = useTheme();
  return (
    <svg
      id="bold"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      width="120px"
      xmlns="http://www.w3.org/2000/svg"
      fill={theme.colors.accent.light}
    >
      <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
    </svg>
  );
}

export default Lock;
