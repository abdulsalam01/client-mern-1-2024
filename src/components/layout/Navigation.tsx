import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";
import duitkuLogo from "../../assets/duitku-logo.png";

const Navigation: React.FC = () => {
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img src={duitkuLogo} alt="logo" className="logo" />
      </div>
      <div className="nav-menu">
        <Link to="/" className="nav-item active">
          <div className="nav-icon">
            <i className="fas fa-house"></i>
          </div>
          <span>Dashboard</span>
        </Link>
        <Link to="/anggaran" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-wallet"></i>
          </div>
          <span>Anggaran</span>
        </Link>
        <Link to="/investasi" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-chart-simple"></i>
          </div>
          <span>Investasi</span>
        </Link>
        <Link to="/tujuan" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <span>Tujuan</span>
        </Link>
        <Link to="/account" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-user"></i>
          </div>
          <span>Akun</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
