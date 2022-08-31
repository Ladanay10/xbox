import React, { useState } from 'react';
import './Questions.css';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';
import { CSSTransition } from 'react-transition-group';
import { dataQuestion } from '../../data/dataQuestions';
export const Questions = () => {
	const [click, setClick] = useState(false);
	const toggle = (index) => {
		if (click === index) {
			return setClick(null)
		}
		setClick(index)
	}
	return (

		<>
			<section className="questions">
				<div className="container">
					<div className="questions-content">
						<h2>Frequently asked <br /> questions <span>control</span> </h2>
						{
							dataQuestion.map((item, index) => (
								<div className='question-content__items'>
									<div className="question-content__item">
										<h3>{item.text}</h3>
										<div onClick={() => toggle(index)} key={index} className="arrow">
											{
												click === index ? <RiArrowUpSLine size={30} />
													: <RiArrowDownSLine size={30} />
											}
										</div>
									</div>
									<CSSTransition key={index} in={click ===index} timeout={300} classNames="alert" unmountOnExit>
										<div className='question-answer'>
											{item.answer}
										</div>
									</CSSTransition>
									<span className='line'></span>
								</div>
							))
						}
					</div>
				</div>
			</section>
		</>
	)
}
