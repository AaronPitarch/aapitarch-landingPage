import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container">
              <a className="navbar-brand text-white me-auto" href="#">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active text-white"href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white-50" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white-50" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white-50" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    );
}

export default Navbar;