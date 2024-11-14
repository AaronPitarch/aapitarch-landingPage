import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const cards = [
	{
		image: "https://thumb.pccomponentes.com/w-530-530/articles/1083/10831488/1302-funko-pop-deadpool-3-deadpool.jpg",
		title: "Deadpool",
		description: "Funko Pop Marvel Deadpool"
	},
	{
		image: "https://acdn.mitiendanube.com/stores/001/002/330/products/7653456514-funko-pop-goku-eating-noodles-dragon-ball-710-exclusive-meus-colecionaveis-01-29ca5be8aa0d3081e315834811483310-1024-1024.jpg",
		title: "Goku",
		description: "Funko Pop Dragon Ball Goku"
	},
	{
		image: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202009/23/00183180125979____2__1200x1200.jpg",
		title: "Pikachu",
		description: "Funko Pop Pokemon Pikachu"
	},
	{
		image: "https://www.leprechaun.es/31188-large_default/funko-pop-1312-vecna-stranger-things.jpg",
		title: "Vegna",
		description: "Funko Pop Stranger Things Vecna"
	},
]

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row mx-auto py-3">
					{cards.map((item, index) => (
						<div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
							<Card image={item.image} title={item.title} description={item.description} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
		
	);
};

export default Home;
