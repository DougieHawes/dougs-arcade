import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Landing from "./components/routes/Landing";

import Rpsls from "./components/routes/Rpsls";

import "./style.scss";

function App() {
  const [navbarOpen, toggleNavbarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Header onClick={() => toggleNavbarOpen(false)} />
        <Navbar
          navbarOpen={navbarOpen}
          closeNav={() => toggleNavbarOpen(false)}
          openNav={() => toggleNavbarOpen(true)}
        />
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/rpsls" element={<Rpsls />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
