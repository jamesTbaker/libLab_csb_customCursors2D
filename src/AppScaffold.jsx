import { normalize } from 'styled-normalize';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import {
	gridBase,
	color,
	fontPrimaryName,
	fontFallbacksNames,
	deviceWidthQuery,
	typeStyle,
	hiddenBlock,
} from '@jbkr/style-service';

const GlobalStyle = createGlobalStyle`

	${normalize}

	* {
		box-sizing: border-box;
	}
	html {
		font-size: ${gridBase()}px;
		scroll-behavior: smooth;
		/* prevent font zooming on mobile */
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}
	body {
		position: relative;
		font-family: ${fontFallbacksNames};
		font-size: 2rem;
		text-align: left;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		color: ${color({
			kind: 'Neutral',
			tone: 'Finch',
			level: 4,
			format: 'string',
		})};
		background-color: ${color({
			kind: 'Neutral',
			tone: 'Finch',
			level: 39,
			format: 'string',
		})};
		${deviceWidthQuery.only({ width: 's' })} {
			${typeStyle({
				deviceWidth: 's',
				size: 's',
				weight: 'regular',
				usage: 'body',
			})}
		}
		${deviceWidthQuery.only({ width: 'm' })} {
			${typeStyle({
				deviceWidth: 'm',
				size: 's',
				weight: 'regular',
				usage: 'body',
			})}
		}
		${deviceWidthQuery.only({ width: 'l' })} {
			${typeStyle({
				deviceWidth: 'l',
				size: 's',
				weight: 'regular',
				usage: 'body',
			})}
		}

	}
	@supports (font-variation-settings: normal) {
		body {
			font-family: ${fontPrimaryName}, ${fontFallbacksNames};
		}
	}
	h1 {
		color: ${color({
			kind: 'Neutral',
			tone: 'Finch',
			level: 7,
			format: 'string',
		})};
		${deviceWidthQuery.only({ width: 's' })} {
			${typeStyle({
				deviceWidth: 's',
				size: '2xl',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'm' })} {
			${typeStyle({
				deviceWidth: 'm',
				size: '2xl',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'l' })} {
			${typeStyle({
				deviceWidth: 'l',
				size: '2xl',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
	}
	h2 {
		${deviceWidthQuery.only({ width: 's' })} {
			${typeStyle({
				deviceWidth: 's',
				size: '1xl',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'm' })} {
			${typeStyle({
				deviceWidth: 'm',
				size: '1xl',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'l' })} {
			${typeStyle({
				deviceWidth: 'l',
				size: '1xl',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
	}
	h3 {
		${deviceWidthQuery.only({ width: 's' })} {
			${typeStyle({
				deviceWidth: 's',
				size: 'l',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'm' })} {
			${typeStyle({
				deviceWidth: 'm',
				size: 'l',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'l' })} {
			${typeStyle({
				deviceWidth: 'l',
				size: 'l',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
	}
	h4 {
		${deviceWidthQuery.only({ width: 's' })} {
			${typeStyle({
				deviceWidth: 's',
				size: 'm',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'm' })} {
			${typeStyle({
				deviceWidth: 'm',
				size: 'm',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'l' })} {
			${typeStyle({
				deviceWidth: 'l',
				size: 'm',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
	}
	h5 {
		${deviceWidthQuery.only({ width: 's' })} {
			${typeStyle({
				deviceWidth: 's',
				size: 's',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'm' })} {
			${typeStyle({
				deviceWidth: 'm',
				size: 's',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'l' })} {
			${typeStyle({
				deviceWidth: 'l',
				size: 's',
				weight: 'bold',
				usage: 'display',
				spacedTopAndBottom: true,
			})}
		}
	}
	p, ul, ol {
		margin: 0;
		padding: 0;
		${deviceWidthQuery.only({ width: 's' })} {
			${typeStyle({
				deviceWidth: 's',
				size: 's',
				weight: 'regular',
				usage: 'body',
				spacedBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'm' })} {
			${typeStyle({
				deviceWidth: 'm',
				size: 's',
				weight: 'regular',
				usage: 'body',
				spacedBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'l' })} {
			${typeStyle({
				deviceWidth: 'l',
				size: 's',
				weight: 'regular',
				usage: 'body',
				spacedBottom: true,
			})}
		}
	}
	ul ul,
	ol ol {
		padding: 0;
		margin: 0;
	}
	ul li,
	ol li {
		list-style-position: outside;
		vertical-align: text-top;
	}
	ol li {
		margin: 0 0 0 2rem;
	}
	ul li {
		margin: 0 0 0 2.2rem;
	}
	li::marker {
		color: ${color({
			kind: 'Neutral',
			tone: 'Finch',
			level: 17,
		})};
	}
	ol li::marker {
		font-size: 80%;
	}
	b,
	strong {
		font-weight: 560;
		color: ${color({
			kind: 'Neutral',
			tone: 'Base',
			level: 1,
		})};
	}
	i,
	em,
	cite {
		font-style: italic;
		color: ${color({
			kind: 'Neutral',
			tone: 'Base',
			level: 1,
		})};
	}
	small {
		${deviceWidthQuery.only({ width: 's' })} {
			${typeStyle({
				deviceWidth: 's',
				size: '2xs',
				weight: 'regular',
				usage: 'body',
				spacedBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'm' })} {
			${typeStyle({
				deviceWidth: 'm',
				size: '2xs',
				weight: 'regular',
				usage: 'body',
				spacedBottom: true,
			})}
		}
		${deviceWidthQuery.only({ width: 'l' })} {
			${typeStyle({
				deviceWidth: 'l',
				size: '2xs',
				weight: 'regular',
				usage: 'body',
				spacedBottom: true,
			})}
		}
	}
	a.running-text,
	a.running-text:visited {
		text-decoration: none;
		color: ${color({
			kind: 'Neutral',
			tone: 'Finch',
			level: 1,
			format: 'string',
		})};
		background-image: linear-gradient(
			${color({
				kind: 'Neutral',
				tone: 'Finch',
				level: 31,
				format: 'string',
			})} 50%,
			${color({
				kind: 'Brand',
				tone: 'Peony',
				level: 3,
				format: 'string',
			})} 50%
		);
		background-size: auto 200%;
		background-position-y: 10%;
		transition: all 250ms ease;
		&:hover {
			color: ${color({
				kind: 'Neutral',
				tone: 'Finch',
				level: 41,
				format: 'string',
			})};
			background-position-y: 100%;
			border-radius: .25rem;
		}
		&:focus {
			outline: none;
			padding: 0 .5rem;
			margin: 0 .25rem;
			border-radius: .25rem;
			box-shadow: 0 0 0 .25rem ${color({
				kind: 'Neutral',
				tone: 'Finch',
				level: 41,
				format: 'string',
			})}, 0 0 0 .5rem ${color({
	kind: 'Accent',
	tone: 'Finch',
	level: 1,
	format: 'string',
})};
		}
	}
`;
const SkipLinksContainer = styled.ul`
	${hiddenBlock}
`;
const MainContentContainer = styled.main``;

export const AppScaffold = ({ title, children }) => {
	return (
		<>
			<GlobalStyle />
			<Helmet>
				<title>{title} | jbkr</title>
			</Helmet>
			<SkipLinksContainer>
				<a href="#main-content">Skip to this page's main content.</a>
			</SkipLinksContainer>
			<MainContentContainer id="main-content">
				{children}
			</MainContentContainer>
		</>
	);
};
