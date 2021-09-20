const Rarity = (props) => {
	return (
		<div
			className="mb-1"
			style={{ position: "relative", display: "inline-block", width: "60%" }}
		>
			<div
				style={{
					marginTop: "2px",
					position: "absolute",
					height: "100%",
					width: "100%"
				}}
			>
				<p style={{ fontSize: "13px" }} className="tetx-light text-center">
					{props.plantID}
				</p>
			</div>
			<img
				style={{ display: "block", maxWidth: "100%", height: "auto" }}
				src={process.env.PUBLIC_URL + `/assets/rarity/${props.rarity}.svg`}
				alt={props.rarity}
			/>
		</div>
	);
};

export default Rarity;
