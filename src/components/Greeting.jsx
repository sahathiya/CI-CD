import React from 'react';

function Greeting({ name }) {
  return <p>Hi , {name || 'Guest'}!</p>;
}

export default Greeting;