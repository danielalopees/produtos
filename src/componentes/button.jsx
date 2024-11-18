// Suggested code may be subject to a license. Learn more: ~LicenseLog:4190825904.
import React from 'react';

function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
