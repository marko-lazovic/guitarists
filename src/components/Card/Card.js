import React from 'react';

const card = (props) => (
   <div className="card">
      <img src={props.imgUrl} className="card-img-top" alt={props.name}></img>
      <div className="card-body">
         <h5 className="card-title"><strong>{props.name}</strong></h5>
      </div>
      <ul className="list-group list-group-flush">
         <li className="list-group-item">Guitars: <strong>{props.guitars}</strong></li>
         <li className="list-group-item">Number of strings: <strong>{props.strings}</strong></li>
      </ul>
   </div>
);

export default card;