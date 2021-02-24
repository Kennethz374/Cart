import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useGlobalContext } from "./context";

function Header() {
	const { totalQuantity } = useGlobalContext();
	return (
		<header>
			<div className="header-center">
				<h1>Reducer Shopping Cart</h1>
				<div className="cart-with-amount">
					<GiShoppingCart className="cart" />
					<h2 className="totalAmount">{totalQuantity}</h2>
				</div>
			</div>
		</header>
	);
}

export default Header;
