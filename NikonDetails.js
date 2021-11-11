import React from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

function NikonDetails() {
  const [NikonID, setNikonID] = React.useState("");
  const { id } = useParams();
  React.useEffect(() => {
    setNikonID(Number(id));
  }, [id]);
  return (
    <div className="main-container">
      {NikonID === 1 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Nikon D3500 (AF-P DX 18-55mm f/3.5-f/5.6G VR and AF-P DX 70-300mm f/4.5-f/6.3G ED Dual Kit Lens) Digital SLR Camera</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Nikon D3500 "
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
                    <li>Resolution Available 1920x1080 Pixels (1080p HD),1280x720 Pixels (720p HD)</li>
                    <li>Capacity 210 Litres</li>
                    <li>Display Size 3 Inch</li>
                    <li>Camera Type CMOS Sensor</li>
                    <li>Effective Resolution 24 MP Resolution</li>
                    <li>Camera Type Digital SLR</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {NikonID === 2 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Nikon D5600 (AF-P DX 18-55mm f/3.5-f/5.6G VR and AF-P DX 70-300mm f/4.5-f/6.3G ED VR Dual Kit Lens) Digital SLR Camera</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Nikon D5600 "
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
                    <li>Resolution Available 1920x1080 Pixels (1080p HD),1280x720 Pixels (720p HD)</li>
                    <li>Camera Type CMOS Sensor</li>
                    <li>Effective Resolution 24.2 MP Resolution</li>
                    <li>Display Size 3.2 Inch</li>
                    <li>Camera Type Digital SLR</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {NikonID === 3 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Nikon D5600 (AF-P 18-55mm f/3.5-f/5.6G VR Kit Lens) Digital SLR Camera</h3> 
              <ul className="cost">
                <li>
                  <Link to="/search?q=Nikon D5600" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
              <h5>Key Specification & Features</h5>
                    <li>Resolution Available 1920x1080 Pixels (1080p HD),1280x720 Pixels (720p HD)</li>
                    <li>Camera Type CMOS Sensor</li>
                    <li>Effective Resolution 24.2 MP Resolution</li>
                    <li>Display Size 3.2 Inch</li>
                    <li>Camera Type Digital SLR</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {NikonID === 4 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Nikon D5600 (AF-S DX 18-140mm f/3.5-f/5.6G ED VR Kit Lens) Digital SLR Camera</h3>
              <ul className="cost">
                <li>
                  <Link to="/search?q=Nikon D5600" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
              <h5>Key Specification & Features</h5>
                    <li>Resolution Available 1920x1080 Pixels (1080p HD),1280x720 Pixels (720p HD)</li>
                    <li>Effective Resolution 24.2 MP Resolution</li>
                    <li>Camera Type CMOS Sensor</li>
                    <li>Display Size 3.2 Inch</li>
                    <li>Camera Type Digital SLR</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NikonDetails;