import React from 'react';
import './Control.css';
import img1 from '../../assets/control1.png';
import img2 from '../../assets/control2.png';
import img3 from '../../assets/control3.png';
import img4 from '../../assets/control4.png';
export const Control = () => {
	return (
		<>
			<section className="control">
				<div className="container control-content">
					<div className="control-text">
						<h3>Complete <span>control</span></h3>
						<span>The new Xbox Wireless Controller brings elegant design, refined comfort, and instant sharing to a familiar favorite.</span>
					</div>
					<div className="control-block">
						<div className="control-l">
							<img src={img1} alt="" />
							<img src={img2} alt="" />
						</div>
						<div className="control-r">
							<img src={img3} alt="" />
							<div className="control-r__content">
								<h3>Compatible with games on Windows 10</h3>
								<p>The gamepad fully supports Windows 10, you can play all the games of this platform and switch easily</p>
								<img src={img4} alt="" />
							</div>
						</div>
					</div>

				</div>
			</section>
		</>
	)
}
