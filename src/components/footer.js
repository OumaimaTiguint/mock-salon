import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer">
      <p className="number">Reservations (711) 265-9193.</p>
      <p className="credit">
        © Designed and developed by 
        <a rel="noopener noreferrer" target="_blank" href="https://oumaima-tiguint.netlify.app/">
          Oumaima Tiguint
        </a>
      </p>
    </div>
  );
}

export default Footer;