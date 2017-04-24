import React from 'react';
import './Title.css';

const Title = ({ id, name }) => (
  <div id={id}>
    <h1 className="title">{name}</h1>
  </div>
);

export default Title;
