import { useEffect, useState } from "react";
import IDCalculate from "./IDCalculate";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import "./css/garden-simulator.css";
function toFixed(value, precision) {
	var power = Math.pow(10, precision || 0);
	return String(Math.round(value * power) / power);
}

const calculateTotal = (team) => {
	let totalPlant = team.length;
	let totalSapling = team.filter((plant) => {
		return plant.plantID === "sapling";
	}).length;
	let totalMama = team.filter((plant) => {
		return plant.plantID === "mama";
	}).length;
	let totlaLEPerHour = 0;
	let totlaLEPerDay = 0;
	team.forEach((plant) => {
		totlaLEPerHour += plant.LE / plant.hour;
	});
	totlaLEPerDay = totlaLEPerHour * 24;
	return {
		totalSapling,
		totalMama,
		totlaLEPerHour,
		totlaLEPerDay,
		totalPlant
	};
};

const TeamCalculate = () => {
	const [team, setTeam] = useState([]);
	const [total, setTotal] = useState({
		totlaLEPerHour: 0,
		totlaLEPerDay: 0,
		totalPlant: 0
	});
	const handleAddPlant = (plant) => {
		if (plant) {
			let array = [...team];
			array.push(plant);
			setTeam(array);
			localStorage.setItem("team", JSON.stringify(array));
		}
	};
	const handleRemovePlant = (index) => {
		let array = [...team];
		let prev = array.splice(0, index);
		let behind = array.splice(index, array.length - 1);
		setTeam([...prev, ...behind]);
		localStorage.setItem("team", JSON.stringify([...prev, ...behind]));
	};
	useEffect(() => {
		let team = JSON.parse(localStorage.getItem("team"));
		if (!Array.isArray(team)) {
			setTeam([]);
		} else {
			setTeam(team);
		}
	}, []);
	useEffect(() => {
		setTotal(calculateTotal(team));
	}, [team]);
	return (
		<>
			<h2 className="text-light text-center">Garden simulator</h2>
			<Input addPlantFunc={handleAddPlant}></Input>
			<TotalBoard data={total} />
			<div></div>
			<div className="row mx-auto" style={{ minHeight: "160px" }}>
				{team.map((plant, index) => {
					return isNaN(plant.plantID) ? (
						<Sunflower
							data={plant}
							index={index}
							key={index}
							removeFunc={handleRemovePlant}
						/>
					) : (
						<Plant
							data={plant}
							index={index}
							key={index}
							removeFunc={handleRemovePlant}
						/>
					);
				})}
			</div>
		</>
	);
};

const TotalBoard = (props) => {
	const [price, setPrice] = useState(0);
	const [udpateTime, setUdpateTime] = useState(0);
	useEffect(() => {
		const getAPI = async () => {
			let res = await fetch(
				"https://api.pancakeswap.info/api/v2/tokens/0x31471e0791fcdbe82fbf4c44943255e923f1b794"
			);
			let data = await res.json();
			setPrice(toFixed(data.data.price, 2));
			setUdpateTime(moment(data.updated_at).fromNow());
		};
		getAPI();
	});
	let total = props.data;
	let tax = 95 / 100;
	let LEtoPVU = 150;
	let totlaLEPerHour = total.totlaLEPerHour * tax;
	let totlaPVUPerHour = totlaLEPerHour / LEtoPVU;
	let totalPrice = totlaPVUPerHour * price;
	return (
		<div
			style={{ fontSize: "16px" }}
			className="mt-2 row mx-auto col-12 col-lg-4 text-light d-flex p-3"
		>
			<div
				style={{ minHeight: "100px" }}
				className="col-12 col-md-10 mx-auto text-start fw-bold"
			>
				<p>
					LE per hour:
					<span> {toFixed(totlaLEPerHour, 2)}</span> -{" "}
					<span style={{ color: "#20c997" }}>
						{toFixed(totlaPVUPerHour, 2)} PVU{" "}
					</span>{" "}
					~<span style={{ color: "#20c997" }}>{toFixed(totalPrice, 2)}$</span>
				</p>
				<p>
					LE per day:
					<span> {toFixed(totlaLEPerHour * 24, 2)}</span> -
					<span style={{ color: "#20c997" }}>
						{toFixed(totlaPVUPerHour * 24, 2)} PVU
					</span>{" "}
					~
					<span style={{ color: "#20c997" }}>
						{toFixed(totalPrice * 24, 2)}$
					</span>
				</p>
				<p className="fw-normal">(include tax 5%)</p>
				<p>
					Total: {total.totalPlant - total.totalSapling - total.totalMama} NFT -{" "}
					{total.totalSapling} sapling, {total.totalMama} mama
				</p>
				<p>
					PVU = {price}$ updated {udpateTime}
				</p>
			</div>
		</div>
	);
};

