import "./language-main.styles.scss";
import crossClose from "../../assets/icons/cross-close.svg";
import { useContext } from "react";
import { ContextLanguage } from "../../context/filter-language-context";

const LanguageFilter = () => {
	const { language, chosenLanguage, handleLanguageSelection, removeChosenLanguage } = useContext(ContextLanguage);
	
	const languageList = language.map(lang => <li key={lang}>{lang}</li>);
	const chosenLanguageToDisplay = chosenLanguage && chosenLanguage.map(lang => <div key={lang} className="selected-filter">{lang}
	<img onClick={removeChosenLanguage} className="cross-close" src={`${crossClose}`} alt="" />
</div>)
	return (
		<div className="language-container">
			{chosenLanguageToDisplay}
			<ul onClick={handleLanguageSelection} >
				{languageList}
			</ul>
		</div>
	)
}

export default LanguageFilter;