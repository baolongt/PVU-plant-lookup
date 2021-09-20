/* eslint-disable eqeqeq */
import moment from "moment";
import { useEffect, useState } from "react";
import { ToolsList } from "../plantAssets/ToolsList";

function toFixed(value, precision) {
	var power = Math.pow(10, precision || 0);
	return String(Math.round(value * power) / power);
}

const toolPriceCalculate = ({
	totalBigPotUsed,
	totalSmallPotUsed,
	totalWatered,
	scareCrowUsed,
	greenHouseUsed
}) => {
	let sum = 0;
	ToolsList.forEach((tool, index) => {
		let rate = tool.price / tool.quantity;
		// eslint-disable-next-line default-case
		switch (index) {
			case 0:
				sum += scareCrowUsed * rate;
				break;
			case 1:
				sum += totalWatered * rate;
				break;
			case 4:
				sum += greenHouseUsed * rate;
				break;
		}
	});
	return sum;
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

	let {
		totalSapling,
		totalMama,
		totlaLEPerHour,
		totalPlant,
		totalBigPotUsed,
		totalSmallPotUsed,
		totalWatered,
		scareCrowUsed,
		greenHouseUsed
	} = props.data;
	let tax = 95 / 100;
	let LEtoPVU = 150;
	totlaLEPerHour = totlaLEPerHour * tax;
	let totlaPVUPerHour = totlaLEPerHour / LEtoPVU;
	let totalPrice = totlaPVUPerHour * price;
	let totalSpendForSunflower = totalSapling * 100 + totalMama * 200;
	let totalSpendForTool = toolPriceCalculate({
		totalBigPotUsed,
		totalSmallPotUsed,
		totalWatered,
		scareCrowUsed,
		greenHouseUsed
	});
	let netLEIncome = totlaLEPerHour * 24 - totalSpendForTool;
	let netIncome = netLEIncome / LEtoPVU;
	return (
		<div
			style={{ minHeight: "100px" }}
			className="col-12 ps-3 text-start flex-column d-flex text-light mt-3"
		>
			<div className="col-12">
				<div>
					Total LE spend for sunflowers:{" "}
					<span
						className={`text-${
							totalSpendForSunflower == 0 ? "light" : "danger"
						} ms-auto`}
					>
						{totalSpendForSunflower}
					</span>
				</div>
				<div>
					Total LE spend for tools (not inclued pot):{" "}
					<span
						className={`text-${
							totalSpendForTool == 0 ? "light" : "danger"
						} ms-auto`}
					>
						{totalSpendForTool}
					</span>
				</div>
			</div>
			<div className="col-12">
				<div>
					LE per hour:
					<span> {toFixed(totlaLEPerHour, 2)}</span> -{" "}
					<span style={{ color: "#20c997" }}>
						{toFixed(totlaPVUPerHour, 2)} PVU{" "}
					</span>{" "}
					~<span style={{ color: "#20c997" }}>{toFixed(totalPrice, 2)}$</span>
				</div>
				<div>
					LE per day:
					<span> {toFixed(totlaLEPerHour * 24, 2)}</span> -{" "}
					<span style={{ color: "#20c997" }}>
						{toFixed(totlaPVUPerHour * 24, 2)} PVU
					</span>{" "}
					~
					<span style={{ color: "#20c997" }}>
						{toFixed(totalPrice * 24, 2)}$
					</span>
				</div>
				<div>
					Net LE:
					<span> {toFixed(netLEIncome, 2)}</span> -{" "}
					<span style={{ color: "#20c997" }}>{toFixed(netIncome, 2)} PVU</span>{" "}
					~
					<span style={{ color: "#20c997" }}>
						{toFixed(netIncome * price, 2)}$
					</span>
				</div>
			</div>
			<p className="fw-normal text-center mb-0">(included tax 5%)</p>
			<div className="col-12">
				<p>
					Total: {totalPlant - totalSapling - totalMama} NFT - {totalSapling}{" "}
					sapling, {totalMama} mama ({totalPlant})
				</p>
				<p>
					PVU = {price}$ updated {udpateTime}
				</p>
			</div>
			<div>Sorry for bad UI. Formula will update</div>
		</div>
	);
};

export default TotalBoard;
