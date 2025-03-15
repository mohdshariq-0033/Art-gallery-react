import React from 'react'
import { Link } from 'react-router-dom'

export default function about() {
  return (
      <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Art gallery</title>
  <link
    to="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"
  />
  {/* vavbar start */}
  <nav
    className="navbar navbar-expand-lg bg-body-tertiary"
    style={{ backgroundColor: "#e3f2fd" }}
  >
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        Art Gallery
     </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">
              Home
           </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" to="/about">
              about
           </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/contact">
              Contact us
           </Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  {/* navbar End */}
  
  {/*about start*/}
  <div className="aboutContainer">
    <h4>1. Cars in Art Galleries</h4>
    <p>
      Classic and modern cars have been celebrated in art through paintings,
      sculptures, and even physical car exhibitions. Some galleries focus on:
    </p>
    <ul>
      <li>Automotive design evolution (vintage to futuristic cars)</li>
      <li>Famous race cars and cultural impact</li>
      <li>Car photography and digital renderings</li>
    </ul>
    <hr />
    <h4>2. Historical Art Galleries</h4>
    <p>
      Historical galleries showcase art from different time periods, reflecting
      cultural, political, and social changes. This includes:
    </p>
    <ul>
      <li>Ancient and classical art</li>
      <li>Renaissance and baroque paintings</li>
      <li>War and revolution-themed exhibits</li>
    </ul>
    <hr />
    <h4>3. Nature in Art Galleries</h4>
    <p>
      Nature-inspired art galleries focus on landscapes, wildlife, and
      environmental themes. They may feature:
    </p>
    <ul>
      <li>landscape paintings</li>
      <li>Eco-conscious and sustainability art</li>
      <li>Botanical and wildlife photography</li>
    </ul>
    <hr />
    <h4>4. Tech in Art Galleries</h4>
    <p>
      Technology-driven galleries highlight how digital innovations shape art.
      This includes:
    </p>
    <ul>
      <li>Digital and AI-generated art</li>
      <li>and interactive installations</li>
      <li>and blockchain-based artworks</li>
    </ul>
    <hr />
  </div>
  {/*about end*/}

  {/* footer start */}
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item">
        <Link to="/" className="nav-link px-2 text-body-secondary">
          Art gallery
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link px-2 text-body-secondary">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="" className="nav-link px-2 text-body-secondary">
          about
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link px-2 text-body-secondary">
          contact us
        </Link>
      </li>
    </ul>
    <p className="text-center text-body-secondary">© 2025 Company, Art Gallery</p>
  </footer>
  {/* footer End */}

</>
  )
}
