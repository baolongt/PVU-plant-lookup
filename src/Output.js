import { useSelector } from "react-redux";
import IDCalculate from "./IDCalculate.js";

const valueCal = (rarity) => {
	// eslint-disable-next-line eqeqeq
	if (rarity == 59 || rarity == 88 || rarity == 98) {
		return (
			<p>
				(Most value) <div class="badge rounded-pill bg-dark tip">?</div>
			</p>
		);
	}
};

const Output = (props) => {
	const plant = useSelector((state) => state.plant);
	const { img, id, color, rarityType, rarity, LE, type, element, hour } =
		IDCalculate(plant);
	let tax = 95 / 100;
	let LEperHour = (LE / hour) * tax;
	let LEperDay = LEperHour * 24;
	return plant === "" ? (
		<>
			<p className="text-center h3 mt-4">Wrong input</p>
		</>
	) : (
		<div className="d-flex m-auto mt-4 justify-content-center">
			<Img id={id} imgType={img} />
			<div className="ms-3">
				<p>Type: {type}</p>
				<p>
					Rarity: <span style={{ color: `${color}` }}>{rarityType}</span>
				</p>
				<p>Element: {element}</p>
				<p>
					LE: {LE}/{hour} hours{" "}
					<span style={{ color: `${color}` }}>{valueCal(rarity)}</span>
				</p>
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
				<p>(include 5% tax)</p>
			</div>
		</div>
	);
};

const Img = (props) => {
	return (
		<img
			className="w-25 h-25 me-4"
			src={
				process.env.PUBLIC_URL + `/assets/img/${props.id}_${props.imgType}.png`
			}
			alt={props.id}
		/>
	);
};
export default Output;
