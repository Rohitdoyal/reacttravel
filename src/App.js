import About from "./About";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";

import Service from "./Service";

function App() {
  return (
    <div className="App">
       <Home />
       <Service />
       <Blog />
       <About />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;