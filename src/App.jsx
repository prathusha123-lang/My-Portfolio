import React from 'react';
import Hero from './components/Hero';
import MyWork from './components/MyWork';
import OtherWork from './components/OtherWork'; // <- Make sure this is here

const App = () => {
  return (
    <div>
      <Hero />
      <MyWork />
      <OtherWork /> {/* <- And this is rendered */}
    </div>
  );
};

export default App;
