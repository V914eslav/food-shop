import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import styles from "./App.module.css";
import cn from "classnames";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <main className={cn("content", "container", styles.main)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
