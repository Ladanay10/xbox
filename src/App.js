import './App.css';
import { Browse } from './compontents/browse/Browse';
import { Control } from './compontents/control/Control';
import { Footer } from './compontents/footer/Footer';
import { Games } from './compontents/games/Games';
import { Header } from './compontents/header/Header';
import { HomePage } from './compontents/homePage/HomePage';
import { Inside } from './compontents/inside/Inside';
import { Questions } from './compontents/questions/Questions';

function App() {
  return (
    <div className="App">
		<Header/>
		<HomePage/>
		<Browse />
		<Games/>
		<Control/>
		<Inside/>
		<Questions/>
		<Footer/>
    </div>
  );
}

export default App;
