import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from '../src/components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
     <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
