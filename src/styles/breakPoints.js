export const sizes = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
  };
  
  export const breakPoints = Object.keys(sizes).reduce((acc, cur) => {
    acc[cur] = `@media (min-width: ${sizes[cur]}px)`;
    return acc;
  }, {});
  