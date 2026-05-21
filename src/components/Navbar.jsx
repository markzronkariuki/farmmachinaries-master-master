import React from "react";

const Navbar = () => {

    return (
        <section className="row">
            <div className="col-md-12">

                <nav className="navbar navbar-expand-md bg-light">

                    {/* BRAND */}
                    <a
                        href="/"
                        className="navbar-brand text-warning fw-bold fst-italic"
                    >
                            Bolddream creation limited.
                    </a>

                    {/* TOGGLER */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarcollapse"
                        aria-controls="navbarcollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* LINKS */}
                    <div className="collapse navbar-collapse" id="navbarcollapse">

                        <div className="navbar-nav">

                            <a href="/" className="nav-link">
                                Home
                            </a>

                            <a href="/contact" className="nav-link">
                                Contact
                            </a>
                            <a href="/aboutus" className="nav-link">
                                AboutUs
                            </a>

                        </div>

                    </div>

                </nav>

            </div>
        </section>
    );
};

export default Navbar;