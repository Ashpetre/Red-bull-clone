// App.jsx
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import product1 from './assets/Red Bull Website UI Design Assets/Red-Bull-Energy-Drink.png';
import product2 from './assets/Red Bull Website UI Design Assets/Red-Bull-Zero.png';
import product3 from './assets/Red Bull Website UI Design Assets/Red-Bull-Sugarfree.png';

const heroThemes = {
  product: {
    bg: '#5674AE',
    product_name: 'Red Bull Energy Drink',
    picture: product1
  },
  product2: {
    bg: '#66C4DD',
    product_name: 'Red Bull Zero',
    picture: product2
  },
  product3: {
    bg: '#97C3EA',
    product_name: 'Red Bull Sugarfree',
    picture: product3
  }
};

function App() {
  const [index, setIndex] = useState(0);
  const themeKeys = Object.keys(heroThemes);
  const current = heroThemes[themeKeys[index]];

  return (
    <div className="hero-wrapper" style={{ backgroundColor: current.bg }}>
      <Nav theme={current} />
      <Hero
        theme={current}
        index={index}
        themeKeys={themeKeys}
        heroThemes={heroThemes}
        onNext={() => setIndex((i) => (i + 1) % themeKeys.length)}
        onPrev={() => setIndex((i) => (i - 1 + themeKeys.length) % themeKeys.length)}
      />
    </div>
  );
}

export default App;