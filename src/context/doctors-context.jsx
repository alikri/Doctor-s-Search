import { createContext, useState, useEffect } from "react";

const ContextDoctors = createContext();

const DoctorsProvider = ({ children }) => {

	const [doctors, setDoctors] = useState(null);
	

	useEffect(() => {
		fetch("https://juzz51gsf7.execute-api.eu-central-1.amazonaws.com/Prod/doctors")
			.then(response => response.json())
			.then(data => setDoctors(data.results))
			.catch(err => alert("Server issue.", err));
	}, []);
	return (
		<ContextDoctors.Provider value={{doctors}}>
			{children}
		</ContextDoctors.Provider>
	)
}

export {DoctorsProvider, ContextDoctors}