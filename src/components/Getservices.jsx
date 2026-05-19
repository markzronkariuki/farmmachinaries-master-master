import axios from 'axios'
import React, { useState, useEffect } from 'react'

import Carousel from './Carousel'
import Footer from './Footer'
import Chatbot from './Chatbot'

const Services = () => {

    

    // states
    const [loading, setLoading] = useState("")
    const [services, setServices] = useState([])
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")
    const [sortOption, setSortOption] = useState("")
    const [visibleCount, setVisibleCount] = useState(8)

    // filter services
const filtered_services = Array.isArray(services)
    ? services.filter((item) =>
        item.service_name?.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase())
    )
    : []

    // sorting
    const sorted_services = [...filtered_services].sort((a, b) => {

        if (sortOption === "name_asc") {
            return a.service_name.localeCompare(b.service_name)
        }

        if (sortOption === "name_desc") {
            return b.service_name.localeCompare(a.service_name)
        }

        return 0
    })

    // fetch services
    const getServices = async () => { 

        setLoading("Services loading...")

        try {

            const response = await axios.get(
                "https://markhiggs.alwaysdata.net/api/getservices"
            )
                setServices(response.data)

        setLoading("")

    } catch (error) {
        setLoading("")
        setError("Failed to load services")
        console.log(error)
    }
}      

    // useEffect
    useEffect(() => {
    getServices();
}, []);

    const imagepath =
        "https://markhiggs.alwaysdata.net/static/images/"

    return (

        <div
            className="row g-3"
            style={{
                backgroundColor: "rgb(236, 233, 235)",
                minHeight: "100vh"
            }}
        >

            <Carousel />

            {/* Search */}
            <div className='col-md-4 mb-2'>
                <input
                    className='form-control'
                    type='search'
                    placeholder='Search services...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Sort */}
            <div className='col-md-4 mb-2'>
                <select
                    className='form-control'
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">Sort Services</option>
                    <option value="name_asc">
                        Service Name: A - Z
                    </option>
                    <option value="name_desc">
                        Service Name: Z - A
                    </option>
                </select>
            </div>

            <h3 style={{ color: "#6a11cb" }}>
                Available Services
            </h3>

            <h4 style={{ color: "#6a11cb" }}>
                Welcome to the services we offer
            </h4>

            <h2 className='text-warning'>{loading}</h2>
            <h2 className='text-danger'>{error}</h2>

            {/* map services */}
            {sorted_services
                .slice(0, visibleCount)
                .map((singleService, index) => (

                    <div
                         key={singleService.id || index}
                         className="col-md-3 mb-4"
                            >

                        <div
                            className="card shadow-lg h-100 border-0"
                            style={{
                                background:
                                    "linear-gradient(145deg, #bbeec8, #db619e)",
                                borderRadius: "30px",
                                overflow: "hidden"
                            }}
                        >

                            <img
                                src={imagepath + singleService.photo}
                                alt=""
                                style={{
                                    height: "200px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="card-body">

                                <h2 className='text-success'>
                                    {singleService.service_name}
                                </h2>

                                <p>
                                    {singleService.description}
                                </p>
                                                                <p>
                                    {singleService.requirements}
                                </p>

                                <b className='text-success'>
                                    Ksh {singleService.salary}
                                </b>

                            </div>
                        </div>
                    </div>
                ))}

            {/* load more */}
            <div className='text-center mt-4'>

                {visibleCount < filtered_services.length && (

                    <button
                        className='btn btn-primary w-40 mt-2 fw-bold rounded-3'
                        onClick={() =>
                            setVisibleCount(visibleCount + 8)
                        }
                    >
                        Load More
                    </button>
                )}

                <Chatbot />
            </div>

            <Footer />

        </div>
    )
}

export default Services;