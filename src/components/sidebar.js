import React from 'react';

const Sidebar = (props) => (
  <div className='block'>
    <strong>{props.title}.</strong> {props.description}
  </div>
);
export default Sidebar;
