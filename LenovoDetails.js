import React from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

function LenovoDetails() {
  const [LenovoID, setLenovoID] = React.useState("");
  const { id } = useParams();
  React.useEffect(() => {
    setLenovoID(Number(id));
  }, [id]);
  return (
    <div className="main-container">
      {LenovoID === 1 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Lenovo Ideapad L340 (81LK017SIN) Laptop (Core i7 9th Gen/8 GB/1 TB 256 GB SSD/Windows 10/4 GB)</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Lenovo Ideapad L340 "
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
                    <li>Display Size 15.6 Inches (39.62 cm)</li>
                    <li>Processor Intel Core i7-9750H (9th Gen)</li>
                    <li>Operating System Windows 10 Home Basic</li>
                    <li>Capacity 8 GB</li>
                    <li>HDD Capacity 1 TB</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {LenovoID === 2 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Lenovo Ideapad S145 (81N30063IN) Laptop (AMD Dual Core A6/4 GB/1 TB/Windows 10)</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Lenovo Ideapad S145 "
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
                    <li>Processor AMD Dual Core A6-9225</li>
                    <li>Display Size 15.6 Inches (39.62 cm)</li>
                    <li>Operating System Windows 10 Home Basic</li>
                    <li>Capacity 4 GB</li>
                    <li>HDD Capacity 1 TB</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {LenovoID === 3 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Lenovo Ideapad Gaming 3i 15IMH05 (81Y400BPIN) Laptop (Core i7 10th Gen/8 GB/1 TB 256 GB SSD/Windows 10/4 GB)</h3> 
              <ul className="cost">
                <li>
                  <Link to="/search?q=Lenovo Ideapad Gaming 3i" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
              <h5>Key Specification & Features</h5>
                    <li>Processor Intel Core i7-10750H (10th Gen)</li>
                    <li>Operating System Windows 10 Home Basic</li>
                    <li>Display Size 15.6 Inches (39.62 cm)</li>
                    <li>Capacity 8 GB</li>
                    <li>HDD Capacity 1 TB</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {LenovoID === 4 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Lenovo Ideapad L340 (81LK01L3IN) Laptop (Core i5 9th Gen/8 GB/1 TB/Windows 10/3 GB)</h3>
              <ul className="cost">
                <li>
                  <Link to="/search?q=Lenovo Ideapad L340" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Processor Intel Core i5-9300H (9th Gen)</li>
                    <li>Display Size 15.6 Inches (39.62 cm)</li>
                    <li>Operating System Windows 10 Home Basic</li>
                    <li>Capacity 8 GB</li>
                    <li>HDD Capacity 1 TB</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {LenovoID === 5 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Lenovo Ideapad S145 (81VD0073IN) Laptop (Core i3 7th Gen/4 GB/1 TB/Windows 10)</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Lenovo Ideapad S145"
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
                    <li>Processor Intel Core i3-7020U (7th Gen)</li>
                    <li>Display Size 15.6 Inches (39.62 cm)</li>
                    <li>Capacity 4 GB</li>
                    <li>Operating System Windows 10 Home Basic</li>
                    <li>HDD Capacity 1 TB</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LenovoDetails;