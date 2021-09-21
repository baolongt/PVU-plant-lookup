/* eslint-disable eqeqeq */
import { useState } from "react";

const Content = (props) => {
	let { totalBigPotUsed, totalSmallPotUsed } = props.data;
	let text = "";
	if (totalBigPotUsed && totalSmallPotUsed !== 0) {
		text += `Bought ${totalBigPotUsed} big pot and ${totalSmallPotUsed} small pot`;
	} else if (totalBigPotUsed) {
		text += `Bought ${totalBigPotUsed} big pot`;
	} else if (totalSmallPotUsed !== 0 && totalSmallPotUsed) {
		text += `Bought ${totalSmallPotUsed} small pot`;
	}
	return <p className="text-danger mb-0 pt-1">{text}</p>;
};

const Tool = (props) => {
	const [usedNum, setUsedNum] = useState(0);
	return (
		<div className="col-12 row mb-1">
			<div className="col-2">
				<img
					className="h-auto w-100"
					src={process.env.PUBLIC_URL + `/assets/tool/${props.name}.png`}
					alt={props.toolID}
				/>
			</div>
			{props.type == "input" ? (
				<div className="col-8 d-flex ps-0">
					<div className="col-3">
						<input
							type="number"
							min="0"
							value={usedNum}
							className="form-control form-control-sm"
							onChange={(e) => {
								setUsedNum(e.target.value);
								props.func(e.target.value);
							}}
						/>
					</div>
					<div className="col-7">
						<p
							style={{ fontSize: "14px" }}
							className="ms-1 mb-0 text-light pt-1"
						>
							{props.text}
						</p>
					</div>
				</div>
			) : (
				<button
					className="col-5 btn btn-primary btn-sm"
					onClick={() => {
						setUsedNum(0);
						setUsedNum(props.func());
					}}
				>
					{props.text}
				</button>
			)}
			<div className="col-12 ps-4">
				{usedNum ? <Content data={usedNum} /> : ""}
			</div>
		</div>
	);
};

export default Tool;
