import "../styles/globals.css";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>WeaGuitar - Guitar Store</title>
      <div className="h-full bg-white">
        <Navigation />
        <Component {...pageProps} />
        <div className="h-64"></div>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
