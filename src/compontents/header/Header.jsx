import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import {HiMenuAlt3} from 'react-icons/hi';
import {IoCloseSharp} from 'react-icons/io5';
import { Link } from 'react-scroll';
export const Header = () => {
	const [click, setClick] = useState(false);	
	const [animate, setAnimate] = useState(false);	
  return (	
	<>
		<header className='container header'>
			<div className="header-logo">
				<img src={logo} alt="" />
			</div>
			
			<nav className={click ? 'header-nav__mobile animate' : 'header-nav__mobile '}>
				<div className="header-nav__links">
						<Link to='browse' smooth href="">Browse</Link>
						<Link to='games'smooth href="">Games</Link>
						<Link to='control'smooth href="">Controller</Link>
						<Link to='inside'smooth href="">Inside</Link>
				</div>
				<div className="header-nav__btn">
					<button>Order Console</button>
				</div>
			</nav>
			<div className={"header-mobile__btn"}  onClick={() => setClick(!click)}>
				{click ? <IoCloseSharp size={45}/> : <HiMenuAlt3 size={45}/> }
			</div>
		</header>
	</>
  )
}
