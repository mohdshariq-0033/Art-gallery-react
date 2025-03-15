import React from 'react'
import { Link } from 'react-router-dom'

export default function nature() {
  return (
    <div>
      <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>nature images</title>
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
            src="/nature image/image1.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image2.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image3.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image4.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image5.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image6.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image7.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image8.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image9.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image10.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image11.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image12.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image13.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image14.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image15.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image16.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image17.avif"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image18.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image19.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image20.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image21.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image22.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image23.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image24.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image25.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image26.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image27.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image28.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image29.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image30.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image31.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image32.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image33.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image34.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image35.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image36.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image37.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image38.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image39.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
              Download
           </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/nature image/image40.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
           <Link to="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=612x612&w=0&k=20&c=0SxibtMflIB16q5czESEDmm_lKW54z2_j0Dv5cjl9g8=" type="button">
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
