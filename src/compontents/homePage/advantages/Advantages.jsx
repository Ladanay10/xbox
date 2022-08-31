import React from 'react';
import { dataAdvantages } from '../../../data/dataAdvantages';
import './Advantages.css';
export const Advantages = () => {
  return (
	<>
		<div className="advantages">
			{
				dataAdvantages.map((item, index) => (
					<div className="advantages-item" key={index}>
						<img src={item.img} alt="" />
						<span>{item.text}</span>
					</div>
				))
			}
		</div>
	</>	
  )
}
