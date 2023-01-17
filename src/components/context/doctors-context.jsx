import { createContext, useState, useEffect } from "react";

const ContextDoctors = createContext();

const DoctorsProvider = ({ children }) => {
	
	const [doctors, setDoctors] = useState(null);

	useEffect(() => {
		fetch("https://woyllyhb24txpvnuetgcn4lgw40pgmbc.lambda-url.eu-central-1.on.aws/?page=1&pageSize=30")
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