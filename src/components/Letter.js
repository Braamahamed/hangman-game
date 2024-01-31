import React from 'react';

const Letter = ({value, status, onClick}) => {

  return (
    <span
      style={{ textDecoration: status ? 'line-through' : 'none', color: status ? 'grey' : 'black' }}
      onClick={onClick} >
      {value}
    </span>
  );
};

export default Letter;
