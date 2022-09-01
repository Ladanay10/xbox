import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import './Footer.css';
import { Link } from 'react-scroll';
export const Footer = () => {
	return (
		<>
			<footer className='container'>
				<div className='footer '>
					<Link to='header'smooth className="footer-logo">
						<img src={logo} alt="" />
					</Link>
					

					<div className="footer-links">
						<Link to='browse' smooth href="">Browse</Link>
						<Link to='games'smooth href="">Games</Link>
						<Link to='control'smooth href="">Controller</Link>
						<Link to='inside'smooth href="">Inside</Link>
					</div>
					<div className="footer-icons">
						<FaInstagram size={24} />
						<FaTwitter size={24} />
						<FaYoutube size={24} />
					</div>
				</div>
				<div className="footer-bottom">
					<p>© Microsoft 2021</p>
					<span>Contact us Privacy & cookies</span>
				</div>
			</footer>
		</>
	)
}
