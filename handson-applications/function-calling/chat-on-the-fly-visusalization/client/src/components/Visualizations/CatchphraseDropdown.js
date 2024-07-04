import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CatchphraseDropdown({ catchphrase, message }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="catchphrase-dropdown">
      <button onClick={toggleDropdown}>{catchphrase}</button>
      {isOpen && <p>{message}</p>}
    </div>
  );
}

CatchphraseDropdown.propTypes = {
  catchphrase: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default CatchphraseDropdown;