import { createContext, useState } from "react";

const ContextUser = createContext();

const UserProvider = ({ children }) => {

	const [user, setUser] = useState("");

	const authorized = (username) => {
		setUser(username);
	}

	// console.log("username context")
	// console.log(user);
	return (
		<ContextUser.Provider value={{authorized, user }} >
			{children}
		</ContextUser.Provider>
	)
}

export {ContextUser, UserProvider}