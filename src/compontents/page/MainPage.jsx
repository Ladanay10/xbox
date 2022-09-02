import React from 'react'
import { Browse } from '../browse/Browse'
import { Control } from '../control/Control'
import { Games } from '../games/Games'
import { HomePage } from '../homePage/HomePage'
import { Inside } from '../inside/Inside'
import { Questions } from '../questions/Questions'
import { Footer } from '../footer/Footer';

export const MainPage = () => {
  return (
	<>
		<HomePage/>
		<Browse />
		<Games/>
		<Control/>
		<Inside/>
		<Questions/>
		<Footer/>
	</>
  )
}
