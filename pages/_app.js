import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "antd/dist/antd";
import "../styles/globals.css";
import Layoutt from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layoutt>
      <Component {...pageProps} />
    </Layoutt>
  );
}

export default MyApp;
