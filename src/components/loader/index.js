import React from 'react';

import './styles.css';
import { Solar } from '@components/icons';

const Loader = () => (
  <div className="loading-indicator">
    <Solar className="fa-spin" />
  </div>
);

export default Loader;
