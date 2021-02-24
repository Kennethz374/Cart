import React, { useContext, useReducer } from "react";
import cartItem from "./data";
import { reducer } from "./reducer";
const AppContext = React.createContext();

const defaultState = {
	loading: false,
	cart: cartItem,
	total: 0,
	totalAmount: 0,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, defaultState);

	const clearAll = () => {
		dispatch({ type: "CLEAR_ALL" });
	};

	return (
		<AppContext.Provider value={{ ...state, clearAll }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
