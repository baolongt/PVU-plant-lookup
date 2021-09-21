import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import changePlant from "./actionCreator/changePlant";

const regex = "[0-2]{3}[0-9]{2}[1-3]{1}[0-9]{2}[0-9]{2,6}";
const Input = () => {
	const plant = useSelector((state) => state.plant);
	const [plantID, setPlantID] = useState(plant);
	const dispatch = useDispatch();
	const handleLookup = () => {
		setPlantID(plantID);
		if (plantID.match(regex)) {
			dispatch(changePlant(plantID));
		} else {
			dispatch(changePlant(""));
		}
	};
	return (
		<div className="d-flex m-auto" style={{ backgroundColor: "#EEEEEE", maxWidth: "550px" }}>
			<input
				className="form-control"
				type="text"
				value={plantID}
				placeholder="Plant id"
				onChange={(e) => setPlantID(e.target.value.trim())}
			/>
			<button className="btn btn-primary col-3 rounded-0" onClick={handleLookup}>
				Look up
			</button>
		</div>
	);
};

export default Input;
