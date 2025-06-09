import React from 'react';


export default function Hero({ theme, index, themeKeys, heroThemes, onNext, onPrev }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="left">
          <h1>{theme.product_name}</h1>
        <p>
          Unleash the energy with the iconic Red Bull - formulated to boost performance,
          focus, and endurance whenever you need it most.
        </p>
        <h2>$350 JMD</h2>
        <button className="shop-btn">Shop now →</button>
        </div>
        
        <div className="product-highlight">
          <img src={theme.picture} alt={theme.product_name} />
        </div>
      </div>

      <div className="hero-controls">
        <button onClick={onPrev}>↑</button>
        <button onClick={onNext}>↓</button>
      </div>

      <div className="product-list">
        {themeKeys.map((key, i) => (
          <div key={key} className={`product-card ${i === index ? 'active' : ''}`}>
            <img src={heroThemes[key].picture} alt={heroThemes[key].product_name} />
            <h6>{heroThemes[key].product_name}</h6>
            <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
            <p>$350</p>
          </div>
        ))}
      </div>
    </div>
  );
}