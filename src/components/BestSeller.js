import React from 'react'

export default function BestSeller() {
  return (
    <>
    <div class="jumbotron jumbotron-fluid mt-3">
  <div class="container">
    <h1 class="display-4">Welcome Everyone!</h1>
    <p class="lead">Grab the Best-Selling t-shirts.</p>
  </div>
</div>
    <div className="container my-5">
        <div className="row">
            <div className="col-lg-3">
            <div className="card" >
  <img src="../pic18.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Twisted fit t-shirt</h5>
    <p className="card-text">Rs.499</p>
    <a href="#" className="btn btn-dark">Get Product</a>
  </div>
</div>
</div>

<div className="col-lg-3">
<div className="card" >
  <img src="../pic12.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Queens of Hearts t-shirt</h5>
    <p className="card-text">Rs.399</p>
    <a href="#" className="btn btn-dark">Get Product</a>
  </div>
</div>
</div>


<div className="col-lg-3">
<div className="card" >
  <img src="../pic9.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">GAMBOY fit t-shirt</h5>
    <p className="card-text">Rs.499</p>
    <a href="#" className="btn btn-dark">Get Product</a>
  </div>
</div>

            </div>

            <div className="col-lg-3">
<div className="card" >
  <img src="../pic10.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Printed fit t-shirt</h5>
    <p className="card-text">Rs.499</p>
    <a href="#" className="btn btn-dark">Get Product</a>
  </div>
</div>

            </div>

            
            
        </div>
    </div>
    </>
  )
}
