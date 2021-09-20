import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="text-center text-light">
			<h2>
				{" "}
				<span style={{ color: "#FFAC4A" }}>Plant</span>
				<span style={{ color: "#E9576F" }}> vs</span>
				<span style={{ color: "#BC63D6" }}> Undead</span>
				<span style={{ color: "#FFAC4A" }}> Hub</span>
			</h2>
			<h6>Guide for your NFT garden</h6>
		</header>
	);
};

const Card = ({ title, description, buttonName, color, link }) => {
	return (
		<div
			className="card col-12 col-md-5 col-lg-4 mb-3 p-0 me-2"
			style={{ minHeight: "240px" }}
		>
			<span
				style={{ height: "60px" }}
				className={`placeholder col-12 card-img-top bg-${color}`}
			></span>
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<Link className="btn btn-primary align-self-end mt-auto" to={link}>
					{buttonName}
				</Link>
			</div>
		</div>
	);
};

const Body = () => {
	return (
		<div className="row col-10 mx-auto d-flex justify-content-center mt-5">
			<Card
				title="Plant lookup"
				description="Some quick example text to build on the card title and make up the
					bulk of the card's content."
				buttonName="Lookup"
				color="warning"
				link="/plant-lookup"
			></Card>
			<Card
				title="Garden simulator"
				description="Simulate your garden"
				buttonName="Simulate"
				color="primary"
				link="/garden-simulator"
			></Card>
		</div>
	);
};

const Landing = () => {
	return (
		<>
			<Header />
			<Body />
		</>
	);
};

export default Landing;
