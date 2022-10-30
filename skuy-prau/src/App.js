import Router from './Router';
import "./assets/style.css"
import "./assets/about.css"
import "./assets/review.css"

import { Provider } from "react-redux";
import { store } from "./store/index";

import ScrollToTop from "react-scroll-to-top"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    <Provider store={store}>
      <ScrollToTop smooth/>
      <Router/>
    </Provider>
  );
}

export default App;