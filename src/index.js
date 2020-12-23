import React from "react"
import ReactDOM from "react-dom"
import { Auth0Provider } from "@auth0/auth0-react"
import * as serviceWorker from "./serviceWorker"

// pages
import { Home } from "./pages/Home"

const id = process.env.REACT_APP_AUTH
const domain = process.env.REACT_APP_DOMAIN

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={id}
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <Home />
    </React.StrictMode>
    ,
  </Auth0Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
