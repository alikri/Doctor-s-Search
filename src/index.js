import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { FilterHospitalProvider } from './components/context/filter-hospital-context';
import { FilterRatingsProvider } from './components/context/filter-ratings-context';
import { FilterLanguageProvider } from './components/context/filter-language-context';
import { FilterGenderProvider } from './components/context/filter-gender-context';
import { FilterInsuranceProvider } from './components/context/filter-insurance-context';
import { FilterDistanceProvider } from './components/context/filter-distance-context';
import { FavoritedDocsProvider } from './components/context/favorited-doctors-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Router>
			<FilterHospitalProvider>
				<FilterRatingsProvider>
					<FilterLanguageProvider>
						<FilterGenderProvider>
							<FilterInsuranceProvider>
								<FilterDistanceProvider>
									<FavoritedDocsProvider>
										<App />
									</FavoritedDocsProvider>
								</FilterDistanceProvider>
							</FilterInsuranceProvider>
						</FilterGenderProvider>
					</FilterLanguageProvider>
				</FilterRatingsProvider>
			</FilterHospitalProvider>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
