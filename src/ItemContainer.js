import React from "react";
import Item from "./Item";
import cartItem from "./data";

function ItemContainer() {
	return (
		<section className="bag">
			<h1 className="title">kenneth's cart</h1>

			{cartItem.map((item) => {
				return <Item key={item.id} {...item} />;
			})}

			<hr />
			<div className="checkout">
				<h4>total</h4>
				<h4>$ 12222</h4>
			</div>
		</section>
	);
}

export default ItemContainer;
