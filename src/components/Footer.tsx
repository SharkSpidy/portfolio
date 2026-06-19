import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className="container">
      <p>
        Designed &amp; built with ❤️ by <strong>Marina & Joe </strong> · {new Date().getFullYear()} · All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
