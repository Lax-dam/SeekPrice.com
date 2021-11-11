import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function LG() {
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
            <h1 class="font-weight-bold py-3">LG 32LM565BPTA 32 inch LED HD-Ready TV</h1>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Resolution HD ready, 1366 x 768 Pixels</li>
                    <li>Refresh Rate 50 Hz</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Size(Diagonal) 32 Inch</li>
                    <li>Smart TV yes</li>
                    <li>Type LED</li>
                </ul>
                <h6>
              <Link to="/LG/1" className="view-link">
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
          <h1 class="font-weight-bold py-3">LG 50UM7290PTD 50 inch LED 4K TV</h1>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Resolution 4K, 3840 x 2160 Pixels</li>
                    <li>Refresh Rate 50 Hz</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Size(Diagonal) 50 Inch</li>
                    <li>Smart TV yes</li>
                    <li>Type LED</li>
                </ul>
                <h6>
              <Link to="/LG/2" className="view-link">
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
          <h1 class="font-weight-bold py-3">LG 43UM7290PTF 43 inch LED 4K TV</h1>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Resolution 4K, 3840 x 2160 Pixels</li>
                    <li>Refresh Rate 50 Hz</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Size(Diagonal) 43 Inch</li>
                    <li>Smart TV yes</li>
                    <li>Type LED</li>
                </ul>
                <h6>
              <Link to="/LG/3" className="view-link">
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
          <h1 class="font-weight-bold py-3">LG 55UM7290PTD 55 inch LED 4K TV</h1>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Resolution 4K, 3840 x 2160 Pixels</li>
                    <li>Refresh Rate 50 Hz</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Size(Diagonal) 55 Inch</li>
                    <li>Smart TV yes</li>
                    <li>Type LED</li>
                </ul>
                <h6>
              <Link to="/LG/4" className="view-link">
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
          <h1 class="font-weight-bold py-3">LG 32LM560BPTC 32 inch LED HD-Ready TV</h1>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Resolution HD ready, 1366 x 768 Pixels</li>
                    <li>Refresh Rate 50 Hz</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Size(Diagonal) 32 Inch</li>
                    <li>Smart TV yes</li>
                    <li>Type LED</li>
                </ul>
                <h6>
              <Link to="/LG/5" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LG;