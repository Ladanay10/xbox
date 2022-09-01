import React from 'react';
import './Control.css';
import img1 from '../../assets/control1.png';
import img2 from '../../assets/control2.png';
import img3 from '../../assets/control3.png';
import img4 from '../../assets/control4.png';
import {motion} from 'framer-motion';
export const Control = () => {
	const transition ={type: 'spring', duration: 3};
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
							<motion.img whileInView={{x:0}} initial={{x:-20}} transition={transition} src={img1} alt="" />
							<motion.img whileInView={{y:0}} initial={{y:20}} transition={transition} src={img2} alt="" />
						</div>
						<div className="control-r">
							<motion.img whileInView={{x:0}} initial={{x:20}} transition={transition} src={img3} alt="" />
							<motion.div whileInView={{y:0}} initial={{y:20}} transition={transition} className="control-r__content">
								<h3>Compatible with games on Windows 10</h3>
								<p>The gamepad fully supports Windows 10, you can play all the games of this platform and switch easily</p>
								<img src={img4} alt="" />
							</motion.div>
						</div>
					</div>

				</div>
			</section>
		</>
	)
}
