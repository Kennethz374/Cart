import { GiShoppingCart } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

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
				{/* ======================== Item Component============================== */}
				<div className="item">
					<img
						src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png"
						alt=""
						className="item-img"
					/>
					<div className="item-info">
						<h2 className="item-name">Samsung Galaxy S8</h2>
						<h3 className="item-price">$ 99.99</h3>
						<button className="remove-item">remove</button>
					</div>
					<div className="item-cal">
						<AiOutlinePlus className="plus" />
						<h4 className="item-quantity">1</h4>
						<AiOutlineMinus className="minus" />
					</div>
				</div>

				<div className="item">
					<img
						src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png"
						alt=""
						className="item-img"
					/>
					<div className="item-info">
						<h2 className="item-name">Samsung Galaxy S8</h2>
						<h3 className="item-price">$ 99.99</h3>
						<button className="remove-item">remove</button>
					</div>
					<div className="item-cal">
						<AiOutlinePlus className="plus" />
						<h4 className="item-quantity">1</h4>
						<AiOutlineMinus className="minus" />
					</div>
				</div>
				{/* item component ============================ */}

				{/* Checkout ============= total */}
			</section>
		</>
	);
}

export default App;
