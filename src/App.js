import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import Item from "./Item";
import cartItem from "./data";

function App() {
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

				{cartItem.map((item) => {
					return <Item key={item.id} {...item} />;
				})}

				<hr />
				<div className="checkout">
					<h4>total</h4>
					<h4>$ 12222</h4>
				</div>
			</section>
		</>
	);
}

export default App;
