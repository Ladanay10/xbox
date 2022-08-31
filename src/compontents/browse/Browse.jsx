import React from 'react';
import img1 from '../../assets/browse-img.png';
import './Browse.css';
import {motion} from 'framer-motion';
const transition ={type: 'spring', duration: 3};
export const Browse = () => {
	return (
		<>
			<section className="browse container">
				<h1 className="browse-title">The fastest and the most powerful console xbox for the <span>entire history</span></h1>
				<div className="browse-img">
					<img src={img1} alt="" />
					<motion.div transition={transition} className="browse-img__content">
						<h3 >Power you
							dreams</h3>
						<span>From future adventures, to current obsessions, to classic titles, thousands of favorites across four generations of Xbox look and play best on Xbox Series X.</span>
						<p>learn more</p>
					</motion.div>
				</div>
			</section>
		</>
	)
}
