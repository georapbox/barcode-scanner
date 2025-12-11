import React from 'react';
import { Link } from 'react-router-dom';

export default function Recipes() {
  return (
    <div className="body">
      <h1 className="header-title">Recipes</h1>
      <button className="Generate styled" type="button">Generate</button>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}
