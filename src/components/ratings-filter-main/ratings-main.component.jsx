import "./ratings-main.styles.scss";
import { useState } from "react";

const RatingsFilter = () => {
	const [rating, setRating] = useState(0);

	return (
		<div className="ratings-container">
			<div className="star-container">
				{[...Array(5)].map((star, index) => {
					index += 1;
					return (
						<button
							type="button"
							key={index}
							className={index <= rating ? "on" : "off"}
							onClick={() => setRating(index)}
						>
							<span className="star">&#9733;</span>
						</button>
					);
				})}
			</div>
		</div>
	)
}
export default RatingsFilter;