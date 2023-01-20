import { createContext, useState } from "react";


const ContextGender = createContext();

const FilterGenderProvider = ({ children }) => {

	const [chosenGender, setChosenGender] = useState(null);

	const handleGenderSelection = (e) => {
		if (e.target.tagName !== "LI") return;
		let chosenG = e.target.innerHTML;
		setChosenGender([chosenG]);
	
	}

	const removeChosenGender = (e) => {
		setChosenGender(null);
	}
	
	return (
		<ContextGender.Provider value={{chosenGender, removeChosenGender, handleGenderSelection}}>
			{children}
		</ContextGender.Provider>
	)
}

export {FilterGenderProvider, ContextGender}