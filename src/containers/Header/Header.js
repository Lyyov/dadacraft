import { Link } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg';

import "./header.scss";

const header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <div className="header__container">
            <ul className="header__bloc">
              <Link className="header__link" to="/">Home</Link>
              <Link className="header__link" to="/projects">Projects</Link>
              <Link className="header__link" to="/">Services</Link>
            </ul>
            <ul className="header__bloc">
              <a className="header__link" href="/">About Us</a>
              <a className="header__link" href="/">Contact Us</a>
              <a className="header__link" href="/">Ro/En</a>
            </ul>
            <Link className="header__logo logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header;