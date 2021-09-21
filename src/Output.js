import { useSelector } from "react-redux";
import IDCalculate from "./IDCalculate.js";
import Element from "./plantAssets/Element.js";
import Img from "./plantAssets/Img.js";
import Rarity from "./plantAssets/Rarity.js";

// const valueCal = (rarity) => {
// 	// eslint-disable-next-line eqeqeq
// 	if (rarity == 59 || rarity == 88 || rarity == 98) {
// 		return (
// 			<p>
// 				(Most value) <div class="badge rounded-pill bg-dark tip">?</div>
// 			</p>
// 		);
// 	}
// };

const Output = (props) => {
	const plant = useSelector((state) => state.plant);
	const { img, plantID, id, rarityType, LE, element, hour } =
		IDCalculate(plant);
	let tax = 95 / 100;
	let LEperHour = (LE / hour) * tax;
	let LEperDay = LEperHour * 24;
	return plant === "" ? (
		<>
			<p className="text-center h3 mt-4">Wrong input</p>
		</>
	) : (
		<div className="d-flex m-auto mt-4 flex-column flex-md-row justify-content-center text-light">
			<Plant data={{ img, rarityType, plantID, id, element, LE, hour }} />
			<div className="ms-3 my-auto">
				<p>
					LE per hour: {props.fixFunc(LEperHour, 1)} -{" "}
					{props.fixFunc(LEperHour / 150, 1)} PVU (~
					{props.fixFunc((props.price * LEperHour) / 150, 2)}
					$)
				</p>
				<p>
					LE per day: {props.fixFunc(LEperDay, 1)} -{" "}
					{props.fixFunc(LEperDay / 150, 1)} PVU (~
					{props.fixFunc((props.price * LEperDay) / 150, 2)}$)
				</p>
				<p class="p-0 m-0">(include 5% tax)</p>
			</div>
		</div>
	);
};

const Plant = (props) => {
	let data = props.data;
	return (
		<div className="col-lg-4 col-md-6 col-12 mb-2">
			<div
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", minHeight: "100%" }}
				className="d-flex flex-column"
			>
				<div className="row">
					<div className="col-5 col-md-7 col-xl-8 text-white mt-2 d-flex flex-column me-auto">
						<Rarity rarity={data.rarityType} plantID={data.plantID} />
						<Element element={data.element} />
					</div>
					<div className="col-1 me-3 pe-4">
						{props.index >= 0 && (
							<button
								type="button"
								className="btn-close btn-close-white"
								aria-label="Close"
								onClick={() => props.removeFunc(props.index)}
							></button>
						)}
					</div>
				</div>
				<div className="col-12">
					<Img id={data.id} imgType={data.img}></Img>
				</div>
				<div className="col-sm-4 col-md-8 col-lg-12 mt-auto">
					<p
						className="text-center text-white mb-0 border border-white p-1"
						style={{ fontSize: "11px", width: "60%" }}
					>
						LE: {data.LE}/{data.hour}hours
					</p>
				</div>
			</div>
		</div>
	);
};
export default Output;
