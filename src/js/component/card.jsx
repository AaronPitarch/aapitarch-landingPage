import React from "react";

function Card() {
    return (
        <div className="card mb-4" style={{ width: "18rem" }}>
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary d-flex justify-content-center">Find Out More!</a>
            </div>
        </div> 
    );
}

export default Card;