import React from "react";

export const Card = ({image, title, description}) => {
    return (
        <div className="card mb-4 h-100">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text text-center">{description}</p>
                <a href="#" className="btn btn-primary d-flex justify-content-center">Find Out More!</a>
            </div>
        </div> 
    );
}

export default Card;