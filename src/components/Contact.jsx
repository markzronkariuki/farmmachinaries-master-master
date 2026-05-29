import React from "react";

const Contact = () => {
  return (
    <section
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(to bottom,#f8f9fa,#ffffff)"
      }}
    >
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">

          <h5 className="text-warning fw-bold">
            CONTACT US
          </h5>

          <h1 className="fw-bold">
            Get In Touch With Us
          </h1>

          <p
            className="text-muted mx-auto"
            style={{
              maxWidth: "700px"
            }}
          >
            We are here to answer your questions and
            help you find opportunities and solutions
            that fit your needs.
          </p>

        </div>

        <div className="row">

          {/* Left Section */}

          <div className="col-md-5 mb-4">

            <div
              className="card border-0 shadow p-4 h-100"
              style={{
                borderRadius: "20px"
              }}
            >

              <h3 className="mb-4">
                Contact Information
              </h3>

              <div className="mb-4">

                <h5>📍 Address</h5>

                <p className="text-muted">
                  Mama Ngina Street,
                  Vedic House Room 508,
                  Nairobi, Kenya
                </p>

              </div>

              <div className="mb-4">

                <h5>📞 Phone</h5>

                <p className="text-muted">
            📞 +254 7 46 171 045 
            📞 +254 1 16 113 551 
                </p>

              </div>

              <div className="mb-4">

                <h5>✉ Email</h5>

                <p className="text-muted">
                  info@boldreamcreation@gmail.com
                </p>

              </div>

              <div>

                <h5>🌐 Working Hours</h5>

                <p className="text-muted">
                  Monday - Friday
                  <br />
                  8:00 AM - 5:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Right Section */}

          <div className="col-md-7">

            <div
              className="card border-0 shadow p-5"
              style={{
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg,#ffffff,#f8f9fa)"
              }}
            >

              <h2 className="fw-bold mb-3">
                Let's Work Together
              </h2>

              <p className="text-muted mb-4">
                We connect skilled professionals with
                opportunities and help businesses
                discover talented people for growth
                and success.
              </p>

              {/* Action buttons */}

              <div className="d-grid gap-3">

                <a
                  href="tel:+254746171045"
                  className="btn btn-warning fw-bold"
                >
                  📞 Call Us
                </a>

                <a
                  href="mailto:info@boldreamcreation@gmail.com"
                  className="btn btn-outline-primary fw-bold"
                >
                  ✉ Send Email
                </a>

                <a
                  href="https://wa.me/254746 171045"
                  className="btn btn-success fw-bold"
                >
                  💬 Chat on WhatsApp
                </a>

              </div>

              <hr className="my-4" />

              {/* Social section */}

              <h5 className="fw-bold mb-3">
                Stay Connected
              </h5>

              <div className="d-flex flex-wrap gap-3">

                <button className="btn btn-primary">
                <a href="https://facebook.com" className="me-3">
                <img
                  src="images/fb.png"
                  width="30"
                  alt="Facebook"
                />
              </a>
                  Facebook
                </button>

                <button className="btn btn-danger">
                <a href="https://instagram.com" className="me-3">
                <img
                  src="images/in.png"
                  width="30"
                  alt="Instagram"
                />
              </a>
                  Instagram
                </button>

                <button className="btn btn-dark">
                  <a href="https://x.com">
                <img
                  src="images/x.png"
                  width="30"
                  alt="X"
                />
              </a>
                  X
                </button>

                <button className="btn btn-info">
                  LinkedIn
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Google Map */}

        <div
          className="card border-0 shadow mt-5"
          style={{
            borderRadius: "20px",
            overflow: "hidden"
          }}
        >

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            style={{
              border: "0"
            }}
          ></iframe>

        </div>

      </div>
    </section>
  );
};

export default Contact;