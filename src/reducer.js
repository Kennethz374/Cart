export const reducer = (state, action) => {
	if (action.type === "CLEAR_ALL") {
		return { ...state, cart: [] };
	}
	if (action.type === "REMOVE") {
		const newCart = state.cart.filter((item) => item.id != action.payload);
		return { ...state, cart: newCart };
	}

	if (action.type === "TOGGLE_AMOUNT") {
		let tempCart = state.cart
			.map((cartItem) => {
				if (cartItem.id === action.payload.id) {
					if (action.payload.type === "inc") {
						return { ...cartItem, amount: cartItem.amount + 1 }; //meet condition modifie item
					}
					if (action.payload.type === "dec") {
						return { ...cartItem, amount: cartItem.amount - 1 }; //meet condition modifie item
					}
				}
				return cartItem; //if didn't meet condition return items
			})
			.filter((cartItem) => cartItem.amount !== 0);
		return { ...state, cart: tempCart };
	}

	return state;
};
