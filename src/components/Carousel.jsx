import React from "react";

const Carousel = () => {
  return (
    <section className="container-fluid p-4 mb-2">

      <div
        id="companyCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >

        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#companyCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#companyCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#companyCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">

            <img
              src="images/79975fd9fddef393301f33a3819f549d.jpg"
              className="d-block w-100"
              alt="slide"
              style={{
                height: "400px",
                objectFit: "cover"
              }}
            />

            <div
              className="carousel-caption d-flex align-items-center"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.4), transparent)"
              }}
            >
              <div
                className="container text-start"
                style={{
                  maxWidth: "650px"
                }}
              >
                <h6 className="text-warning fw-bold">
                  WELCOME TO BOLDDREAM CREATION
                </h6>

                <h1 className="display-2 fw-bold text-white"
                  style={{ fontSize: "3rem" }}>
                  Connecting Clients With Opportunities
                </h1>

                <p className="lead text-light">
                  We connect professionals with global opportunities and build successful careers.
                </p>

                <button className="btn btn-warning btn-lg me-3">
                  Get Started
                </button>

                
              </div>
            </div>

          </div>

          {/* Slide 2 */}
          <div className="carousel-item">

            <img
              src="images/a9e0c7266b418662e958bed3b9e9a02e.jpg"
              className="d-block w-100"
              alt="slide"
              style={{
                height: "400px",
                objectFit: "cover"
              }}
            />

            <div
              className="carousel-caption d-flex align-items-center"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.4), transparent)"
              }}
            >
              <div className="container text-start">

                <h1 className="display-3 fw-bold">
                  Professional Recruitment Services
                </h1>

                <p className="lead">
                  Trusted staffing and employment solutions.
                </p>

                <button className="btn btn-primary btn-lg">
                  Explore Services
                </button>

              </div>
            </div>

          </div>

          {/* Slide 3 */}
          <div className="carousel-item">

            <img
              src="images/e7d4355d7bca010043fdb8caf28568e8.jpg"
              className="d-block w-100"
              alt="slide"
              style={{
                height: "400px",
                objectFit: "cover"
              }}
            />

            <div
              className="carousel-caption d-flex align-items-center"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.4), transparent)"
              }}
            >
              <div className="container text-start">

                <h1 className="display-3 fw-bold">
                  Start Your opportunity Journey
                </h1>

                <p className="lead">
                  Your future begins with the right opportunity.
                </p>

                

              </div>
            </div>

          </div>

        </div>

        {/* Previous */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#companyCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        {/* Next */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#companyCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

    </section>
  );
};

export default Carousel;