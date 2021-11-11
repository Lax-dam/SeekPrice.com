import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Godrej() {
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
            <h3 class="font-weight-bold py-3">Godrej RT EON 343 SG 2.4 343 Ltr Double Door Refrigerator</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Refrigerator Type Double Door</li>
                    <li>Cooling Technology Frost Free</li>
                    <li>Capacity 343 Litres</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Energy Rating 2</li>
                    <li>Warranty 1 Year</li>
                </ul>
                <h6>
              <Link to="/Godrej/1" className="view-link">
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
          <h3 class="font-weight-bold py-3">Godrej R D EPro 225 TDI 5.2 210 Ltr Single Door Refrigerator</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Refrigerator Type Single Door</li>
                    <li>Capacity 210 Litres</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Warranty 1 Year</li>
                    <li>Energy Rating 5</li>
                </ul>
                <h6>
              <Link to="/Godrej/2" className="view-link">
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
          <h3 class="font-weight-bold py-3">Godrej RD EDGEPRO 225D 43 TDI 210 Ltr Single Door Refrigerator</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Refrigerator Type Single Door</li>
                    <li>Capacity 210 Litres</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Warranty 1 Year</li>
                    <li>Energy Rating 4</li>
                </ul>
                <h6>
              <Link to="/Godrej/3" className="view-link">
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
          <h3 class="font-weight-bold py-3">Godrej RF GF 2552PTH 255 Ltr Double Door Refrigerator</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Refrigerator Type Double Door</li>
                    <li>Cooling Technology Direct Cooling</li>
                    <li>Capacity 255 Litres</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Warranty 1 Year</li>
                    <li>Energy Rating 2</li>
                </ul>
                <h6>
              <Link to="/Godrej/4" className="view-link">
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
          <h3 class="font-weight-bold py-3">Godrej RB NXW AURA 445 MDI 430 Ltr Double Door Refrigerator</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Refrigerator Type Double Door</li>
                    <li>Capacity 430 Litres</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Warranty 1 Year</li>
                    <li>Energy Rating 3</li>
                </ul>
                <h6>
              <Link to="/Godrej/5" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Godrej;