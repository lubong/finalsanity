import React from 'react'
import './Navbar.css'
import '../../assets/logo.png'

function Navbar() {
  let items = ["About", "Locations", "Promotions", "News", "Career", "Join Us"];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-light-grey fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="logo.png"
              alt="logo"
              width="130"
              className="d-inline-block align-text-top ms-4 pb-2"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav pt-2">
              {items.map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link px-4 text-uppercase"
                    href={`/${item.replace(/\s+/g, "")}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="padd"></div>
    </>
  )
}

export default Navbar;
