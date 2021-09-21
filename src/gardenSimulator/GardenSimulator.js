import { useEffect, useState } from "react";
import IDCalculate from "../IDCalculate";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/garden-simulator.css";
import Sunflower from "../plantAssets/Sunflower";
import Plant from "../plantAssets/Plant";
import TotalBoard from "./TotalBoard";
import Tool from "../plantAssets/Tool";

const calculateTotal = ({ team, total }) => {
	total.totalPlant = team.length;
	total.totalSapling = team.filter((plant) => {
		return plant.plantID === "sapling";
	}).length;
	total.totalMama = team.filter((plant) => {
		return plant.plantID === "mama";
	}).length;
	total.totlaLEPerHour = 0;
	total.totlaLEPerDay = 0;
	team.forEach((plant) => {
		total.totlaLEPerHour += plant.LE / plant.hour;
	});
	return { ...total };
};

const TeamCalculate = () => {
	const [team, setTeam] = useState([]);
	const [total, setTotal] = useState({
		totalSapling: 0,
		totalMama: 0,
		totlaLEPerHour: 0,
		totalPlant: 0,
		totalBigPotUsed: 0,
		totalSmallPotUsed: 0,
		totalWatered: 0,
		scareCrowUsed: 0,
		greenHouseUsed: 0
	});
	useEffect(() => {
		let team = JSON.parse(localStorage.getItem("team"));
		if (!Array.isArray(team)) {
			setTeam([]);
		} else {
			setTeam(team);
		}
	}, []);
	useEffect(() => {
		setTotal(calculateTotal({ team, total }));
	}, [team]);
	const handleAddPlant = (plant) => {
		if (plant) {
			let array = [...team];
			array.push(plant);
			setTeam(array);
			localStorage.setItem("team", JSON.stringify(array));
		}
	};
	const handleRemovePlant = (index) => {
		let array = team.filter((plant, i) => {
			// eslint-disable-next-line eqeqeq
			return i != index;
		});
		setTeam(array);
		localStorage.setItem("team", JSON.stringify([...array]));
	};
	const handleWaterPlant = (num) => {
		setTotal({ ...total, totalWatered: num });
	};
	const handleUsePot = () => {
		let totalBigPotUsed = team.filter((plant) => {
			return !isNaN(plant.plantID);
		}).length;
		let totalSmallPotUsed = team.length - totalBigPotUsed;
		setTotal({ ...total, totalBigPotUsed, totalSmallPotUsed });
		return { totalBigPotUsed, totalSmallPotUsed };
	};
	const handleUseScareCrow = (num) => {
		setTotal({ ...total, scareCrowUsed: num });
	};
	const handleUseGreenHouse = (num) => {
		setTotal({ ...total, greenHouseUsed: num });
	};
	const handleClearAll = () => {
		setTeam([]);
		localStorage.removeItem("team");
	};
	return (
		<>
			<h2 className="text-light text-center">Garden simulator</h2>
			<div className="row">
				<div class="col-12 d-flex flex-column flex-md-row justify-content-between">
					<Input
						addPlantFunc={handleAddPlant}
						waterAllPlant={handleWaterPlant}
						usePot={handleUsePot}
						useScareCrow={handleUseScareCrow}
						useGreenHouse={handleUseGreenHouse}
					></Input>
					<TotalBoard data={total} />
				</div>
				<div class="col-12 d-flex justify-content-center">
					<button class="btn btn-danger mt-2" onClick={handleClearAll}>
						Clear all
					</button>
				</div>
				<div className="col-12 col-md-9 p-5">
					<div className="d-flex row" style={{ minHeight: "160px" }}>
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
				</div>
			</div>
		</>
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
		<div className="col-12 p-2">
			<div className="d-flex col-12 col-lg-8 mt-3 mx-auto">
				<input
					className="form-control"
					type="text"
					value={plantID}
					placeholder="Plant id"
					onChange={(e) => setPlantID(e.target.value.trim())}
				/>
				<button
					className="ms-1 btn btn-primary col-4 col-lg-3"
					onClick={handleAdd}
				>
					Add
				</button>
			</div>
			<div className="d-flex col-12 col-lg-8 mt-2 mx-auto">
				<button
					className="btn btn-success btn-sm col-6"
					onClick={() => handleAddSunflower("sapling")}
				>
					Add sapling
				</button>
				<button
					className="btn btn-warning btn-sm col-6"
					onClick={() => handleAddSunflower("mama")}
				>
					Add mama
				</button>
			</div>
			<div className="d-flex col-12 col-lg-8 mt-2 flex-column mx-auto">
				<p className="col-12 text-center text-light">Tool assets</p>
				<div className="col-12 d-flex flex-column flex-xl-row">
					<div class="col-12 col-xl-6">
						<Tool
							toolID="2"
							name="water"
							text="Water (50LE)"
							type="input"
							func={props.waterAllPlant}
						/>
						<Tool toolID="4" name="bigpot" text="Buy pot" func={props.usePot} />
						<div className="text-light mb-1" style={{ fontSize: "14px" }}>
							(Big pot for NFT and small pot for sunflower)
						</div>
					</div>
					<div className="col-12 col-xl-6">
						<Tool
							toolID="1"
							name="scarecrow"
							text="Scare crow (20LE)"
							type="input"
							func={props.useScareCrow}
						/>
						<Tool
							toolID="5"
							name="greenhouse"
							text="Green house (10LE)"
							type="input"
							func={props.useGreenHouse}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCalculate;
