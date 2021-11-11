import React from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

function LGDetails() {
  const [LGID, setLGID] = React.useState("");
  const { id } = useParams();
  React.useEffect(() => {
    setLGID(Number(id));
  }, [id]);
  return (
    <div className="main-container">
      {LGID === 1 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h1 class="font-weight-bold py-3">LG 32LM565BPTA 32 inch LED HD-Ready TV</h1>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=LG 32LM565BPTA"
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
                    <li>Resolution HD ready, 1366 x 768 Pixels</li>
                    <li>Refresh Rate 50 Hz</li>
                    <li>Size(Diagonal) 32 Inch</li>
                    <li>Smart TV yes</li>
                    <li>Type LED</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {LGID === 2 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h1 class="font-weight-bold py-3">LG 50UM7290PTD 50 inch LED 4K TV</h1>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=LG 50UM7290PTD"
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
                    <li>Resolution 4K, 3840 x 2160 Pixels</li>
                    <li>Refresh Rate 50 Hz</li>
                    <li>Size(Diagonal) 50 Inch</li>
                    <li>Smart TV yes</li>
                    <li>Type LED</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {LGID === 3 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h1 class="font-weight-bold py-3">LG 43UM7290PTF 43 inch LED 4K TV</h1> 
              <ul className="cost">
                <li>
                  <Link to="/search?q=LG 43UM7290PTF" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
              <h5>Key Specification & Features</h5>
                    <li>Resolution 4K, 3840 x 2160 Pixels</li>
                    <li>Refresh Rate 50 Hz</li>
                    <li>Size(Diagonal) 43 Inch</li>
                    <li>Smart TV yes</li>
                    <li>Type LED</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {LGID === 4 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h1 class="font-weight-bold py-3">LG 55UM7290PTD 55 inch LED 4K TV</h1>
              <ul className="cost">
                <li>
                  <Link to="/search?q=LG 55UM7290PTD" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
              <h5>Key Specification & Features</h5>
                    <li>Resolution 4K, 3840 x 2160 Pixels</li>
                    <li>Refresh Rate 50 Hz</li>
                    <li>Size(Diagonal) 55 Inch</li>
                    <li>Smart TV yes</li>
                    <li>Type LED</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {LGID === 5 && (
        <div className="container my-5">
          <div className="row">
            
            <div className="col-lg-4 px-5 pt-2">
            <h1 class="font-weight-bold py-3">LG 32LM560BPTC 32 inch LED HD-Ready TV</h1>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=LG 32LM560BPTC"
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
                    <li>Resolution HD ready, 1366 x 768 Pixels</li>
                    <li>Refresh Rate 50 Hz</li>
                    <li>Size(Diagonal) 32 Inch</li>
                    <li>Smart TV yes</li>
                    <li>Type LED</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LGDetails;