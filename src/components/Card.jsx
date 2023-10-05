import React from 'react';

function Card({ imageSrc, title, description }) {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card">
        <img src={imageSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title my-2">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn services-btn">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
