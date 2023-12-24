import React from 'react';

function Button({ label, onClick, id, type, variant }) {
  return (
  <button type={type} id={id} className={`${variant} py-1 px-3 text-white rounded-md hover:bg-blue-800`} onClick={onClick}>
    {label}
  </button>
  );
}

export default Button;
