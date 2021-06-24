import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/globals.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
