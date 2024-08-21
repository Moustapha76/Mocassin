import "./App.css";
import logo from './images/logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Article from './pages/ArticleItem';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { GlobalContext } from "./Components/GlobalContext";
import React, { useContext } from "react";
import Carte from "./Components/Carte";
import Footer from "./Components/Footer";

export default function App() {
  const { cart } = useContext(GlobalContext);
  return (
    <Router>
       <navbar>
       <a href="/"><img src={logo} alt="logo" className="logo"/></a>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/article">Nos mocassins</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <a className="shopping" href="/carte"><i class="fa-solid fa-cart-shopping"></i>{cart.length > 0 &&<span><sup> {cart.length}</sup></span>}</a>
      </navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carte" element={<Carte />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
