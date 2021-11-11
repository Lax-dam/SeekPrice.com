import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function App() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          {" "}
          <i className="fas fa-balance-scale"></i> SeekPrice{" "}
        </a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#products">Categories</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/omar-al-ghosson-qSnlkqPCj-4-unsplash.jpg"
                alt="Los Angeles"
                className="d-block"
                style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <h3>Mobiles</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/andras-vas-Bd7gNnWJBkU-unsplash.jpg"
                alt="Chicago"
                className="d-block"
                style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <h3>Laptops</h3>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="images/photography-g07321c6ba_640.jpg"
                alt="Chicago"
                className="d-block"
                style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <h3>Cameras</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="step-container">
          <h1 className="heading">
            how it <span>works</span>
          </h1>
          <section className="steps">
            <div className="box">
              <img src="images/download%20(1).jpg" alt="" />
              <h5>Choose a product</h5>
            </div>
            <div className="box">
              <img src="images/download.png" alt="" />
              <h5>Compare price in two ecommerce sites</h5>
            </div>
            <div className="box">
              <img src="images/mini%20project/images/download.jpg" alt="" />
              <h5>And finally, grab the best deal</h5>
            </div>
          </section>
        </div>
      </section>

      <section className="products" id="products">
        <h1 className="heading">
          {" "}
          popular <span>brands</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="icons">
              <Link to="products" className="iPhone">
                iphone
              </Link>
            </div>
            <div className="image">
              <img src="images/photo-1556656793-08538906a9f8.jpg" alt="" />
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link to="Oneplus" className="oneplus">
                oneplus
              </Link>
            </div>
            <div className="image">
              <img src="images/photo-1556656793-08538906a9f8.jpg" alt="" />
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link to="LG" className="lg">
              LG
              </Link>
            </div>
            <div className="image">
              <img src="images/photo-1556656793-08538906a9f8.jpg" alt="" />
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link to="Godrej" className="godrej">
              Godrej
              </Link>
            </div>
            <div className="image">
              <img src="images/photo-1556656793-08538906a9f8.jpg" alt="" />
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link to="Nikon" className="nikon">
                Nikon
              </Link>
            </div>
            <div className="image">
              <img src="images/photo-1556656793-08538906a9f8.jpg" alt="" />
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link to="Mac" className="mac">
                mac
              </Link>
            </div>
            <div className="image">
              <img src="images/photo-1556656793-08538906a9f8.jpg" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <Link to="Whirlpool" className="whirlpool">
              whirlpool
              </Link>
            </div>
            <div className="image">
              <img src="images/photo-1556656793-08538906a9f8.jpg" alt="" />
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link to="Lenovo" className="lenovo">
                lenovo
              </Link>
            </div>
            <div className="image">
              <img src="images/photo-1556656793-08538906a9f8.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <h1 className="heading">
          {" "}
          new <span>arrivals</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="icons">
              <a href="iPhone 13.html" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img src="images/iphone-13-pro-blue-select.png" alt="" />
            </div>
            <div className="content">
              <h4>iPhone 13 pro</h4>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <a href="" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/71B9eOSKaIS._SL1500_.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h4>Sony Bravia 189 cm </h4>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-10%20at%2011.07.57%20PM.jpeg"
                alt=""
              />
            </div>
            <div className="content">
              <h4>Apple MacBook Pro</h4>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
