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
  font-size: 62.75%;
  @media(max-width: 650px){
    font-size: 50%;
  }
}
body {
  font-family: 'Signika', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing:border-box;
}
ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.centralizer{
  width: 1333px;
  max-width: 95vw;
  margin: 0 auto;
}
`
