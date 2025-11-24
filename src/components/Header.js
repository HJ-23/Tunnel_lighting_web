import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            {/* <div className="logo-icon">🤖</div>  */}
            <div className="logo-icon">🚇</div>
            <div className="logo-text">
              <h1>铁路隧道智慧照明与监测系统</h1>
              <p>安全 · 智慧 · 绿色</p>
            </div>
          </div>
          <div className="header-actions">
            {/* <button className="contact-btn">
              <span>📞</span>
              联系我们
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
