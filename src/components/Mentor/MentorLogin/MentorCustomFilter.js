import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
// import StudentListTabel from "./StudentListTabel";
// import StudentListTabel from "./StudentListTabel";

export default function MentorCustomFilter() {
  const [data, setData] = useState();
  const [session, setSession] = useState();
  const [semester, setSemester] = useState();
  const [branch, setBranch] = useState();
  const [stream, setStream] = useState();



  // useEffect(() => {}, []);

  const HandleGet = () => {
    axios
      .get(
        `http://localhost:9090/student/getall?session=${session}&semester=${semester}&branch=${branch}&stream=${stream}`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {" "}
      <div className="container bg-dark text-white mt-4 p-3">
        <h1 className="h1">Filter</h1>
        <div className="row">
          <div className="col-sm-3">
            <label className="form-label">Session</label>

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
          </div>
          <div className="col-sm-3">
            <label className="form-label">Branch</label>

            <Form.Select
              onChange={(e) => {
                setBranch(e.target.value);
              }}
            >
              <option>Select Branch</option>
              <option value="B.tech">B.tech</option>
              <option value="M.tech">M.tech</option>
              <option value="Diploma">Diploma</option>
              <option value="B.com">B.com</option>
            </Form.Select>
          </div>
          <div className="col-sm-3">
            <label className="form-label">Stream</label>

            <Form.Select
              onChange={(e) => {
                setStream(e.target.value);
              }}
            >
              <option value="EEE">Select Stream</option>
              <option value="CSE">CSE</option>
              <option value="CIVIL">CIVIL</option>
              <option value="MECHANICAL">Mechanical</option>
              <option value="EEE">Electrical</option>
            </Form.Select>
          </div>
          <div className="col-sm-3">
            <label className="form-label">Semester</label>
            <Form.Select
              onChange={(e) => {
                setSemester(e.target.value);
              }}
            >
              <option>Select Semester</option>
              <optgroup label="1st Year " />
              <option value="1">1st Sem</option>
              <option value="2">2nd Sem</option>
              <optgroup label="2nd Year " />
              <option value="3">3rd Sem</option>
              <option value="4">4th Sem</option>
              <optgroup label="3rd Year " />
              <option value="5">5th Sem</option>
              <option value="6">6th Sem</option>
              <optgroup label="4th Year " />
              <option value="7">7th Sem</option>
              <option value="8">8th Sem</option>
            </Form.Select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <button className="btn btn-primary " onClick={HandleGet}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        {/* <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Student </th>
              <th>Registraion no</th>
              <th>View Attendence</th>
              <th>View Issue</th>
              <th>Fee Detail</th>
              <th>Progress Report</th>
              <th>Course Detail </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((test, index) => (
                <tr key={test.registration}>
                  <td>{index + 1}</td>
                  <td>{test.studentName}</td>
                  <td>{test.registration}</td>
                  <td>
                    <button className="btn btn-outline-primary">
                      Click Here 
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-success">
                      Click Here  
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-warning">
                      Click Here  
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-danger">
                      Click Here  
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-info">
                      Click Here  
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table> */}

<Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Student </th>
            <th>Registraion no</th>
            <th>View Attendence</th>
            <th>View Issue</th>
            <th>Fee Detail</th>
            <th>Progress Report</th>
            <th>Course Detail </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nitish Shukla</td>
            <td>200101120110</td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ankush Kumar</td>
            <td>200101120076</td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Saloni Kumari</td>
            <td>200101120077</td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ritesh Kumar Gosain</td>
            <td>200101120103</td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Gautam Kumar Sharma</td>
            <td>200101120073</td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Nitin Kumar</td>
            <td>200101120033</td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Guruprit Kumar</td>
            <td>200101120107</td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Navneet Kumar</td>
            <td>20010112087</td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Sunil Kumar</td>
            <td>200101120111</td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
            <td>
              <button className="btn btn-outline-primary">Click Here ✅</button>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
  );
}
