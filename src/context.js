import React, { useContext, useReducer, useEffect } from "react";
import cartItem from "./data";
import { reducer } from "./reducer";
const AppContext = React.createContext();

const defaultState = {
	loading: false,
	cart: cartItem,
	totalPrice: 0,
	totalQuantity: 0,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, defaultState);

	const clearAll = () => {
		dispatch({ type: "CLEAR_ALL" });
	};

	const remove = (id) => {
		dispatch({ type: "REMOVE", payload: id });
	};

	const toggleAmount = (id, type) => {
		dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
	};

	const getTotalQuantity = () => {
		dispatch({ type: "GET_TOTAL" });
	};

	const getTotalPrice = () => {
		dispatch({ type: "GET_PRICE" });
	};

	useEffect(() => {
		getTotalQuantity();
	}, [state.cart]);
	useEffect(() => {
		getTotalPrice();
	}, [state.cart]);

	return (
		<AppContext.Provider
			value={{
				...state,
				clearAll,
				remove,
				toggleAmount,
				// getTotalQuantity,
				// getTotalPrice,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
