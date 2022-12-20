import { createContext, useState } from "react";

const ContextRatings = createContext();

function FilterRatingsProvider({children}) {

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
		console.log(e.target.id);
		let current = e.target.id;
		let currentN = current.split("")[current.length - 1];
		console.log(currentN)
		let updatedState = rating.map(item => {
			if (item.star <= currentN) {
				return {...item, on: true}
			}
			return {...item, on: false};
		})
		console.log(updatedState);
		setRating(updatedState);
	}
	return (
		<ContextRatings.Provider value={{rating, handleRatings}}>
			{children}
		</ContextRatings.Provider>
	)

}

export {ContextRatings, FilterRatingsProvider};