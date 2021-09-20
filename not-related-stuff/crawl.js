// // CRAWL LE / HOUR FUNCTION IN MARKET

// const convert = () => {
// 	Array.from(
// 		document
// 			.getElementsByClassName("tw-p-1 scroll")[0]
// 			.getElementsByClassName(
// 				"tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-2"
// 			)[0]
// 			.getElementsByClassName("tw-h-80")
// 	).map((item) => {
// 		let aTag = item.querySelector("a");
// 		let id = aTag.getAttribute("href").split("/")[2].trim();
// 		let LEelement = aTag.getElementsByClassName("le")[0].textContent.split("/");
// 		let le = LEelement[0].split("\n")[2].trim();
// 		let hour = LEelement[1].split("\n")[0].trim();
// 		let rarity = id.slice(6, 8);
// 		let plantID = id.slice(3, 5);
// 		console.log(`${plantID} - ${rarity} - ${le} - ${le - rarity} - ${hour}`);
// 	});
// };
