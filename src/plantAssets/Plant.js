import Element from "./Element";
import Img from "./Img";
import Rarity from "./Rarity";

const Plant = (props) => {
	let data = props.data;
	return (
		<div className="col-lg-4 col-md-6 col-12 mb-2">
			<div
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", minHeight: "100%" }}
				className="d-flex flex-column"
			>
				<div className="row">
					<div className="col-5 col-md-7 col-xl-6 col-xxl-5 text-white mt-2 d-flex flex-column me-auto">
						<Rarity rarity={data.rarityType} plantID={data.plantID} />
						<Element element={data.element} />
					</div>
					<div className="col-1 me-3 pe-4">
						<button
							type="button"
							className="btn-close btn-close-white"
							aria-label="Close"
							onClick={() => props.removeFunc(props.index)}
						></button>
					</div>
				</div>
				<div className="col-12">
					<Img id={data.id} imgType={data.img}></Img>
				</div>
				<div className="col-sm-4 col-md-8 col-lg-7 mt-auto">
					<p
						className="text-center text-white mb-0 border border-white p-1"
						style={{ fontSize: "11px", width: "60%" }}
					>
						LE: {data.LE}/{data.hour}hours
					</p>
				</div>
			</div>
		</div>
	);
};
export default Plant;
