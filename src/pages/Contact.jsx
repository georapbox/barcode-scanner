import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="body">
      <h1 className="header-title">Contact</h1>
      <p>For inquiries, please contact the project team.</p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}
