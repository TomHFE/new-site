import "./App.css";

import Main from "./homepage/Main";
import Menu from "./menu/Menu";
import PortfolioMain from "./portfolio/PortfolioMain";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/portfolio" element={<PortfolioMain />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
