import React from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

function WhirlpoolDetails() {
  const [WhirlpoolID, setWhirlpoolID] = React.useState("");
  const { id } = useParams();
  React.useEffect(() => {
    setWhirlpoolID(Number(id));
  }, [id]);
  return (
    <div className="main-container">
      {WhirlpoolID === 1 && (
        <div className="container my-5">
          <div className="row">
            
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Whirlpool ACE 7.5 SUPER SOAK 7.5 Kg Semi Automatic Top Load Washing Machine</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q= Whirlpool ACE 7.5"
                    className="price-link"
                  >
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
            <ul>
                    <h5>Key Specification & Features</h5>
					<li>Control Semi Automatic</li>
					<li>Type Top Load</li>
                    <li>Capacity 7.5 Kgs</li>
					<li>Warranty 2 Years</li>
					<li>No of Wash Program 3</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {WhirlpoolID === 2 && (
        <div className="container my-5">
          <div className="row">
            
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Whirlpool ACE 7.5 7.5 Kg Semi Automatic Top Load Washing Machine</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Whirlpool ACE"
                    className="price-link"
                  >
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
                <ul>
                <h5>Key Specification & Features</h5>
					<li>Type Top Load</li>
					<li>Control Semi Automatic</li>
					<li>No of Wash Program 3</li>
                    <li>Warranty 1 Year</li>
					<li>Capacity 7.5 Kgs</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {WhirlpoolID === 3 && (
        <div className="container my-5">
          <div className="row">
            
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Whirlpool ACE 7.5 SUPREME 7.5 Kg Semi Automatic Top Load Washing Machine</h3>  
              <ul className="cost">
                <li>
                  <Link to="/search?q=Whirlpool ACE 7.5 SUPREME" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
                    <h5>Key Specification & Features</h5>
					<li>Type Top Load</li>
					<li>Capacity 7.5 Kgs</li>
					<li>Control Semi Automatic</li>
                    <li>Warranty 2 Years</li>
					<li>Max Spin Speed 1400 RPM</li>
					<li>No of Wash Program 3</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {WhirlpoolID === 4 && (
        <div className="container my-5">
          <div className="row">
            
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Whirlpool Whitemagic Royale 6512SD 6.5 Kg Fully Automatic Top Load Washing Machine</h3>
              <ul className="cost">
                <li>
                  <Link to="/search?q=Whirlpool Whitemagic Royale" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
              <h5>Key Specification & Features</h5>
					<li>Type Top Load</li>
					<li>Control Fully Automatic</li>
                    <li>Warranty 2 Years</li>
					<li>Capacity 6.5 Kgs</li>
					<li>No of Wash Program 12</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {WhirlpoolID === 5 && (
        <div className="container my-5">
          <div className="row">
            
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Whirlpool Whitemagic Elite 7.5 Kg Fully Automatic Top Load Washing Machine</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Whirlpool Whitemagic Elite"
                    className="price-link"
                  >
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
            <ul>
                    <h5>Key Specification & Features</h5>
					          <li>Type Top Load</li>
					          <li>Capacity 7.5 Kgs</li>
                    <li>Warranty 1 Year</li>
					          <li>Control Fully Automatic</li>
					          <li>Max Spin Speed 740 RPM</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WhirlpoolDetails;