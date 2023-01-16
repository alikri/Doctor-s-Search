import { createContext, useState } from "react";

const ContextFavoritedDocs = createContext();

const FavoritedDocsProvider = ({ children }) => {

	const [favoriteDoc, setFavoritedDoc] = useState([]);

	const addFavoriteDocs = (id) => {
		if (favoriteDoc == null) {
			setFavoritedDoc([id]);
		} else if (!favoriteDoc.includes(id)) {
			setFavoritedDoc(prevValue => [...prevValue, id])
		}
	}
	console.log("context favDocs id")
	console.log(favoriteDoc);

	return (
		<ContextFavoritedDocs.Provider value={{favoriteDoc, addFavoriteDocs}}>
			{children}
		</ContextFavoritedDocs.Provider>
	)
}

export {FavoritedDocsProvider, ContextFavoritedDocs}