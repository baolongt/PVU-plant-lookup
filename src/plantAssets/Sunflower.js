import Img from "./Img";

const Type = (props) => {
	return (
		<div
			className="mb-1 me-0"
			style={{
				position: "relative",
				display: "inline-block",
				width: "60%"
			}}
		>
			<div
				style={{
					marginTop: "2px",
					position: "absolute",
					height: "100%",
					width: "100%"
				}}
			>
				<p style={{ fontSize: "16px" }} className="text-light text-center">
					{props.type}
				</p>
			</div>
		</div>
	);
};

const Sunflower = (props) => {
	let data = props.data;
	return (
		<div
			className="col-lg-4 col-md-6 col-12 mb-2"
			style={{ minHeight: "160px" }}
		>
			<div
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", minHeight: "100%" }}
				className="d-flex flex-column"
			>
				<div className="col-12 row">
					<div className="col-3 ms-2 me-auto">
						<Type type={data.type} />
					</div>
					<div className="col-1">
						<div className="col-1 me-3 pe-4">
							<button
								type="button"
								className="btn-close btn-close-white"
								aria-label="Close"
								onClick={() => props.removeFunc(props.index)}
							></button>
						</div>
					</div>
				</div>
				<div className="col-12 mt-4">
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

export default Sunflower;
