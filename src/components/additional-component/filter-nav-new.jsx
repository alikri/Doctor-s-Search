import "./filter-nav.scss";
import { useState } from "react";

const FilterNavNew = () => {

	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);

	return (
		<div 
			className="dropdown"
		>
			<div  className="div-drop" onMouseEnter={() => setIsOpen1(true)} onMouseLeave={() => setIsOpen1(false)}>
			<button className="dropdown-button" >
				Dropdown 1
			</button>
			{isOpen1 && (
				<ul className="dropdown-menu">
					<li>Menu item 1</li>
					<li>Menu item 2</li>
					<li>Menu item 3</li>
				</ul>)
			}
			</div>
			<div className="div-drop" onMouseEnter={() => setIsOpen2(true)} onMouseLeave={() => setIsOpen2(false)}>
			<button className="dropdown-button">
				Dropdown 2
				</button>
				{isOpen2 && (
				<ul className="dropdown-menu">
					<li>Menu item 4</li>
					<li>Menu item 2</li>
					<li>Menu item 3</li>
				</ul>)
			}
			</div>
		</div>

	)
};
export default FilterNavNew;

// const FilterNavNew = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	return (
// 		<div
// 		  className="dropdown"
// 		  onMouseEnter={() => setIsOpen(true)}
// 		  onMouseLeave={() => setIsOpen(false)}
// 		>
// 		  <button className="dropdown-button">Dropdown</button>
// 		  {isOpen && (
// 			<ul className="dropdown-menu">
// 			  <li>Menu item 1</li>
// 			  <li>Menu item 2</li>
// 			  <li>Menu item 3</li>
// 			</ul>
// 		  )}
// 		</div>
// 	  );
// }

// const FilterNavNew = () => {
// 	const [isOpen, setIsOpen] = useState(false);
  
// 	return (
// 	  <div className="dropdown">
// 		<button
// 		  className="dropdown-button"
// 		  onMouseEnter={() => setIsOpen(true)}
// 		  onMouseLeave={() => setIsOpen(false)}
// 		>
// 		  Dropdown 1
// 		</button>
// 		{isOpen && (
// 		  <ul className="dropdown-menu">
// 			<li>Menu item 1</li>
// 			<li>Menu item 2</li>
// 			<li>Menu item 3</li>
// 		  </ul>
// 		)}
  
// 		<button
// 		  className="dropdown-button"
// 		  onMouseEnter={() => setIsOpen(true)}
// 		  onMouseLeave={() => setIsOpen(false)}
// 		>
// 		  Dropdown 2
// 		</button>
// 		{isOpen && (
// 		  <ul className="dropdown-menu">
// 			<li>Menu item 1</li>
// 			<li>Menu item 2</li>
// 			<li>Menu item 3</li>
// 		  </ul>
// 		)}
  
// 		<button
// 		  className="dropdown-button"
// 		  onMouseEnter={() => setIsOpen(true)}
// 		  onMouseLeave={() => setIsOpen(false)}
// 		>
// 		  Dropdown 3
// 		</button>
// 		{isOpen && (
// 		  <ul className="dropdown-menu">
// 			<li>Menu item 1</li>
// 			<li>Menu item 2</li>
// 			<li>Menu item 3</
  