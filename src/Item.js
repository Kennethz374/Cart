import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import React from "react";
import { useGlobalContext } from "./context";

function Item({ id, img, title, price, amount }) {
	const { remove, toggleAmount } = useGlobalContext();
	return (
		<div className="item">
			<img src={img} alt="img" className="item-img" />
			<div className="item-info">
				<h2 className="item-name">{title}</h2>
				<h3 className="item-price">$ {price}</h3>
				<button className="remove-item" onClick={() => remove(id)}>
					remove
				</button>
			</div>
			<div className="item-cal">
				<AiOutlinePlus
					className="plus"
					onClick={() => toggleAmount(id, "inc")}
				/>
				<h4 className="item-quantity">{amount}</h4>
				<AiOutlineMinus
					className="minus"
					onClick={() => toggleAmount(id, "dec")}
				/>
			</div>
		</div>
	);
}

export default Item;
