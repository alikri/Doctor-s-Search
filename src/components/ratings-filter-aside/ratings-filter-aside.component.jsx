import "./ratings-filter-aside.styles.scss";
import { useContext } from "react";
import { ContextRatings } from "../context/filter-ratings-context";

const RatingsFilterAside = () => {

	const {handleRatings, rating} = useContext(ContextRatings);

	return (
		<div className="ratings-container-aside">
			<div className="star-container-aside" onClick={handleRatings} >
				<button>
					<span className="rating-text-aside no-low-aside">No ratings</span>
					<span id="star1" className={`${rating[0].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
				<button>
					<span className="rating-text-aside no-low-aside">Low Ratings</span>
				
					<span id="star2" className={`${rating[1].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
				<button>
					<span className="rating-text-aside">3.0+</span>
				
					<span id="star3" className={`${rating[2].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
				<button>
					<span className="rating-text-aside">3.5+</span>
				
					<span id="star4" className={`${rating[3].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
				<button>
					<span className="rating-text-aside">4.0+</span>
				
					<span id="star5" className={`${rating[4].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
				<button>
					<span className="rating-text-aside">4.5+</span>
					<span id="star6" className={`${rating[5].on ? "on" : "off"} star`}>&#9733;</span>
				</button>
			</div>
		</div>
	)
}

export default RatingsFilterAside;