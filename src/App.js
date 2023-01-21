import { Amplify, Auth } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './amplify-config.js';
import './app.styles.scss';
import Home from './routes/home-page/home.component.jsx';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
// import Doctors from './components/doctors/doctors.component';
// import { Link, Routes, Route } from "react-router-dom";


Amplify.configure(awsconfig);

function App({ signOut, user }) {
	return (
		<div className='main-content'>
			<h1>Hello {user.username}</h1>
      		<button onClick={signOut}>Sign out</button>

			<Header />
			<Home />
			<Footer />
		</div>
		
	);
}

export default withAuthenticator(App);


// font-family: 'Barlow', sans-serif;
// font-family: 'Inter', sans-serif;
// font-family: 'Source Sans Pro', sans-serif;
// font-family: 'Ultra', serif;
