import "./distance-main.styles.scss";
import { useContext } from "react";
import { ContextDistance } from "../context/filter-distance-context";

const DistanceFilter = () => {

	const {miles, moveValue} = useContext(ContextDistance);

	return (
		<div className="distance-container" >
			<h2>{miles}mi</h2>
			<div className="distance-bar">
				<span>0mi</span>
				<input type="range" min="0" max="100" defaultValue={miles} onInput={moveValue}></input>
				<span>100mi</span>
			</div>
		</div>
	)
}

export default DistanceFilter;