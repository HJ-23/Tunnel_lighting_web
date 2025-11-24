import React, { useState } from 'react';
import './App.css';
import PDFViewer from './components/PDFViewer';
import Header from './components/Header';
import ProductInfo from './components/ProductInfo';

function App() {
  const [currentView, setCurrentView] = useState('info');

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="sidebar">
              <nav className="nav-menu">
                <button 
                  className={`nav-item ${currentView === 'info' ? 'active' : ''}`}
                  onClick={() => setCurrentView('info')}
                >
                  <span className="nav-icon">📋</span>
                  产品信息
                </button>
                <button 
                  className={`nav-item ${currentView === 'pdf' ? 'active' : ''}`}
                  onClick={() => setCurrentView('pdf')}
                >
                  <span className="nav-icon">📄</span>
                  宣传册
                </button>
              </nav>
            </div>
            
            <div className="content-area">
              {currentView === 'info' && (
                <ProductInfo onOpenBrochure={() => setCurrentView('pdf')} />
              )}
              {currentView === 'pdf' && (
                <PDFViewer onBack={() => setCurrentView('info')} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
