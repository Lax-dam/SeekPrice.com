import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Whirlpool() {
  return (
    <div className="main-container">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple-iPhone-13-Mini-Smartphones-491997723-i-1-1200Wx1200H.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
            <div class="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Whirlpool ACE 7.5 SUPER SOAK 7.5 Kg Semi Automatic Top Load Washing Machine</h3>
				<ul>
					<h5>Key Specification & Features</h5>
					<li>Control Semi Automatic</li>
					<li>Type Top Load</li>
				</ul>
			</div>
			<div class="col-lg-4 py-5 pt-10">
				<ul>
					<li>Capacity 7.5 Kgs</li>
					<li>Warranty 2 Years</li>
					<li>No of Wash Program 3</li>
				</ul>
				<h6>
              <Link to="/Whirlpool/1" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple%20iPhone%2012.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
          <h3 class="font-weight-bold py-3">Whirlpool ACE 7.5 7.5 Kg Semi Automatic Top Load Washing Machine</h3>
				<ul>
					<h5>Key Specification & Features</h5>
					<li>Type Top Load</li>
					<li>Control Semi Automatic</li>
					<li>No of Wash Program 3</li>
				</ul>
			</div>
			<div class="col-lg-4 py-5 pt-10">
				<ul>
					<li>Warranty 1 Year</li>
					<li>Capacity 7.5 Kgs</li>
				</ul>
				<h6>
              <Link to="/Whirlpool/2" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple-iPhone-XR-64GB-Blue-491488447-i-1-1200Wx1200H.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
          <h3 class="font-weight-bold py-3">Whirlpool ACE 7.5 SUPREME 7.5 Kg Semi Automatic Top Load Washing Machine</h3>
				<ul>
					<h5>Key Specification & Features</h5>
					<li>Type Top Load</li>
					<li>Capacity 7.5 Kgs</li>
					<li>Control Semi Automatic</li>
				</ul>
			</div>
			<div class="col-lg-4 py-5 pt-10">
				<ul>
					<li>Warranty 2 Years</li>
					<li>Max Spin Speed 1400 RPM</li>
					<li>No of Wash Program 3</li>
				</ul>
				<h6>
              <Link to="/Whirlpool/3" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple%20iPhone%2011.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
          <h3 class="font-weight-bold py-3">Whirlpool Whitemagic Royale 6512SD 6.5 Kg Fully Automatic Top Load Washing Machine</h3>
				<ul>
					<h5>Key Specification & Features</h5>
					<li>Type Top Load</li>
					<li>Control Fully Automatic</li>
				</ul>
			</div>
			<div class="col-lg-4 py-5 pt-10">
				<ul>
					<li>Warranty 2 Years</li>
					<li>Capacity 6.5 Kgs</li>
					<li>No of Wash Program 12</li>
				</ul>
				<h6>
              <Link to="/Whirlpool/4" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple%20iPhone%2012%20Pro%20Max.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
          <h3 class="font-weight-bold py-3">Whirlpool Whitemagic Elite 7.5 Kg Fully Automatic Top Load Washing Machine</h3>
				<ul>
					<h5>Key Specification & Features</h5>
					<li>Type Top Load</li>
					<li>Capacity 7.5 Kgs</li>
				</ul>
			</div>
			<div class="col-lg-4 py-5 pt-10">
				<ul>
					<li>Warranty 1 Year</li>
					<li>Control Fully Automatic</li>
					<li>Max Spin Speed 740 RPM</li>
				</ul>
				<h6>
              <Link to="/Whirlpool/5" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whirlpool;
