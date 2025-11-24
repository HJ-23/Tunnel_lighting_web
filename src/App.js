import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductInfo from './components/ProductInfo';

function App() {

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-area">
                <ProductInfo />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
