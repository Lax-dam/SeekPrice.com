import React from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

function MacDetails() {
  const [MacID, setMacID] = React.useState("");
  const { id } = useParams();
  React.useEffect(() => {
    setMacID(Number(id));
  }, [id]);
  return (
    <div className="main-container">
      {MacID === 1 && (
        <div className="container my-5">
          <div className="row">
            
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Apple MacBook Air MQD32HN/A Ultrabook (Core i5 5th Gen/8 GB/128 GB SSD/macOS Sierra)</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q= Apple MacBook Air MQD32HN/A"
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
                    <li>Processor Intel Core i5-6200U (5th Gen)</li>
                    <li>Display Size 13.3 Inches (33.78 cm)</li>
                    <li>Operating System macOS Sierra</li>
                    <li>Capacity 8 GB</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {MacID === 2 && (
        <div className="container my-5">
          <div className="row">
            
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Apple MacBook Air MWTJ2HN/A Ultrabook (Core i3 10th Gen/8 GB/256 GB SSD/macOS Catalina)</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Apple MacBook Air MWTJ2HN/A"
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
                    <li>Processor Intel Core i3 (10th Gen)</li>
                    <li>Display Size 13.3 Inches (33.78 cm)</li>
                    <li>Operating System macOS Catalina</li>
                    <li>HDD Capacity 1 TB</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {MacID === 3 && (
        <div className="container my-5">
          <div className="row">
              
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Apple MacBook Pro MWP42HN/A Ultrabook (Core i5 10th Gen/16 GB/512 GB SSD/macOS Catalina)</h3> 
              <ul className="cost">
                <li>
                  <Link to="/search?q=Apple MacBook Pro MWP42HN/A" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
               <ul>
                    <h5>Key Specification & Features</h5>
                    <li>Processor Intel Core i5-1038NG7 (10th Gen)</li>
                    <li>Display Size 13 Inches (33.02 cm)</li>
                    <li>Capacity 16 GB</li>
                    <li>Operating System macOS Catalina</li>
                </ul>
            </div>
          </div>
        </div>
      )}
      {MacID === 4 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Apple MacBook Pro MWP52HN/A Ultrabook (Core i5 10th Gen/16 GB/1 TB SSD/macOS Catalina)</h3>
              <ul className="cost">
                <li>
                  <Link to="/search?q=Apple MacBook Pro MWP52HN/A" className="price-link">
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
              <h5>Key Specification & Features</h5>
                    <li>Processor Intel Core i5-1038NG7 (10th Gen)</li>
                    <li>Display Size 13 Inches (33.02 cm)</li>
                    <li>Capacity 16 GB</li>
                    <li>Operating System macOS Catalina</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {MacID === 5 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 px-5 pt-2">
            <h3 class="font-weight-bold py-3">Apple MacBook Air MVH22HN/A Ultrabook (Core i5 10th Gen/8 GB/512 GB SSD/macOS Catalina)</h3>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Apple MacBook Air MVH22HN/A"
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
                    <li>Processor Intel Core i5 (10th Gen)</li>
                    <li>Display Size 13.3 Inches (33.78 cm)</li>
                    <li>Capacity 8 GB</li>
                    <li>Operating System macOS Catalina</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MacDetails;