import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Mac() {
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
            <h3 class="font-weight-bold py-3">Apple MacBook Air MQD32HN/A Ultrabook (Core i5 5th Gen/8 GB/128 GB SSD/macOS Sierra)</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Processor Intel Core i5-6200U (5th Gen)</li>
                    <li>Display Size 13.3 Inches (33.78 cm)</li>
                    <li>Operating System macOS Sierra</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Capacity 8 GB</li>
                </ul>
                <h6>
              <Link to="/Mac/1" className="view-link">
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
          <h3 class="font-weight-bold py-3">Apple MacBook Air MWTJ2HN/A Ultrabook (Core i3 10th Gen/8 GB/256 GB SSD/macOS Catalina)</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Processor Intel Core i3 (10th Gen)</li>
                    <li>Display Size 13.3 Inches (33.78 cm)</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Operating System macOS Catalina</li>
                    <li>HDD Capacity 1 TB</li>
                </ul>
                <h6>
              <Link to="/Mac/2" className="view-link">
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
          <h3 class="font-weight-bold py-3">Apple MacBook Pro MWP42HN/A Ultrabook (Core i5 10th Gen/16 GB/512 GB SSD/macOS Catalina)</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Processor Intel Core i5-1038NG7 (10th Gen)</li>
                    <li>Display Size 13 Inches (33.02 cm)</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Capacity 16 GB</li>
                    <li>Operating System macOS Catalina</li>
                </ul>
                <h6>
              <Link to="/Mac/3" className="view-link">
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
          <h3 class="font-weight-bold py-3">Apple MacBook Pro MWP52HN/A Ultrabook (Core i5 10th Gen/16 GB/1 TB SSD/macOS Catalina)</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Processor Intel Core i5-1038NG7 (10th Gen)</li>
                    <li>Display Size 13 Inches (33.02 cm)</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Capacity 16 GB</li>
                    <li>Operating System macOS Catalina</li>
                </ul>
                <h6>
              <Link to="/Mac/4" className="view-link">
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
          <h3 class="font-weight-bold py-3">Apple MacBook Air MVH22HN/A Ultrabook (Core i5 10th Gen/8 GB/512 GB SSD/macOS Catalina)</h3>
                <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Processor Intel Core i5 (10th Gen)</li>
                    <li>Display Size 13.3 Inches (33.78 cm)</li>
                </ul>
            </div>
            <div class="col-lg-4 py-5 pt-10">
                <ul>
                    <li>Capacity 8 GB</li>
                    <li>Operating System macOS Catalina</li>
                </ul>
                <h6>
              <Link to="/Mac/5" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mac;