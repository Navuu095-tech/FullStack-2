import React from 'react';

function CardComponent({ title, text }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
}

export default CardComponent;
