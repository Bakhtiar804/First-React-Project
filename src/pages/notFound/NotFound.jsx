import React, { useState } from 'react';
import { Home, ArrowLeft, Search, Compass, Rocket } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="notfound-container">
      {/* Background visual glows */}
      <div className="starfield-bg" />
      <div className="glow-top-left" />
      <div className="glow-bottom-right" />

      {/* Header */}
      <header className="notfound-header">
        <div className="brand-logo">
          <Rocket className="icon" />
          <span>ORBIT</span>
        </div>
        <button onClick={handleGoBack} className="back-btn">
          <ArrowLeft className="icon-sm" />
          Go Back
        </button>
      </header>

      {/* Main Content */}
      <main className="notfound-main">
        {/* Animated Planet Illustration */}
        <div className="illustration-wrapper">
          <div className="planet-glow" />
          <svg
            viewBox="0 0 200 200"
            className="planet-svg"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="100"
              cy="110"
              rx="75"
              ry="20"
              fill="none"
              stroke="#818cf8"
              strokeWidth="6"
              transform="rotate(-15 100 110)"
              opacity="0.6"
            />
            <circle cx="100" cy="100" r="45" fill="url(#planet-grad)" />
            <circle cx="85" cy="85" r="8" fill="#4c1d95" opacity="0.4" />
            <circle cx="115" cy="110" r="12" fill="#4c1d95" opacity="0.4" />
            <circle cx="90" cy="120" r="6" fill="#4c1d95" opacity="0.4" />
            <defs>
              <linearGradient id="planet-grad" x1="55" y1="55" x2="145" y2="145" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a855f7" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Error Details */}
        <span className="error-badge">Error Code 404</span>
        <h1 className="error-title">Lost in Deep Space</h1>
        <p className="error-description">
          The page you are looking for has been moved, deleted, or drifted into an unknown orbit.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="search-form">
          <Search className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for missing pages..."
            className="search-input"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>

        {/* Navigation Actions */}
        <div className="action-group">
          <a href="/" className="btn btn-primary">
            <Home className="icon-sm" />
            Return Home
          </a>
          <a href="/explore" className="btn btn-secondary">
            <Compass className="icon-sm" />
            Explore Site
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="notfound-footer">
        <p>Need assistance? <a href="/contact">Contact Support</a></p>
      </footer>
    </div>
  );
}