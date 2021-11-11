import React from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

function OneplusDetails() {
  const [OneplusID, setOneplusID] = React.useState("");
  const { id } = useParams();
  React.useEffect(() => {
    setOneplusID(Number(id));
  }, [id]);
  return (
    <div className="main-container">
      {OneplusID === 1 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h1 class="font-weight-bold py-3">OnePlus 9 Pro 5G</h1>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q= OnePlus 9 Pro 5G"
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
                    <li>Screen Size 6.55 inches (16.64 cm)</li>
                    <li>Front Camera 16 MP</li>
                    <li>Rear Camera 48 MP + 16 MP + 5 MP + 2 MP</li>
                    <li>Battery 4500 mAh</li>
                    <li>RAM 12 GB</li>
                    <li>Processor Octa core (2 GHz, Dual core, Kryo 460 + 1.8 GHz, Hexa Core, Kryo 460)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {OneplusID === 2 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h1 class="font-weight-bold py-3">OnePlus 9R</h1>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=OnePlus 9R"
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
                    <li>Screen Size 6.55 inches (16.64 cm)</li>
                    <li>Front Camera 16 MP</li>
                    <li>Rear Camera 48 MP + 16 MP + 5 MP + 2 MP</li>
                    <li>Battery 4500 mAh</li>
                    <li>RAM 12 GB</li>
                    <li>Processor Octa core (2 GHz, Dual core, Kryo 460 + 1.8 GHz, Hexa Core, Kryo 460)</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {OneplusID === 3 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h1 class="font-weight-bold py-3">OnePlus 9 5G</h1>  
              <ul className="cost">
                <li>
                  <Link to="/search?q=OnePlus 9 5G" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Screen Size 6.55 inches (16.64 cm)</li>
                    <li>Front Camera 16 MP</li>
                    <li>Rear Camera 48 MP + 48 MP + 8 MP + 5 MP</li>
                    <li>Battery 4500 mAh</li>
                    <li>RAM 8 GB</li>
                    <li>Processor Octa core (2.84 GHz, Single core, Kryo 680 + 2.42 GHz, Tri core, Kryo 680 + 1.8 GHz, Quad core, Kryo 680)</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {OneplusID === 4 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h1 class="font-weight-bold py-3">OnePlus 8 Pro</h1>
              <ul className="cost">
                <li>
                  <Link to="/search?q=OnePlus 8 Pro" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Screen Size 6.78 inches (17.22 cm)</li>
                    <li>Front Camera 16 MP</li>
                    <li>Rear Camera 48 MP + 48 MP + 8 MP + 5 MP</li>
                    <li>Battery 4510 mAh</li>
                    <li>RAM 8 GB</li>
                    <li>Processor Octa core (2.84 GHz, Single core, Kryo 585 + 2.42 GHz, Tri core, Kryo 585 + 1.8 GHz, Quad core, Kryo 585)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {OneplusID === 5 && (
        <div className="container my-5">
          <div className="row">
            
            <div className="col-lg-4 px-5 pt-2">
            <h1 class="font-weight-bold py-3">OnePlus 8T</h1>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=OnePlus 8T"
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
                    <li>Screen Size 6.55 inches (16.64 cm)</li>
                    <li>Front Camera 16 MP</li>
                    <li>Rear Camera 48 MP + 16 MP + 5 MP + 2 MP</li>
                    <li>Battery 4500 mAh</li>
                    <li>RAM 12 GB</li>
                    <li>Processor Octa core (2.84 GHz, Single core, Kryo 585 + 2.42 GHz, Tri core, Kryo 585 + 1.8 GHz, Quad core, Kryo 585)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OneplusDetails;