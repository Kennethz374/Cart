import React from "react";
import Item from "./Item";
import { useGlobalContext } from "./context";

function ItemContainer() {
	const { cart, total } = useGlobalContext();
	return (
		<section className="bag">
			<h1 className="title">kenneth's cart</h1>

			{cart.map((item) => {
				return <Item key={item.id} {...item} />;
			})}

			<hr />
			<div className="checkout">
				<h4>total</h4>
				<h4>$ {total}</h4>
			</div>
		</section>
	);
}

export default ItemContainer;
