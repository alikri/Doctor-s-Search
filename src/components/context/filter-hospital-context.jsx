import { createContext } from "react";

const Context = createContext();

function FilterHospitalProvider({children}) {
	
	return (
		<Context.Provider value={"context"}>
			{children}
		</Context.Provider>
	)

}

export { Context, FilterHospitalProvider };