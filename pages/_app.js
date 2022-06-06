import PageLayout from "../src/components/PageLayout";
import { Provider } from "react-redux";
import "../src/styles/app.sass";

function MyApp({ Component, pageProps }) {
  return <>
    {/* <Provider store={store}> */}
      <PageLayout Component={Component} pageProps={pageProps} />
    {/* </Provider> */}
  </>
}

export default MyApp
