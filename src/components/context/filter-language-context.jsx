import { createContext, useState } from "react";

const ContextLanguage = createContext();

const FilterLanguageProvider = ({ children }) => {
	
	const [language, setLanguage] = useState(["Arabic", "English", "French", "German", "Hindi", "Italian", "Japanese", "Korean", "Polish", "Russian", "Spanish", "Turkish", "Ukrainian"]);
	const [chosenLanguage, setChosenLanguage] = useState(null);

	const handleLanguageSelection = (e) => {
		if (e.target.tagName !== "LI") return;
		let chosenLang = e.target.innerHTML;
		if (chosenLanguage == null) {
			setChosenLanguage([chosenLang]);
		} else if (!chosenLanguage.includes(chosenLang)) {
			setChosenLanguage(prevValue => [...prevValue, chosenLang])
		}
	}
	const removeChosenLanguage = (e) => {
		let languageToRemove = e.target.offsetParent.innerText;
		if (chosenLanguage.includes(languageToRemove)) {
			let clearedLanguageList = chosenLanguage.filter(lang => lang !== languageToRemove);
			setChosenLanguage(clearedLanguageList);
		}
	}


	return (
		<ContextLanguage.Provider value={{language, chosenLanguage, handleLanguageSelection, removeChosenLanguage}} >
			{children}
		</ContextLanguage.Provider>
	)
}

export {ContextLanguage, FilterLanguageProvider}