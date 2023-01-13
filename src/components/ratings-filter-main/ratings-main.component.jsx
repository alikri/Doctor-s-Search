import "./ratings-main.styles.scss";
import { useContext } from "react";
import { ContextRatings } from "../context/filter-ratings-context";

const RatingsFilter = () => {

	const {handleRatings, rating} = useContext(ContextRatings);


	return (
		<div className="ratings-container">
			<div className="star-container" onClick={handleRatings} >
				<button>
					<span className="rating-text no-low">No ratings</span>
					<span id="star1" className={`${rating[0].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
				<button>
					<span className="rating-text no-low">Low Ratings</span>
				
					<span id="star2" className={`${rating[1].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
				<button>
					<span className="rating-text">3.0+</span>
				
					<span id="star3" className={`${rating[2].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
				<button>
					<span className="rating-text">3.5+</span>
				
					<span id="star4" className={`${rating[3].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
				<button>
					<span className="rating-text">4.0+</span>
				
					<span id="star5" className={`${rating[4].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
				<button>
					<span className="rating-text">4.5+</span>
					<span id="star6" className={`${rating[5].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
			</div>
		</div>
	)
}
export default RatingsFilter;



// {/* {[...Array(5)].map((star, index) => {
// 					index += 1;
// 					return (
// 						<button
// 							type="button"
// 							key={index}
// 							className={index <= rating ? "on" : "off"}
// 							onClick={() => handleRatings}
// 						>
// 							<span className="star">&#9733;</span>
// 						</button>
// 					);
// 				})} */}