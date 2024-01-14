// import { images } from "../../constants";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faHouse,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-body-dark-grey text-center text-lg-start p-2">
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Umart</h6>
              <p>Closer to You!</p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Store Info
              </h6>
              <p>
                <a href="/About" className="text-decoration-none text-white">
                  About Us
                </a>
              </p>
              <p>
                <a
                  href="/InvestorInfo"
                  className="text-decoration-none text-white"
                >
                  Investor Information
                </a>
              </p>
              <p>
                <a
                  href="/Locations"
                  className="text-decoration-none text-white"
                >
                  Store Locations
                </a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHouse} size="lg" /> BLK 291 YISHUN
                STREET 22 #01-347 SINGAPORE 760291
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} size="lg" /> info@ume.sg
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} size="lg" /> +65 6758 9820
              </p>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                {`© 2023 Copyright: `}
                <a className="text-white" href="/">
                  Umart Singapore
                </a>
              </div>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                className="btn btn-outline-light btn-floating m-1 border border-0"
                role="button"
                href="/"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2xl"
                  style={{ color: "#ff9900" }}
                />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1 border border-0"
                role="button"
                href="/"
              >
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  size="2xl"
                  style={{ color: "#ff9900" }}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
