import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
  return (
      <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Art gallery</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="style.css" />
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
          <Link
              className="nav-link active"
              aria-current="page"
              to="/"
            >
              Home
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">
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
  {/* hero section start */}
  <div
    id="carouselExampleAutoplaying"
    className="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={3}
        aria-label="Slide 4"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="/hero section image/image1.jpg"
          className="d-block w-100"
          alt="art gallery"
          style={{ height: 400 }}
        />
        <div className="carousel-caption d-none d-md-block">
          <h1>Art Gallery</h1>
          <p>Beautifull Images</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="/hero section image/image2.jpg"
          className="d-block w-100"
          alt="art gallery"
          style={{ height: 400 }}
        />
        <div className="carousel-caption d-none d-md-block">
          <h1>Art Gallery</h1>
          <p>Beautifull Images</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="/hero section image/image3.avif"
          className="d-block w-100"
          alt="art gallery"
          style={{ height: 400 }}
        />
        <div className="carousel-caption d-none d-md-block">
          <h1>Art Gallery</h1>
          <p>Beautifull Images</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="/hero section image/image4.avif"
          className="d-block w-100"
          alt="art gallery"
          style={{ height: 400 }}
        />
        <div className="carousel-caption d-none d-md-block">
          <h1>Art Gallery</h1>
          <p>Beautifull Images</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* hero section End */}
  {/* index image start*/}
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-5 mx-3">
    <div className="box col-12 col-sm-6 col-md-6 col-lg-3 mt-4">
      <div className="card shadow-sm">
        <img src="/nature image/image14.webp" alt="nature image" />
      <Link to="/nature" type="button">
          <div className="card-body">
            <h5>Nature Images</h5>
            <p className="card-text">
              Nature Images &amp; Pictures. We handpicked more than 30+ nature
              pictures for your choosing. HD to 4K quality images.
            </p>
          </div>
      </Link>
      </div>
    </div>
    <div className="box col-12 col-sm-6 col-md-6 col-lg-3 mt-4">
      <div className="card shadow-sm">
        <img src="/cars image/image1.webp" alt="car image" />
      <Link to="/cars" type="button">
          <div className="card-body">
            <h5>Cars Images</h5>
            <p className="card-text">
              30+ beautiful car photos &amp; stock images. From BMW to Jaguar
              &amp; more, download royalty free car pictures in HD to 4K quality
              as wallpapers &amp; backgrounds.
            </p>
          </div>
      </Link>
      </div>
    </div>
    <div className="box col-12 col-sm-6 col-md-6 col-lg-3 mt-4">
      <div className="card shadow-sm">
        <img src="/tech image/image4.avif" alt="tech image" />
      <Link to="/tech" type="button">
          <div className="card-body">
            <h5>Tech Images</h5>
            <p className="card-text">
              30+ latest technology images &amp; stock photos. Download royalty
              free technology pictures in HD to 4K quality.
            </p>
          </div>
      </Link>
      </div>
    </div>
    <div className="box col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mt-4">
      <div className="card shadow-sm">
        <img src="/historical image/image1.webp" alt="historical image" />
      <Link to="/historical" type="button">
          <div className="card-body">
            <h5>Historical Images</h5>
            <p className="card-text">
              30+ Free images of History. Find your perfect history image. Free
              pictures to download and use in your next project.
            </p>
          </div>
      </Link>
      </div>
    </div>
  </div>
  {/* index image End*/}
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
      <Link to="/about" className="nav-link px-2 text-body-secondary">
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
