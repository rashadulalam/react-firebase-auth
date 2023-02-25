import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Components';
import { Home, About, Services, NotFound, Signin, Signup } from './Pages';
const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;