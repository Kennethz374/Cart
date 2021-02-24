export const reducer = (state, action) => {
	if (action.type === "CLEAR_ALL") {
		return { ...state, cart: [] };
	}
	return state;
};
