import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
);

export { NotFound as default };