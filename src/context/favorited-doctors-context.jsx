import { createContext, useState } from "react";

const ContextFavoritedDocs = createContext();

const FavoritedDocsProvider = ({ children }) => {
	const [favoriteDoc, setFavoritedDoc] = useState([]);


	const addFavoriteDocs = (e) => {
		let id = e.target.offsetParent.offsetParent.id;
		if (favoriteDoc == null) {
			setFavoritedDoc([id]);
		} else if (!favoriteDoc.includes(id)) {
			setFavoritedDoc(prevValue => [...prevValue, id])
		} else if (favoriteDoc.includes(id)) {
			let favoritedUpdated = favoriteDoc.filter(favDocId => favDocId !== id);
			setFavoritedDoc(favoritedUpdated);
		}
	}

	return (
		<ContextFavoritedDocs.Provider value={{favoriteDoc, addFavoriteDocs}}>
			{children}
		</ContextFavoritedDocs.Provider>
	)
}

export {FavoritedDocsProvider, ContextFavoritedDocs}