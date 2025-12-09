import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Ingredients from './pages/Ingredients.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Faq from './pages/Faq.jsx';
import Recipes from './pages/Recipes.jsx';
import './css/main.css';

export default function App() {
  return (
    <div>
      <header className="navigation">
        <nav>
          <Link to="/">Home</Link> 
          <Link to="/ingredients">Ingredients</Link>
          <Link to="/recipes">Recipes</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
    </div>
  );
}
