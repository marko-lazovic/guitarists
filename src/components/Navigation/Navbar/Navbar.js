import React from 'react';

const navbar = (props) => (
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
         <a className="navbar-brand" href="#">{props.appName}</a>         
      </div>      
   </nav>
);

export default navbar;