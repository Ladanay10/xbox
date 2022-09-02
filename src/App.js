import './App.css';
import { Header } from './compontents/header/Header';
import {Routes, Route} from 'react-router-dom';
import { MainPage } from './compontents/page/MainPage';
import {OrderPage} from './compontents/page/OrderPage/OrderPage';
function App() {
  return (
    <div className="App">	
		<Header/>
			<Routes>
				<Route path='/' element={<MainPage/>}/>
				<Route path='/order' element={<OrderPage/>}/>
			</Routes>
		
		
    </div>
  );
}

export default App;
