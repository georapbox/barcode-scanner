import React from 'react';
import { Link } from 'react-router-dom';

export default function Faq() {
  return (
    <div className="body">
      <h1 className="header-title">FAQ</h1>
      <p>Frequently asked questions will go here.</p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}
