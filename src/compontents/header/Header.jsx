import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
export const Header = () => {
	const [click, setClick] = useState(false);
	return (
		<>
			<header className='container header'>
				<LinkR to='/' className="header-logo">
					<img src={logo} alt="" />
				</LinkR>

				<nav className={click ? 'header-nav__mobile animate' : ' header-nav header-nav__mobile'}>
					<div className="header-nav__links">
						<Link to='browse' smooth href="">Browse</Link>
						<Link to='games' smooth href="">Games</Link>
						<Link to='control' smooth href="">Controller</Link>
						<Link to='inside' smooth href="">Inside</Link>
					</div>
					<div className="header-nav__btn">
						<LinkR to='/order'><button>Order Console</button></LinkR>

					</div>
				</nav>
				<div className={"header-mobile__btn"} onClick={() => setClick(!click)}>
					{click ? <IoCloseSharp size={45} /> : <HiMenuAlt3 size={45} />}
				</div>
			</header>
		</>
	)
}
