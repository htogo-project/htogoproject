import { injectGlobal } from "emotion"

injectGlobal`
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@600&display=swap');
*, *:before, *:after {
box-sizing: inherit;
}
@font-face {
  font-family: 'Signika';
  src: url('https://fonts.googleapis.com/css2?family=Signika:wght@600&display=swap');
}
html {
  box-sizing: border-box;
}
body {
  font-family: 'Signika', sans-serif;
}
`
