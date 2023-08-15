import "./App.css";
import Main from "./homepage/Main";
import Menu from "./menu/Menu";
import PortfolioMain from "./portfolio/PortfolioMain";
import About from "./about/About";
import CV from "./cv/CV";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* routes to pages */}
      <Router>
        <Routes>
          <Route path="/cv" element={<CV />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/portfolio" element={<PortfolioMain />} />

          <Route path="/*" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
