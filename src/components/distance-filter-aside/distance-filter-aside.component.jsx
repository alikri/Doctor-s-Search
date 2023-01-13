import "./distance-filter-aside.styles.scss";
import { useContext } from "react";
import { ContextDistance } from "../context/filter-distance-context";

const DistanceFilterAside = () => {

	const {miles, moveValue} = useContext(ContextDistance);

	return (
		<div className="distance-container-aside" >
			<h2>{miles}mi</h2>
			<div className="distance-bar-aside">
				<span>0mi</span>
				<input type="range" min="0" max="100" defaultValue={miles} onInput={moveValue}></input>
				<span>100mi</span>
			</div>
		</div>
	)
}

export default DistanceFilterAside;