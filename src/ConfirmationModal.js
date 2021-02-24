import React from "react";
import { useGlobalContext } from "./context";

function ConfirmationModal() {
	const { clearAll, toggleModal } = useGlobalContext();
	return (
		<div className="modal">
			<div className="overlay"></div>
			<div className="modal-center">
				<h2>SURE YOU WANT TO CLEAR CART?</h2>
				<div className="btns">
					<button className="btn" onClick={toggleModal}>
						Cancel
					</button>
					<button className="btn" onClick={clearAll}>
						Yes, Clear Cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default ConfirmationModal;
