import { PlantInfo } from "./PlantInfoMap";
const SAPLING = {
	LE: 250,
	hour: "72",
	img: "sapling",
	plantID: "sapling",
	type: "Sapling"
};

const MAMA = {
	LE: 850,
	hour: "144",
	img: "mama",
	plantID: "mama",
	type: "mama"
};
const convertID = (plant) => {
	let arrayID = plant.toString().split("");
	// aaa-bb-c-dd-xx
	// let type = `${arrayID[0]}${arrayID[1]}${arrayID[2]}`;
	let id = parseInt(`${arrayID[3]}${arrayID[4]}`);
	let img = `${arrayID[5]}`;
	let rarity = `${arrayID[6]}${arrayID[7]}`;
	return { id, img, rarity };
};

const calculateRarity = (num) => {
	let rarityType = "",
		color = "",
		rarityNum = 0;
	let rarity = parseInt(num);
	if (rarity >= 0 && rarity <= 59) {
		rarityType = "Common";
		rarityNum = 0;
		color = "#198754";
	} else if (rarity >= 60 && rarity <= 88) {
		rarityType = "Uncommon";
		rarityNum = 1;
		color = "#0d6efd";
	} else if (rarity >= 89 && rarity <= 98) {
		rarityType = "Rare";
		rarityNum = 2;
		color = "#dc3545";
	} else if (rarity === 99) {
		rarityType = "Mythic";
		rarityNum = 3;
		color = "#6610f2";
	}
	return { rarityType, rarityNum, color };
};

const searchPlantId = (id) => {
	return PlantInfo.filter((plant) => {
		// eslint-disable-next-line eqeqeq
		return plant.id == id;
	})[0];
};

const calculateLE = (baseLE, rarityNum, rarity, step) => {
	let lowestRarity;
	// eslint-disable-next-line default-case
	switch (rarityNum) {
		case 0:
			lowestRarity = 0;
			break;
		case 1:
			lowestRarity = 60;
			break;
		case 2:
			lowestRarity = 89;
			break;
		case 3:
			lowestRarity = 99;
			break;
	}
	return baseLE[rarityNum] + lowestRarity + (rarity - lowestRarity) * step;
};

const convertToObj = (plantID) => {
	if (isNaN(plantID)) {
		return plantID === "sapling" ? SAPLING : MAMA;
	}
	let { id, img, rarity } = convertID(plantID);
	let plantOBJ = Object.assign(
		searchPlantId(id),
		{
			img,
			rarity,
			LE: "",
			plantID
		},
		calculateRarity(rarity)
	);
	plantOBJ.LE = calculateLE(
		plantOBJ.baseLE,
		plantOBJ.rarityNum,
		plantOBJ.rarity,
		plantOBJ.step
	);
	let result = {
		...plantOBJ
	};
	delete result.baseLE;
	delete result.step;
	return result;
};

const IDCalculate = (id) => {
	if (Array.isArray(id)) {
		let team = id.map((plantID) => {
			return convertToObj(plantID);
		});
		return team;
	} else {
		return convertToObj(id);
	}
};

export default IDCalculate;
