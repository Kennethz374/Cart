import { GiShoppingCart } from "react-icons/gi";
import React, { useState, useReducer } from "react";
import data from "./data";
import Item from "./Item";

// {
// 	id: 1,
// 	title: "Samsung Galaxy S7",
// 	price: 599.99,
// 	img:
// 		"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
// 	amount: 1,
// }
function App() {
	const reducer = (state, action) => {
		if (action.type === "ADD_ITEM") {
			const newAmount = [...state, state.amount + 1];
			return { ...state, amount: newAmount };
		}
		return state;
	};

	const [state, dispatch] = useReducer(reducer, data);

	return (
		<>
			<header>
				<div className="header-center">
					<h1>Reducer Shopping Cart</h1>
					<GiShoppingCart className="cart" />
				</div>
			</header>

			<section className="bag">
				<h1 className="title">kenneth's cart</h1>

				{state.map((item) => {
					return <Item key={item.id} {...item} />;
				})}

				{/* Checkout ============= total */}

				<hr />
				<div className="checkout">
					<h4>total</h4>
					<h4>$ 1199.99</h4>
				</div>
			</section>
		</>
	);
}

export default App;
