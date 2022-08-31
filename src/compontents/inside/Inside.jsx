import React from 'react';
import './Inside.css';
import iside from '../../assets/inside.png';
import iside2 from '../../assets/inside-bottom.svg';
import iside3 from '../../assets/inside-bottom-bg.png';
import blick from '../../assets/blick-inside.png';
export const Inside = () => {
	return (
		<>
			<section>
				<div className="container inside">
					<div className="inside-text">
						<h4>Technologically <p>perfect</p></h4>
						<span>The new Xbox Wireless Controller brings elegant design, refined comfort, and instant sharing to a familiar favorite.</span>
					</div>
					<div className="inside-img">
						<img src={iside} alt="" />
						<button>+</button>
						<button>+</button>
						<button>+</button>
						<button>+</button>
					</div>
					<div className="inside-bottom">
						<h3>Xbox series X</h3>
						<span>$499.99</span>
						<p>pre order</p>
						<div className="inside-bottom__img">
							<img src={iside3} alt="" />
							<img src={iside2} alt="" />
							<img src={blick} alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
