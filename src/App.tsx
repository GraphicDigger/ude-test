import React from 'react';
import { Providers } from './shared/providers';
import AppRoutes from './routes';

const App = () => (
  <AppRoutes />
);

export default Providers(App);
