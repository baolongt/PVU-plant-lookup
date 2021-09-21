import Input from "./Input";
import { Provider } from "react-redux";
import store from "./store";
import Output from "./Output";
import { useEffect, useState } from "react";
import "./css/plant-lookup.css";
import moment from "moment";

function toFixed(value, precision) {
	var power = Math.pow(10, precision || 0);
	return String(Math.round(value * power) / power);
}

const PlantLookup = () => {
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

	return (
		<>
			<p style={{ color: '#EEEEEE' }} className="h1 text-center m-3">
				Plant Lookup
			</p>
			<div className="shadow p-3 mb-2 bg-dark rounded col-12 col-md-8 col-lg-6 mx-auto fs-6">
				<Provider store={store}>
					<Input></Input>
					<Output price={price} fixFunc={toFixed}></Output>
				</Provider>
			</div>
			{/* <div className="text-light d-flex justify-content-center rate col-12 mx-lg-0">
				<div className="p-2 me-2 bg-dark">
					<p>PVU token</p>
					<p>Price: {price}$</p>
					<p>Updated {udpateTime}</p>
				</div>
				<div className="p-2 bg-dark">
					<p>Light Energy(LE) rate</p>
					<p>1 PVU = 105 LE</p>
					<p>150 LE = 1 PVU</p>
					<p>(Not include 5% tax)</p>
				</div>
			</div> */}
			{/* <div className="mt-3" style={{ color: "#FFD369" }}>
				<p className="text-center">Don't sad if your plant is common one</p>
				<p className="text-center">Anything that just costs money is cheap</p>
				<p className="text-center">
					Thanks <b>@Cherry3136</b> and <b>Mr.Vinsmoke</b> for the contribute
				</p>
				<p className="text-center">
					Donate me: 0x4eAA5f182AcA60A9560b480FE737bc7bC9E33fcB (Binance Smart
					Chain)
				</p>
			</div> */}
			<div className="mt-3" style={{ color: '#FFD369' }}>
				{/* <p className="text-center">Visit count: {counter}</p> */}
			</div>
			<p className="d-none" align="left">
				{' '}
				<img
					src="https://komarev.com/ghpvc/?username=baolongt&label=Profile%20views&color=0e75b6&style=flat"
					alt="baolongt"
				/>{' '}
			</p>
		</>
	)
};

export default PlantLookup;
