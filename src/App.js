import './app.styles.scss';
import Home from './routes/home-page/home.component.jsx';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
// import Doctors from './components/doctors/doctors.component';
// import { Link, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='main-content'>
			<Header />
			<Home />
			<Footer />
		</div>
		
	);
}

export default App;


// font-family: 'Barlow', sans-serif;
// font-family: 'Inter', sans-serif;
// font-family: 'Source Sans Pro', sans-serif;
// font-family: 'Ultra', serif;
