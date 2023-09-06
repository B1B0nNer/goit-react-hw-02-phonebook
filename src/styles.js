import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *,
    ::after,
    ::before {
        box-sizing: border-box;
    }
`;