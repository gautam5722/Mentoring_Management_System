import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function AddStudentWithMentor() {
  const [name, setName] = useState("");
  const [regno, setRegno] = useState("");
  const [session, setSession] = useState("");
  const [branch, setBranch] = useState("");
  const [stream, setStream] = useState("");
  const [semester, setSemester] = useState("");
  const [assignedMentor, setAssignedMentor] = useState("");
  // const [isData, setIsData] = useState(false);

  // const [data, setData] = useState([]);

  const handleAddStudent = (e) => {
    e.preventDefault();
    const payload = {
      studentName: name,
      registration: regno,
      session: session,
      branch: branch,
      stream: stream,
      semester: semester,
      assignMentor: assignedMentor,
    };
    axios
      .post("http://localhost:9090/student/add", payload)
      .then((response) => {
        console.log(response.data);
        alert("Added Sucessfully....");
      })
      .catch((err) => {
        console.log(err);
      });

    // setData(payload);
    // setIsData(true);
  };

  return (
    <div>
      {" "}
      <div className="container bg-warning  mt-3 p-3">
        {/* <div className="container bg-secondary text-white mt-3 p-3"> */}
        <h1 className="h1" class="text-center" style={{fontFamily: "cursive"}}>Add New Student With Mentor</h1>
        <br />
        <div className="column">
          {/* <label className="form-label">Name</label> */}
          <form>
            <label>Enter Student name : &emsp;</label>
            <input
              type="text"
              placeholder="Student Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            &emsp; &emsp; &emsp;
            <label>Enter Student Registration No : &emsp;</label>
            <input
              type="text"
              placeholder="Student Registration No."
              onChange={(e) => {
                setRegno(e.target.value);
              }}
            />
            <br />
            <label className="form-label">Session</label>
            <div className="demo">
              <Form.Select
                onChange={(e) => {
                  setSession(e.target.value);
                }}
              >
                <option>Select Year</option>
                <optgroup label="2018" />
                <option value="2018-22">2018-2022</option>
                <optgroup label="2019" />
                <option value="2019-23">2019-2023</option>
                <optgroup label="2020" />
                <option value="2020-24">2020-2024</option>
                <optgroup label="2021" />
                <option value="2021-25">2021-2025</option>
                <optgroup label="2022" />
                <option value="2022-26">2022-2026</option>
              </Form.Select>
              <label className="form-label">Branch</label>
              <Form.Select
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              >
                <option>Select Branch</option>
                <option value="B.Tech">B.tech</option>
                <option value="M.Tech">M.tech</option>
                <option value="Diploma">Diploma</option>
                <option value="B.com">B.com</option>
              </Form.Select>
              <label className="form-label">Stream</label>

              <Form.Select
                onChange={(e) => {
                  setStream(e.target.value);
                }}
              >
                <option value="CSE">Select Stream</option>
                <option value="CSE">CSE</option>
                <option value="CIVIL">CIVIL</option>
                <option value="MECHANICAL">Mechanical</option>
                <option value="ELECTRICAL">Electrical</option>
              </Form.Select>
              <label className="form-label">Semester</label>
              <Form.Select
                onChange={(e) => {
                  setSemester(e.target.value);
                }}
              >
                <option>Select Semester</option>
                <optgroup label="1" />
                <option value="1">1st Sem</option>
                <option value="2">2nd Sem</option>
                <optgroup label="2" />
                <option value="3">3rd Sem</option>
                <option value="4">4th Sem</option>
                <optgroup label="3rd Year " />
                <option value="5">5th Sem</option>
                <option value="6">6th Sem</option>
                <optgroup label="4th Year " />
                <option value="7">7th Sem</option>
                <option value="8">8th Sem</option>
              </Form.Select>
              <label className="form-label">Assign mentor</label>
              <Form.Select
                onChange={(e) => {
                  setAssignedMentor(e.target.value);
                }}
              >
                <option>Assign mentor</option>
                <option value="Debendra Maharana">Debendra maharana</option>
                <option value="Sandeepan">Sandeepan Sir </option>
                <option value="Dhawleshwar">Dhawleshwar Sir</option>
                <option value="Sangram">Sangram sir</option>
              </Form.Select>
            </div>
          </form>
        </div>

        <div className="row mt-2">
          <div className="col">
            <button className="btn btn-primary " onClick={handleAddStudent}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 

<br />
      {isData ? (
        <div className="card w-50 mx-auto">
          <div className="card-header">
            Student Detail{" "}
            <span
              style={{ cursor: "pointer" }}
              className="badge bg-primary text-wrap px-2 py-2 pe-auto button float-end"
              onClick={() => {
                setIsData(false);
              }}
            >
              X
            </span>
          </div>
          <div className="card-body">
            <p>{data.name}</p>
            <p>{data.regno}</p>
            <p>{data.session}</p>
            <p>{data.branch}</p>
            <p>{data.stream}</p>
            <p>{data.semester}</p>
            <p>{data.assignedMentor}</p>
          </div>
          <div className="card-footer"></div>
        </div>
      ) : (
        " "
      )}

      */
