import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feeding from "./components/Feeding";
import Nappies from "./components/Nappies";
import Sleep from "./components/Sleep";
import Home from "./components/Home";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <img src="https://placehold.co/200x100" alt="Logo" />

        <h1>
          <Link to="/">Nappster</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/feeding">Feeding</Link>
            </li>
            <li>
              <Link to="/nappies">Nappies</Link>
            </li>
            <li>
              <Link to="/sleep">Sleep</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/feeding" element={<Feeding />} />

        <Route path="/nappies" element={<Nappies />} />

        <Route path="/sleep" element={<Sleep />} />
      </Routes>
      <footer>&copy;Nappster - Making parents' lives easier since 2023</footer>
    </BrowserRouter>
  );
}

export default App;
