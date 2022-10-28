import Router from "./Routes";
import "./assets/style.css"
import "./assets/about.css"
import ScrollToTop from "react-scroll-to-top"

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    <div className="App">
        <ScrollToTop smooth/>
        <Router/>
    </div>
  );
}

export default App;