const Input = (props) => {
	const [plantID, setPlantID] = useState("");
	const handleAdd = () => {
		if (!isNaN(plantID)) {
			props.addPlantFunc(IDCalculate(plantID));
			setPlantID("");
		}
	};
	const handleAddSunflower = (id) => {
		props.addPlantFunc(IDCalculate(id));
	};
	return (
		<>
			<div className="d-flex m-auto col-10 col-lg-4 mt-3">
				<input
					className="form-control"
					type="text"
					value={plantID}
					placeholder="Plant id"
					onChange={(e) => setPlantID(e.target.value.trim())}
				/>
				<button className="ms-1 btn btn-primary col-3" onClick={handleAdd}>
					Add
				</button>
			</div>
			<div className="d-flex justify-content-center col-12 col-lg-12 mt-2">
				<button
					className="ms-1 btn btn-success col-4 col-md-2 col-lg-1"
					onClick={() => handleAddSunflower("sapling")}
				>
					Add sapling
				</button>
				<button
					className="ms-1 btn btn-warning col-4 col-md-2 col-lg-1"
					onClick={() => handleAddSunflower("mama")}
				>
					Add mama
				</button>
			</div>
		</>
	);
};
const Sunflower = (props) => {
	let data = props.data;
	return (
		<div className="col-lg-3 col-12 mb-2" style={{ minHeight: "160px" }}>
			<div
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", minHeight: "100%" }}
				className="d-flex"
			>
				<div className="col-4">
					<div className="w-50 h-50 mx-auto mt-3">
						<Img id={data.id} imgType={data.img}></Img>
					</div>
				</div>
				<div className="col-6 text-white mt-4 pt-1">
					<p className="text-capitalize">{data.plantID}</p>
					<p>
						LE: {data.LE}/{data.hour} hours
					</p>
				</div>
				<div className="col-2 d-flex flex-row-reverse">
					<button
						type="button"
						className="btn-close btn-close-white"
						aria-label="Close"
						onClick={() => props.removeFunc(props.index)}
					></button>
				</div>
			</div>
		</div>
	);
};
const Plant = (props) => {
	let data = props.data;
	return (
		<div className="col-lg-3 col-12 mb-2">
			<div
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", minHeight: "100%" }}
				className="d-flex"
			>
				<div className="col-4">
					<div className="w-50 h-50 mx-auto mt-3">
						<Img id={data.id} imgType={data.img}></Img>
					</div>
				</div>
				<div className="col-6 text-white mt-2">
					<p>ID: {data.plantID}</p>
					<p>
						Rarity:{" "}
						<span style={{ color: `${data.color}` }}>{data.rarityType}</span>
					</p>
					<p>
						LE: {data.LE}/{data.hour} hours
					</p>
					<p>Element: {data.element}</p>
				</div>
				<div className="col-2 d-flex flex-row-reverse">
					<button
						type="button"
						className="btn-close btn-close-white"
						aria-label="Close"
						onClick={() => props.removeFunc(props.index)}
					></button>
				</div>
			</div>
		</div>
	);
};
const Img = (props) => {
	return isNaN(props.id) ? (
		<img
			className="w-100 plant me-4 mt-3"
			src={process.env.PUBLIC_URL + `/assets/img/${props.imgType}.png`}
			alt={props.id}
		/>
	) : (
		<img
			className="w-100 plant me-4 mt-3"
			src={
				process.env.PUBLIC_URL + `/assets/img/${props.id}_${props.imgType}.png`
			}
			alt={props.id}
		/>
	);
};
export default TeamCalculate;
