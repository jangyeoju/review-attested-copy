const calcRem = (size) => `${size / 10}rem`;

const spacing = {
  _3: calcRem(3),
  _5: calcRem(5),
  _8: calcRem(8),
  _10: calcRem(10),
  _20: calcRem(20),
  _30: calcRem(30),
  _40: calcRem(40),
  _60: calcRem(60),
  _80: calcRem(80),
  _100: calcRem(100),
  _150: calcRem(150),
  _200: calcRem(200),
  _300: calcRem(300),
};

const fontSizes = {
  t50: calcRem(50),
  t35: calcRem(35),
  t30: calcRem(30),
  t25: calcRem(25),
  t23: calcRem(23),
  t20: calcRem(20),
  t18: calcRem(18),
  t16: calcRem(16),
  t14: calcRem(14),
  t12: calcRem(12),
  t10: calcRem(10),
  t9: calcRem(9),
};

const deviceSizes = {
  mobile5: 320,
  mobile4: 360,
  mobile3: 480,
  mobile2: 768,
  mobile: 968,
  tablet: 1040,
  desktop2: 1380,
  desktop: 1720,
};

const colors = {
  F9: "#F9F5F2",
  F9_50: "rgba(249,245,242,.5)",
  primary: "#FF4C46",
  secondary: "#00C3A3",
  textColor: "#3b3b3b",
  secondaryTextColor: "rgba(0,0,0,.7)",
  grayColor: "rgba(0,0,0,.2)",
  grayColor2: "rgba(0,0,0,.4)",
};

const effect = {
  SHADOW: `background: #C4C4C4; box-shadow: 0px 0.3px 0.5px rgba(0, 0, 0, 0.25);`,
  SHADOW2: `background: #C4C4C4; box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);`,
};

const device = {
  mobile: `(max-width : ${deviceSizes.mobile}px)`,
  mobile2: `(max-width : ${deviceSizes.mobile2}px)`,
  mobile3: `(max-width : ${deviceSizes.mobile3}px)`,
  mobile4: `(max-width : ${deviceSizes.mobile4}px)`,
  mobile5: `(max-width : ${deviceSizes.mobile5}px)`,
  tablet: `(max-width : ${deviceSizes.tablet}px)`,
  desktop2: `(max-width : ${deviceSizes.desktop2}px)`,
  desktop: `(max-width : ${deviceSizes.desktop}px)`,
};

/*
const buttonSize = {
  button1: "39.2rem",
  button2: "29rem",
  button3: "18.5rem",
};
*/
const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  effect,
  spacing,
};

export default theme;
