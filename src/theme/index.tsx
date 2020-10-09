import colors from './colors';

const breakpoints = {
    mobile: 0,
    tablet: 600,
    desktop: 960,
    xlDesktop: 1280,
    xxlDesktop: 1920
}

const tablet = `@media only screen and (min-width: ${breakpoints.tablet}px)`;
const desktop = `@media only screen and (min-width: ${breakpoints.desktop}px)`;
const mobileOnly = `@media only screen and (max-width: ${breakpoints.tablet - 1}px)`;

const media = {
    mobile: mobileOnly,
    tablet,
    desktop
}

export const theme = {
    breakpoints,
    media,
    colors
};