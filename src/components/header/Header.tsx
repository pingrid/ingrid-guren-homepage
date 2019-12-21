import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import image from '../../resources/ingridguren.png';

interface IProps {
	color: string;
}

class Header extends PureComponent<IProps> {
	render(): React.ReactNode {
		const { color } = this.props;
		return (
			<header className="header" style={{ backgroundColor: color }}>
				<nav className="main-content">
					<Link to="/">
						<img
							src={image}
							alt="Lite bilde av Ingrid"
							className="home-image"
						/>
					</Link>
					<div className="menu-items">
						<a href="https://github.com/pingrid" target="_blank" rel="noopener noreferrer">Github</a>
						<a href="https://www.linkedin.com/in/ingridguren/" target="_blank" rel="noopener noreferrer">Linkedin</a>
						<Link to="/profile">Profile</Link>
						<a href="https://pingrid.github.io/" target="_blank" rel="noopener noreferrer">Github homepage</a>
					</div>
				</nav>
			</header>
		);
	}
}

export { Header };
