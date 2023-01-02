import { createContext, useState } from "react";

const ContextRatings = createContext();

function FilterRatingsProvider({children}) {

	const [chosenRating, setChosenRating] = useState(null)
	console.log(chosenRating);
	const [rating, setRating] = useState([
		{
			star: 1,
			on: false
		},
		{
			star: 2,
			on: false
		},
		{
			star: 3,
			on: false
		},
		{
			star: 4,
			on: false
		},
		{
			star: 5,
			on: false
		},
		{
			star: 6,
			on: false
		},
	]);

	const handleRatings = (e) => {
		console.log(e);
		if (e.target.tagName !== "SPAN") return;
		let current = e.target.id;
		let currentN = current.split("")[current.length - 1];
		setChosenRating(currentN);
		let updatedState = rating.map(item => {
			if (item.star <= currentN) {
				return {...item, on: true}
			}
			return {...item, on: false};
		})
		setRating(updatedState);
	}
	return (
		<ContextRatings.Provider value={{rating, handleRatings}}>
			{children}
		</ContextRatings.Provider>
	)

}

export {ContextRatings, FilterRatingsProvider};