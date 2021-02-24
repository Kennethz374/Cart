import React from "react";
import { GiShoppingCart } from "react-icons/gi";

function Header() {
	return (
		<header>
			<div className="header-center">
				<h1>Reducer Shopping Cart</h1>
				<GiShoppingCart className="cart" />
			</div>
		</header>
	);
}

export default Header;
