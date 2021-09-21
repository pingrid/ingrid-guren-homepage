import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu, Styles } from 'react-burger-menu';
import image from '../../resources/ingridguren-small.jpg';

interface IProps {
  color: string;
}

interface IMenuStyles extends Styles {
  bmBurgerBarsHover: {
    background: string;
  };
  bmItem: {
    display: string;
  };
}

function createMenuStyles(color: string): IMenuStyles {
  return {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '16px',
      top: '16px',
    },
    bmBurgerBars: {
      background: 'white',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: '0',
      width: '200px',
    },
    bmMenu: {
      background: color,
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      top: '0',
    },
  };
}

export function Header(props: IProps): React.ReactElement {
  const { color } = props;
  const menuStyle = createMenuStyles(color);
  return (
    <header className="header" style={{ backgroundColor: color }}>
      <nav className="main-content">
        <Link to="/">
          <img src={image} alt="Lite bilde av Ingrid" className="home-image" />
        </Link>
        <div className="menu-items">
          <a href="https://github.com/pingrid" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ingridguren/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <Link to="/profile">Profile</Link>
          <a href="https://pingrid.github.io/" target="_blank" rel="noopener noreferrer">
            Github homepage
          </a>
        </div>
      </nav>
      <div className="mobile-menu">
        <Menu right styles={menuStyle}>
          <a
            className="menu-item"
            href="https://github.com/pingrid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="menu-item"
            href="https://www.linkedin.com/in/ingridguren/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <Link to="/profile">Profile</Link>
        </Menu>
      </div>
    </header>
  );
}
