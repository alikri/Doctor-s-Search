import { createContext, useState } from "react";

const ContextDistance = createContext();

const FilterDistanceProvider = ({ children }) => {

	const [miles, setMiles] = useState(20);

	const moveValue = (e) => {
		const currentValue = e.target.value;
		setMiles(currentValue);
	}
	return (
		<ContextDistance.Provider value={{miles, moveValue}}>
			{children}
		</ContextDistance.Provider>
	)
}

export {FilterDistanceProvider, ContextDistance}