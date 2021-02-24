import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import React from "react";

function Item({ img, title, price, amount }) {
	return (
		<div className="item">
			<img src={img} alt="img" className="item-img" />
			<div className="item-info">
				<h2 className="item-name">{title}</h2>
				<h3 className="item-price">$ {price}</h3>
				<button
					className="remove-item"
					onClick={() => {
						console.log("remove");
					}}
				>
					remove
				</button>
			</div>
			<div className="item-cal">
				<AiOutlinePlus
					className="plus"
					onClick={() => console.log("ADD Item")}
				/>
				<h4 className="item-quantity">{amount}</h4>
				<AiOutlineMinus
					className="minus"
					onClick={() => console.log("Minus 1")}
				/>
			</div>
		</div>
	);
}

export default Item;
