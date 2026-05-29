import React from "react";


const AboutUs = () => {
  return (
    <section
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(to bottom, #f5f7fa, #ffffff)"
      }}
    >
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">

          <h5 className="text-warning fw-bold">
            ABOUT US
          </h5>

          <h1
            className="fw-bold"
            style={{
              fontSize: "3rem",
              color: "#1a1a1a"
            }}
          >
            BoldDream Creation Limited
          </h1>

          <p
            className="lead text-muted mx-auto"
            style={{
              maxWidth: "800px"
            }}
          >
            We connect skilled professionals with
            life-changing opportunities while helping
            organizations discover talented people who
            drive growth and success.
          </p>

        </div>

        {/* Company section */}

        <div className="row align-items-center mb-5">

          <div className="col-md-6">

            <img
              src="images/a9e0c7266b418662e958bed3b9e9a02e.jpg"
              alt="About Company"
              className="img-fluid rounded shadow-lg"
              style={{
                borderRadius: "20px",
                height: "450px",
                objectFit: "cover",
                width: "100%"
              }}
            />

          </div>

          <div className="col-md-6">

            <h2 className="fw-bold mb-3">
              Who We Are
            </h2>

            <p className="text-muted">
              Bold Dream Creation Limited is a modern
              recruitment and professional services
              company focused on connecting people
              with meaningful employment opportunities.
            </p>

            <p className="text-muted">
              We believe in professionalism,
              transparency, and creating long-term
              value for both employers and job seekers.
            </p>

            <div className="row mt-4">

              <div className="col-4 text-center">

                <h2 className="text-warning fw-bold">
                  500+
                </h2>

                <p>Clients</p>

              </div>

              <div className="col-4 text-center">

                <h2 className="text-primary fw-bold">
                  1000+
                </h2>

                <p>Placements</p>

              </div>

              <div className="col-4 text-center">

                <h2 className="text-success fw-bold">
                  10+
                </h2>

                <p>Years Experience</p>

              </div>

            </div>

          </div>

        </div>

        {/* Mission + Vision */}

        <div className="row mb-5">

          <div className="col-md-6 mb-4">

            <div
              className="card border-0 shadow p-4 h-100"
              style={{
                borderRadius: "20px"
              }}
            >

              <h3 className="text-warning">
                Our Mission
              </h3>

              <p>
                To empower individuals and businesses
                through reliable recruitment and
                professional services that create
                growth and lasting success.
              </p>

            </div>

          </div>

          <div className="col-md-6 mb-4">

            <div
              className="card border-0 shadow p-4 h-100"
              style={{
                borderRadius: "20px"
              }}
            >

              <h3 className="text-primary">
                Our Vision
              </h3>

              <p>
                To become a trusted global leader in
                career opportunities and talent
                solutions.
              </p>

            </div>

          </div>

        </div>

        {/* Core Values */}

        <div className="text-center">

          <h2 className="fw-bold mb-4">
            Our Core Values
          </h2>

          <div className="row g-4">

            {[
              "Innovation",
              "Integrity",
              "Excellence",
              "Customer Focus",
              "Teamwork"
            ].map((value, index) => (

              <div
                key={index}
                className="col-md"
              >

                <div
                  className="card border-0 shadow p-4 h-100"
                  style={{
                    borderRadius: "15px"
                  }}
                >

                  <h5>{value}</h5>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;