import React, { useContext, useReducer } from "react";
import cartItem from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	return (
		<AppContext.Provider value={{ cart: cartItem, loading: false }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
