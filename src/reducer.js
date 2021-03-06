export const reducer = (state, action) => {
	if (action.type === "CLEAR_ALL") {
		return { ...state, cart: [] };
	}
	if (action.type === "REMOVE") {
		const newCart = state.cart.filter((item) => item.id !== action.payload);
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

	if (action.type === "GET_TOTAL") {
		let { totalPrice, totalQuantity } = state.cart.reduce(
			(cartTotal, cartItem) => {
				const { price, amount } = cartItem;
				const singleItemTotal = price * amount;

				cartTotal.totalPrice += singleItemTotal;
				cartTotal.totalQuantity += amount;
				return cartTotal;
			},
			{
				totalPrice: 0,
				totalQuantity: 0,
			}
		);
		totalPrice.toFixed(2);
		return { ...state, totalPrice, totalQuantity };
	}
	// ============MY CODE IS EASIER TO UNDERSTAND=================

	// if (action.type === "GET_TOTAL") {
	// 	let amountArr = state.cart.map((item) => item.amount);
	// 	if (!amountArr.length) {
	// 		return { ...state, cart: [], totalQuantity: 0 };
	// 	} else {
	// 		let tempTotalQuantity = amountArr.reduce((acc, val) => acc + val);
	// 		return { ...state, totalQuantity: tempTotalQuantity };
	// 	}
	// }

	// if (action.type === "GET_PRICE") {
	// 	let amountArr = state.cart.map((item) => item.amount * item.price);
	// 	if (!amountArr.length) {
	// 		return { ...state, cart: [] };
	// 	} else {
	// 		let tempTotalPrice = amountArr.reduce((acc, val) => acc + val);
	// 		return { ...state, totalPrice: tempTotalPrice };
	// 	}
	// }

	if (action.type === "TOGGLE_MODAL") {
		return { ...state, isModalOpen: !state.isModalOpen };
	}
	throw new Error("NOT MATCHING ACTION FOUND...");
};
