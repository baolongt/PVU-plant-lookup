const Img = (props) => {
	return (
		<div className="w-25 h-auto mx-auto mx-auto">
			{isNaN(props.id) ? (
				<img
					className="w-100 plant me-4 mt-3"
					src={process.env.PUBLIC_URL + `/assets/img/${props.imgType}.png`}
					alt={props.id}
				/>
			) : (
				<img
					className="w-100 plant me-4 mt-3"
					src={
						process.env.PUBLIC_URL +
						`/assets/img/${props.id}_${props.imgType}.png`
					}
					alt={props.id}
				/>
			)}
		</div>
	);
};

export default Img;
