const Element = (props) => {
	return (
		<div className="mb-auto">
			<img
				style={{ display: "block", maxWidth: "100%", height: "auto" }}
				src={process.env.PUBLIC_URL + `/assets/element/${props.element}.svg`}
				alt={props.element}
			/>
		</div>
	);
};

export default Element;
