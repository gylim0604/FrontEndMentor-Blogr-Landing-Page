import { Global } from '@emotion/react';

const Fonts = () => (
    <Global
        styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,600;1,300&family=Ubuntu:wght@400;500;700&display=swap*/

      /* latin-ext */
        @font-face {
        font-family: 'Overpass';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/overpass/v5/qFdC35WCmI96Ajtm81Gga3LI0hYojmI7.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
        font-family: 'Overpass';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/overpass/v5/qFdC35WCmI96Ajtm81Gga3LI0hgojg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
        font-family: 'Overpass';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/overpass/v5/qFdA35WCmI96Ajtm81l6d87D4howig.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
        font-family: 'Overpass';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/overpass/v5/qFdA35WCmI96Ajtm81l6d87N4ho.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCs6KVjbNBYlgoKcg72j00.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCs6KVjbNBYlgoKew72j00.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCs6KVjbNBYlgoKcw72j00.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCs6KVjbNBYlgoKfA72j00.woff2) format('woff2');
        unicode-range: U+0370-03FF;
        }
        /* latin-ext */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCs6KVjbNBYlgoKcQ72j00.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCs6KVjbNBYlgoKfw72.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCjC3jvWyNL4U.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCjC3jtGyNL4U.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCjC3jvGyNL4U.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCjC3js2yNL4U.woff2) format('woff2');
        unicode-range: U+0370-03FF;
        }
        /* latin-ext */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCjC3jvmyNL4U.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCjC3jsGyN.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjvWyNL4U.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjtGyNL4U.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjvGyNL4U.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjs2yNL4U.woff2) format('woff2');
        unicode-range: U+0370-03FF;
        }
        /* latin-ext */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjvmyNL4U.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjsGyN.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
@font-face {
  font-family: 'Julius Sans One';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/juliussansone/v9/1Pt2g8TAX_SGgBGUi0tGOYEga5WOzHsX2aE.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Julius Sans One';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/juliussansone/v9/1Pt2g8TAX_SGgBGUi0tGOYEga5WOwnsX.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

        
      `}
    />
);
