import React from 'react';
import { Router, Redirect } from '@reach/router';

import { HomePage, DetailsPage } from '@pages';

export default () => (
  <Router>
    <HomePage path="/" />
    <DetailsPage path="details" />
    <Redirect from="/*" to="/" noThrow />
  </Router>
);
