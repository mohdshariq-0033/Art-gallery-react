import React from 'react'
import { Link } from 'react-router-dom'

export default function cars() {
  return (
    <div>
      <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>cars images</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"
  />
    <link rel="stylesheet" href="style.css"/>
  {/* vavbar start */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
  {/* image start */}
  <div className="container text-center">
    <div className="row mb-4 mt-5">
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image1.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image2.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image3.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image4.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image5.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image6.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image7.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image8.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image9.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image10.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image11.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image12.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image13.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image14.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image15.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image16.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image17.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image18.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image19.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image20.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image21.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image22.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image23.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image24.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image25.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image26.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image27.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image28.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image29.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image30.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image31.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image32.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image33.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image34.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image35.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image36.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image37.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image38.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image39.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/cars image/image40.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* image End */}
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

    </div>
  )
}
