import React from "react";
import Item from "./Item";
import { useGlobalContext } from "./context";

function ItemContainer() {
	const { cart, totalPrice, clearAll } = useGlobalContext();
	if (!cart.length) {
		return (
			<section className="bag">
				<h1 className="title">kenneth's cart</h1>
				<h4>Nothing in the cart</h4>
			</section>
		);
	}
	return (
		<section className="bag">
			<h1 className="title">kenneth's cart</h1>

			{cart.map((item) => {
				return <Item key={item.id} {...item} />;
			})}

			<hr />
			<div className="checkout">
				<h4>total</h4>
				<h4>$ {totalPrice.toFixed(2)}</h4>
			</div>

			<button className="clear-all" onClick={clearAll}>
				Clear Cart
			</button>
		</section>
	);
}

export default ItemContainer;
