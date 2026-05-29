import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-3">
      <div className="container">

        <div className="row">

          {/* Company Section */}
          <div className="col-md-4 mb-3">
            <h2 className="fw-bold text-warning">
              BoldDream Creation limited.
            </h2>

            <p className="text-light">
              We are committed to empowering individuals with
              career opportunities and professional placement
              services worldwide. Our mission is to connect
              talent with life-changing opportunities.
            </p>

            <div className="mt-3">
              <a href="https://facebook.com" className="me-3">
                <img
                  src="images/fb.png"
                  width="30"
                  alt="Facebook"
                />
              </a>

              <a href="https://instagram.com" className="me-3">
                <img
                  src="images/in.png"
                  width="30"
                  alt="Instagram"
                />
              </a>

              <a href="https://x.com">
                <img
                  src="images/x.png"
                  width="30"
                  alt="X"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-warning">Quick Links</h5>

            <ul className="list-unstyled">
              <li>
                <a
                  href="/"
                  className="text-light text-decoration-none"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-light text-decoration-none"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="text-light text-decoration-none"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-light text-decoration-none"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning">Our Services</h5>

            <ul className="list-unstyled">
              <li>International Recruitment</li>
              <li>Career Guidance</li>
              <li>Training Programs</li>
              <li>Professional Placement</li>
              <li>Customer Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning">
              Contact Information
            </h5>

            <p>📍 Nairobi, Mama Ngina Street</p>
            <p>🏢 Vedic House, Room 508</p>
            <p>📞 +254 7 46 171 045 </p>
            <p>📞 +254 1 16 113 551 </p>
            <p>✉ info@boldreamcreation@mail.com</p>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Bottom Footer */}
        <div className="row pb-3">
          <div className="col-md-6">
            <p>
              © {new Date().getFullYear()} BoldDream Creation Limited.
              All Rights Reserved.
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <a
              href="/privacy"
              className="text-light text-decoration-none me-3"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-light text-decoration-none"
            >
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;