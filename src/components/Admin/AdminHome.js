import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./StudentLogin/StudentHome.css";
import { Container, Carousel, Col, Row } from "react-bootstrap";

const username = localStorage.getItem("username");
console.log(username);

export default class AdminHome extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "cursive",
            fontWeight: "900",
            fontSize: "60PX",
          }}
        >
          Welcome To Admin Module{" "}
        </h1>
        <h3 className="" style={{ justifyContent: "center", textAlign:"center", color:"#232b2b" }}>
          {" "}
          Mr. {username}
        </h3>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              {" "}
              <Link to="/CustomFilter">
                <div className="container1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWwz-iIwUWPQfbNVxO-UX8EyXvNrFbi3ghA&usqp=CAU"
                    class="rounded float"
                    alt="..."
                    height="200"
                    width="250"
                  ></img>
                  <div class="centered" style={{fontFamily: "cursive"}}>Assign Mentor</div>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/AddStudentWithMentor">
                <div className="container1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQno-3KTwbYpT0P60XnKfnaH7vMuCnX_jykUw&usqp=CAU"
                    class="rounded float"
                    alt="..."
                    height="200"
                    width="250"
                  ></img> 
                  <div className="centered" style={{fontFamily: "cursive"}}>Add New Student </div>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/UpdateDelete">
                <div className="container1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKUr18b-vH-rCOydAEAkEYyfnavSNZobUCw&usqp=CAU"
                    class="rounded float"
                    alt="..."
                    height="200"
                    width="250"
                  ></img>
                  <div className="centered" style={{fontFamily: "cursive"}}>Update Delete </div>
                </div>
              </Link>
            </Col>
            <Col>
              {" "}
              <Link to="/Issue">
                <div className="container1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDLzxgCyipqQNVK7NmtKJriqj1Htsi9OUo5U5cRZabYliNhDjOVQcJLUqdaFISR5v-j8&usqp=CAU"
                    class="rounded float"
                    alt="..."
                    height="200"
                    width="250"
                  ></img>
                  <div className="centered" style={{fontFamily: "cursive"}}> See Issue</div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
