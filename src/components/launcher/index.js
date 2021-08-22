import React from 'react';

import './styles.css';
import { Logo } from '@components/icons';

const Launcher = () => (
  <div className="launcher-body">
    <div className="logo-container">
      <Logo />
      <div className="logo-text">
        <h4>Loading ..</h4>
        <p className="text-muted">We're testing your patience</p>
      </div>
    </div>
  </div>
);

export default Launcher;
