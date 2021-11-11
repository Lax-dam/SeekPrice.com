import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nikon() {
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
            <h3 class="font-weight-bold py-3">Nikon D3500 (AF-P DX 18-55mm f/3.5-f/5.6G VR and AF-P DX 70-300mm f/4.5-f/6.3G ED Dual Kit Lens) Digital SLR Camera</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Resolution Available 1920x1080 Pixels (1080p HD),1280x720 Pixels (720p HD)</li>
                    <li>Capacity 210 Litres</li>
                    <li>Display Size 3 Inch</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Camera Type CMOS Sensor</li>
                    <li>Effective Resolution 24 MP Resolution</li>
                    <li>Camera Type Digital SLR</li>
                </ul>
                <h6>
              <Link to="/Nikon/1" className="view-link">
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
          <h3 class="font-weight-bold py-3">Nikon D5600 (AF-P DX 18-55mm f/3.5-f/5.6G VR and AF-P DX 70-300mm f/4.5-f/6.3G ED VR Dual Kit Lens) Digital SLR Camera</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Resolution Available 1920x1080 Pixels (1080p HD),1280x720 Pixels (720p HD)</li>
                    <li>Camera Type CMOS Sensor</li>
                    <li>Effective Resolution 24.2 MP Resolution</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Display Size 3.2 Inch</li>
                    <li>Camera Type Digital SLR</li>
                </ul>
                <h6>
              <Link to="/Nikon/2" className="view-link">
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
          <h3 class="font-weight-bold py-3">Nikon D5600 (AF-P 18-55mm f/3.5-f/5.6G VR Kit Lens) Digital SLR Camera</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Resolution Available 1920x1080 Pixels (1080p HD),1280x720 Pixels (720p HD)</li>
                    <li>Camera Type CMOS Sensor</li>
                    <li>Effective Resolution 24.2 MP Resolution</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Display Size 3.2 Inch</li>
                    <li>Camera Type Digital SLR</li>
                </ul>
                <h6>
              <Link to="/Nikon/3" className="view-link">
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
          <h3 class="font-weight-bold py-3">Nikon D5600 (AF-S DX 18-140mm f/3.5-f/5.6G ED VR Kit Lens) Digital SLR Camera</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Resolution Available 1920x1080 Pixels (1080p HD),1280x720 Pixels (720p HD)</li>
                    <li>Effective Resolution 24.2 MP Resolution</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Camera Type CMOS Sensor</li>
                    <li>Display Size 3.2 Inch</li>
                    <li>Camera Type Digital SLR</li>
                </ul>
                <h6>
              <Link to="/Nikon/4" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nikon;