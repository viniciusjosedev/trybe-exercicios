// src/renderWithRouter.js
import React from 'react';
import { Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {	
  const history = createMemoryHistory();
  return ({
    ...render(<Route history={ history }>{component}</Route>), history,
  });
};
export default renderWithRouter;