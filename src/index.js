import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { FilterHospitalProvider } from './context/filter-hospital-context';
import { FilterRatingsProvider } from './context/filter-ratings-context';
import { FilterLanguageProvider } from './context/filter-language-context';
import { FilterGenderProvider } from './context/filter-gender-context';
import { FilterInsuranceProvider } from './context/filter-insurance-context';
import { FilterDistanceProvider } from './context/filter-distance-context';
import { FavoritedDocsProvider } from './context/favorited-doctors-context';
import { DoctorsProvider } from './context/doctors-context';
// import { Amplify } from 'aws-amplify';
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

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
										<DoctorsProvider>
											<App />
										</DoctorsProvider>
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
