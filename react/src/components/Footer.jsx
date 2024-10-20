// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Fight News. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '10px 0',
    backgroundColor: '#333',
    color: '#fff',
    position: 'absolute',
    width: '100%',
    bottom: '0',
  },
};

export default Footer;
