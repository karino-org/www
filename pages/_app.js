import PageLayout from "../src/components/PageLayout";
import "../src/styles/app.sass";

function MyApp({ Component, pageProps }) {
  return <>
      <PageLayout Component={Component} pageProps={pageProps} />
  </>
}

export default MyApp
