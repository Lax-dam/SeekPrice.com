import React from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

function GodrejDetails() {
  const [GodrejID, setGodrejID] = React.useState("");
  const { id } = useParams();
  React.useEffect(() => {
    setGodrejID(Number(id));
  }, [id]);
  return (
    <div className="main-container">
      {GodrejID === 1 && (
        <div className="container my-5">
          <div className="row">
          <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Godrej RT EON 343 SG 2.4 343 Ltr Double Door Refrigerator</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Godrej RT"
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
                    <li>Refrigerator Type Double Door</li>
                    <li>Cooling Technology Frost Free</li>
                    <li>Capacity 343 Litres</li>
                    <li>Energy Rating 2</li>
                    <li>Warranty 1 Year</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {GodrejID === 2 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Godrej R D EPro 225 TDI 5.2 210 Ltr Single Door Refrigerator</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Godrej R D"
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
                    <li>Refrigerator Type Single Door</li>
                    <li>Capacity 210 Litres</li>
                    <li>Warranty 1 Year</li>
                    <li>Energy Rating 5</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {GodrejID === 3 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Godrej RD EDGEPRO 225D 43 TDI 210 Ltr Single Door Refrigerator</h3>
              <ul className="cost">
                <li>
                  <Link to="/search?q=Godrej RD" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
              <h5>Key Specification & Features</h5>
                    <li>Refrigerator Type Single Door</li>
                    <li>Capacity 210 Litres</li>
                    <li>Warranty 1 Year</li>
                    <li>Energy Rating 4</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {GodrejID === 4 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Godrej RF GF 2552PTH 255 Ltr Double Door Refrigerator</h3>
              <ul className="cost">
                <li>
                  <Link to="/search?q=Godrej RF GF" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
              <h5>Key Specification & Features</h5>
                    <li>Refrigerator Type Double Door</li>
                    <li>Cooling Technology Direct Cooling</li>
                    <li>Capacity 255 Litres</li>
                    <li>Warranty 1 Year</li>
                    <li>Energy Rating 2</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {GodrejID === 5 && (
        <div className="container my-5">
          <div className="row">
            
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Godrej RB NXW AURA 445 MDI 430 Ltr Double Door Refrigerator</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Godrej RB NXW"
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
                    <li>Refrigerator Type Double Door</li>
                    <li>Capacity 430 Litres</li>
                    <li>Warranty 1 Year</li>
                    <li>Energy Rating 3</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GodrejDetails;