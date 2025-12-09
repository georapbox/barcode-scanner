import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="body">
      <h1 className="header-title">About</h1>
      <p>
        The average American throws away around $2000 of edible food every year
        because of spoilage. As a nation it is estimated around 408 billion USD
        in groceries is thrown away every year. To combat the insanely high
        food waste problem in the U.S., we will develop an app that keeps track
        of all food items you bring into your home and suggest recipes based on
        what you have available, what will expire soon, and what your
        preferences are.
      </p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}
