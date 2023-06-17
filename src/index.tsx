import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Helmet } from "react-helmet";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Helmet>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7290248183564409"
        crossOrigin="anonymous"
      ></script>
      <meta charSet="utf-8" />
      <title>Random Wisdom</title>
      <meta
        name="description"
        content="Random Wisdom - Joe Rogan, David Lee Roth, Travis Barker, Chuck Palahniuk, Guy Ritchie, Andrew Huberman"
      />
    </Helmet>
    <App />
  </React.StrictMode>
);
