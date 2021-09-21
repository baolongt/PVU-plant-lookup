import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import PlantLookup from "./PlantLookup";
import GardenSimulator from "./gardenSimulator/GardenSimulator";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	let [counter, setCounter] = useState(0);
	useEffect(() => {
		const getCounterAPI = async () => {
			let res = await fetch(
				"https://api.countapi.xyz/hit/baolongt.github.io/PVU-plant-lookup"
			);
			let data = await res.json();
			setCounter(data.value);
		};
		getCounterAPI();
	}, []);

	return (
		<div class="d-flex flex-column justify-content-between vh-100">
			<div>
				<Switch>
					<Route exact path="/" component={Landing}></Route>
					<Route path="/plant-lookup" component={PlantLookup}></Route>
					<Route path="/garden-simulator" component={GardenSimulator}></Route>
				</Switch>
			</div>
			<div className="text-warning">
				<p className="text-center">Visit count: {counter}</p>
				<p className="text-center">contact via telegram @long2401</p>
				<p className="text-center">
					Donate 0x4eAA5f182AcA60A9560b480FE737bc7bC9E33fcB (Binance Smart
					Chain)
				</p>
			</div>
			<p className="d-none" align="left">
				{" "}
				<img
					src="https://komarev.com/ghpvc/?username=baolongt&label=Profile%20views&color=0e75b6&style=flat"
					alt="baolongt"
				/>{" "}
			</p>
		</div>
	);
};

export default App;
