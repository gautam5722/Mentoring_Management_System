import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ParentLogin.css"
export default function ParentLogin() {
  let navigate = useNavigate();

  const [user, setUser] = useState({

    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8081/loginuser`, user);
      navigate("/parentHomePage");
    }
    catch {
      let a = document.getElementById("er");
      a.innerHTML = "Entered Wrong Cerdintals";
      a.style.color = "red";
      a.style.fontWeight = 700;

    }
  };

  return (
    <>
      <div>
        <div className="container mt-5">
          <center>
            <h1 className="title">Welcome to Parent Module</h1>
          </center>
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <h1 className="text-center">Login</h1>
                <form className="type" onSubmit={(e) => onSubmit(e)}>
                  <div className="form-group">
                    <label> Username :</label>
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="Enter your Email"
                      name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label> Password :</label>
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="Enter your passsword"
                      name="password"
                      value={password}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="text-center">
                    <center><button type="submit" className="btn btn-primary">Login</button></center>
                  </div>
                </form>
                <p id="er"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}