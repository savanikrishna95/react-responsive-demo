import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Newsletter from "./components/Footer/Newsletter";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Account from "./components/Account/Account";
import Error from "./components/Error/Error";
import CacheBuster from 'react-cache-buster';
import { version } from '../package.json';

const App = () => {
  const isProduction = true;
  const theme = {
    colors: {
      heading: "rgb(24, 24, 29)",
      text: "rgb(24, 24, 29)",
      white: "#fff",
      black: "#212529",
      helper: "#EDE42F",
      bg: "#B8001F",
      btn: "#4c9a2a",
      btnHover: "#3b811c",
      footer_bg: "#0a1435",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#fff",
      gradient:
        "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      loadingComponent={<h1>refreshing..</h1 >} //If not pass, nothing appears at the time of new version check.
      metaFileDirectory={'.'} //If public assets are hosted somewhere other than root on your server.
    >
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/react-responsive-demo/" element={<Home />} />
          <Route path="/react-responsive-demo/menu" element={<Menu />} />
          <Route path="/react-responsive-demo/blog" element={<Blog />} />
          <Route path="/react-responsive-demo/about" element={<About />} />
          <Route path="/react-responsive-demo/contact" element={<Contact />} />
          <Route path="/react-responsive-demo/account" element={<Account />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
    </CacheBuster>
  );
};

export default App;