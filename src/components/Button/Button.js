import React from 'react';

const btn = (props) => (
   <button type="button" className={props.classes}>
      {props.name}
   </button>
);

export default btn;