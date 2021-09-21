import { useSelector } from "react-redux";
import IDCalculate from "./IDCalculate.js";
import Plant from "./plantAssets/Plant.js";

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
			<Plant data={{img, rarityType, plantID, id, element, LE, hour }} />
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

// const Img = (props) => {
// 	return (
// 		<img
// 			className="w-25 h-25 me-4"
// 			src={
// 				process.env.PUBLIC_URL + `/assets/img/${props.id}_${props.imgType}.png`
// 			}
// 			alt={props.id}
// 		/>
// 	);
// };
export default Output;
