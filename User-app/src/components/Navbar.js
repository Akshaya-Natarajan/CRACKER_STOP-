import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-danger p-1">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav fs-4">
                            <Link to={"/"}  style={{textDecoration:"none"}}><a class="nav-link active text-light p-2" aria-current="page" href="#">Home</a></Link>
                            <Link to={'/Aboutus'} style={{textDecoration:"none"}}><a class="nav-link active text-light ms-4 p-2" aria-current="page" href="#">About Us</a></Link>
                            <Link to={'/Pricelist'} style={{textDecoration:"none"}}><a class="nav-link active text-light ms-4 p-2" aria-current="page" href="#">Pricelist</a></Link>
                            <Link to={'/Safety tips'} style={{textDecoration:"none"}}><a class="nav-link active text-light ms-4 p-2" aria-current="page" href="#">Safety Tips</a></Link>
                            <Link to={'/Contact us'}  style={{textDecoration:"none"}}><a class="nav-link active text-light ms-4 p-2" aria-current="page" href="#">Contact us</a></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
