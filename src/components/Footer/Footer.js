import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <footer className="bd-footer py-5 mt-5 bg-dark">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-3 mb-3">
                <a
                  className="d-inline-flex align-items-center mb-2 link-light text-decoration-none"
                  href="/"
                  aria-label="Bootstrap"
                >
                  <span className="fs-5">Mentoring Management System</span>
                </a>
                <ul className="list-unstyled small text-muted">
                  <li className="mb-2">
                    The main purpose of this project is to provide a seamless
                    experience to the admin, student, mentor and parent. This
                    project will simplify the way of managing mentoring
                    system.It will reduce the paperwork and digitalize the whole
                    process.
                  </li>
                  {/* <li className="mb-2">@ Copyright </li> */}
                  <li className="mb-2">All Righs Reserved.</li>
                  <li className="mb-2">Currently v1.0.</li>
                </ul>
              </div>
              <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                <h5>Links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/">Home</a>
                  </li>
                  <li className="mb-2">
                    <a href="/docs/5.1/">About us</a>
                  </li>
                  <li className="mb-2">
                    <a href="/docs/5.1/examples/">Docs</a>
                  </li>
                  <li className="mb-2">
                    <a href="https://themes.getbootstrap.com/">Design</a>
                  </li>
                  <li className="mb-2">
                    <a href="https://blog.getbootstrap.com/">References</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-2 mb-3">
                <h5 className="light">Navigate</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/docs/5.1/getting-started/">Admin</a>
                  </li>
                  <li className="mb-2">
                    <a href="/docs/5.1/examples/starter-template/">Student</a>
                  </li>
                  <li className="mb-2">
                    <a href="/docs/5.1/getting-started/webpack/">Mentor</a>
                  </li>
                  <li className="mb-2">
                    <a href="/docs/5.1/getting-started/parcel/">Parent</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
