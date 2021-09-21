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
	let ToolSum = 0;
	let PotSum = 0;
	ToolsList.forEach((tool, index) => {
		let price = tool.price;
		// eslint-disable-next-line default-case
		switch (index) {
			case 0:
				ToolSum += scareCrowUsed * price;
				break;
			case 1:
				ToolSum += totalWatered * price;
				break;
			case 4:
				ToolSum += greenHouseUsed * price;
				break;
			case 3:
				PotSum += totalSmallPotUsed * price;
				break;
			case 2:
				PotSum += totalBigPotUsed * price;
				break;
		}
	});
	return {
		PotSum,
		ToolSum
	};
};

const TotalBoard = (props) => {
	const [price, setPrice] = useState(0);
	const [udpateTime, setUdpateTime] = useState(0);
	const [rate, setRate] = useState(0);
	const [oldPrice, setOldPrice] = useState(0);
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
	totlaLEPerHour = totlaLEPerHour;
	let totlaPVUPerHour = totlaLEPerHour / LEtoPVU;
	let totalPrice = totlaPVUPerHour * price;
	let totalSpendForSunflower = totalSapling * 100 + totalMama * 200;
	let { PotSum, ToolSum } = toolPriceCalculate({
		totalBigPotUsed,
		totalSmallPotUsed,
		totalWatered,
		scareCrowUsed,
		greenHouseUsed
	});
	let netLEIncome = totlaLEPerHour * 24 - ToolSum;
	let totalSpend = ToolSum + PotSum + totalSpendForSunflower;
	return (
		<div
			style={{ minHeight: "100px" }}
			className="col-12 col-md-6 ps-3 text-start flex-column d-flex text-light mt-3 mx-auto"
		>
			<div className="col-12 ms-2">
				<p>
					Total: {totalPlant - totalSapling - totalMama} NFT - {totalSapling}{" "}
					sapling, {totalMama} mama ({totalPlant})
				</p>
			</div>
			<div className="col-12">
				<p className="text-center h5">Spend</p>
				<div className="d-flex col-12">
					For sunflowers:
					<span
						className={`text-${
							totalSpendForSunflower == 0 ? "light" : "danger"
						} ms-auto`}
					>
						{totalSpendForSunflower}
					</span>
				</div>
				<div className="d-flex col-12">
					For pots:{" "}
					<span className={`text-${PotSum == 0 ? "light" : "danger"} ms-auto`}>
						{PotSum}
					</span>
				</div>
				<div className="d-flex col-12">
					For other tools:{" "}
					<span className={`text-${ToolSum == 0 ? "light" : "danger"} ms-auto`}>
						{ToolSum}
					</span>
				</div>
				<div className="d-flex col-12">
					Total LE spend:{" "}
					<span
						className={`text-${totalSpend == 0 ? "light" : "danger"} ms-auto`}
					>
						{totalSpend}
					</span>
				</div>
				<div className="d-flex col-12">
					Total PVU spend:{" "}
					<span
						className={`text-${totalSpend == 0 ? "light" : "danger"} ms-auto`}
					>
						{totalSpend / 105}
					</span>
				</div>
			</div>
			<div className="col-12">
				<p className="text-center h5">Income</p>
				<div className="d-flex col-12">
					LE per hour:
					<span className="ms-auto" style={{ color: "#20c997" }}>
						{toFixed(totlaLEPerHour, 2)}
					</span>
				</div>
				<div className="d-flex col-10">
					LE per day:
					<span className="ms-auto" style={{ color: "#20c997" }}>
						{toFixed(totlaLEPerHour * 24, 2)}
					</span>
				</div>
				<div className="d-flex col-10">
					LE to PVU per day (5% fee):
					<span className="ms-auto" style={{ color: "#20c997" }}>
						{toFixed(totlaPVUPerHour * 24, 2)} PVU
					</span>
				</div>
				<div>
					<div className="d-flex col-10">
						Total income:{" "}
						<span className="ms-auto" style={{ color: "#20c997" }}>
							{toFixed(totalPrice * 24, 2)}$
						</span>
					</div>
					<div className="text-warning">
						Income not inclued sunflowers and tools
					</div>
					<div>
						1 PVU ={" "}
						<span className="ms-auto" style={{ color: "#20c997" }}>
							{price}$
						</span>{" "}
						updated {udpateTime}
					</div>
				</div>
			</div>
			<div className="ms-2 mt-2">
				<small>Sorry for bad UI. Formula will update</small>
			</div>
		</div>
	);
};

export default TotalBoard;
