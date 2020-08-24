import React from 'react';

import reactImageSrc from '@images/react.png';
import './style.scss';

const HomeView = () => (
  <div>
    <h1>Hello world!</h1>
    <img src={reactImageSrc} alt="React Logo" />
  </div>
);

export default HomeView;
