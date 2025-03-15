import React from 'react'
import { Link } from 'react-router-dom'

export default function historichal() {
  return (
    <div>
      <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>historical images</title>
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
            src="/historical image/image1.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image2.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image3.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image4.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image5.webp"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image6.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image7.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image8.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image9.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image10.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image11.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image12.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image13.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image14.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image15.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image16.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image17.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image18.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image19.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image20.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image21.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image22.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image23.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image24.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image25.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image26.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image27.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image28.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image29.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image30.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image31.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image32.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image33.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image34.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image35.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image36.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image37.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image38.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image39.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
              Download
          </Link>
          </div>
        </div>
      </div>
      <div className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="imgContainer">
          <img
            src="/historical image/image40.jpg"
            className="img-thumbnail"
            alt="image"
          />
          <div className="imgBtn">
            <Link to="https://media.istockphoto.com/id/1019967144/photo/gate-in-old-temple.jpg?s=612x612&w=0&k=20&c=-YMHrtoelwRtrjiTQJXMBuvAlnUuO0oHquhAo0dk2xQ=" type="button">
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
