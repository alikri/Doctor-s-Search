

const generateData = (dataName,n) => {
	let arr = []; 
	for (let i = 0; i < n; i++) {
		arr.push({ "id": i, "name": `${dataName} ${i} `});
	}
	return arr;
}

export default generateData;