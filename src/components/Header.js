import React from 'react';
import Men from './main';
import Women from './footer';
import BestSeller from './BestSeller';
import Discount from './Discount'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

export default function Header() {
    return (
        <>
        < div className='d-flex nav-item'>

<div className=" p-2 navbar active   ">
    <i class="bi bi-cart ">
        <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Carts</a></i>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
</div>


<div className="navbar ">
    <i class="bi bi-hear ">
        <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Favourites</a></i>

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
    </svg>
</div>

<div className="navbar px-2">
    < i class="bi bi-lock ">
        <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Sign in</a></i>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    </svg>
</div>
</div>
       
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <a class="navbar-brand" href="#">Catalyst</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent"  >
                        <div className="Categories" >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item ">
                                    <Link className="nav-link " to="Men">Men</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Women">Women</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link " to="BestSeller" tabindex="-1" aria-disabled="true">Best Seller</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="Discount" tabindex="-1" aria-disabled="true">Discount</Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                </nav>
                <div>
                    <Routes>
                        <Route path="Men" element={<Men />} />

                        <Route path="Women" element={<Women />} />
                        <Route path="BestSeller" element={<BestSeller />} />
                        <Route path="Discount" element={<Discount />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}
