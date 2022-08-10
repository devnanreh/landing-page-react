import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
		<div className="container-fluid bg-dark">
          <Navbar />
        </div>

		<main className=" h-100">
			<div className="container">
				<div className="row">
					<div className="col-12 p-0">
					<Jumbotron />
					</div>
				</div>
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
					<div className="col">
					<Card />
					</div>
					<div className="col">
					<Card />
					</div>
					<div className="col">
					<Card />
					</div>
					<div className="col">
					<Card />
					</div>
				</div>
			</div>
      	</main>

		<footer className="container-fluid mt-auto bg-dark">
			<Footer />
		</footer>
    </div>
  );
};

export default Home;
