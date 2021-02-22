import React from 'react';

const btn = (props) => (
   <button type="button" className={props.classes} onClick={props.click}>
      {props.name}
   </button>
);

export default btn;