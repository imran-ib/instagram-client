import styled, {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
} from 'styled-components';
import { normalize } from 'styled-normalize';
import { generateMedia } from 'styled-media-query';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

const BOX_BORDER = '1px solid #e6e6e6';
const BORDER_RADIUS = '4px';

export const theme = {
  maxWidth: '935px',
  bgColor: '#FAFAFA',
  blackColor: '#262626',
  darkGreyColor: '#999',
  lightGreyColor: '#c7c7c7',
  redColor: '#ED4956',
  blueColor: '#3897f0',
  darkBlueColor: '#003569',
  boxBorder: '1px solid #e6e6e6',
  borderRadius: '4px',
  whiteBox: `border:${BOX_BORDER};
             border-radius:${BORDER_RADIUS};
             background-color:white;
            `,
};

export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
${normalize}
* {
        box-sizing:border-box;
    }
    body {
        background-color:${(props) => props.theme.bgColor};
        color:${(props) => props.theme.blackColor};
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        /* padding-top: 140px; */
    }
    a {
        color:${(props) => props.theme.blueColor};
        text-decoration:none;
        cursor: pointer;
        display: inline-block;
    }



    input:focus{
        outline:none;
    }
`;

export const customMedia = generateMedia({
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
});
