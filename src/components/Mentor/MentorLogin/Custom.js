import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

export default function CustomFilter() {
  const [count, setCount] = useState(true);
  const [data, setData] = useState([]);
  const [year, setYear] = useState(0);
  const [branch, setBranch] = useState(0);
  const [semester, setSemester] = useState(0);
  const [stream, setStream] = useState(0);

  const onSubmitHandle = () => {
    axios
      .get(
        `http://localhost:9090/student/getall?session=${year}&branch=${branch}&stream=${stream}&semester=${semester}`
      )
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    onSubmitHandle();
  }, []);

  const getYear = (e) => {
    setYear(e.target.value);
  };

  const getBranch = (e) => {
    setBranch(e.target.value);
  };

  const getStream = (e) => {
    setStream(e.target.value);
  };

  const getSemester = (e) => {
    setSemester(e.target.value);
  };

//   console.table(data[0].assignMentor);

  const [assignedMentor, setAssignedMentor] = useState();
  const [name, setName] = useState();

  const handleAssignMentor = (id , name) => {
    axios
      .post(
        `http://localhost:9090/student/update?registration=${id}&studentName=${name}&assignMentor=${assignedMentor}`
      )
      .then((res) => {
        console.log(res.data);
        alert(`Mentor Assigned...!`);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  if (!data) return null;
  return (
    <div style={{fontFamily: "cursive"}}>
      {" "}
      <div className="container bg-dark text-white mt-4 p-3">
        <h1 className="h1">Filter</h1>
        <div className="row">
          <div className="col-sm-3">
            <label className="form-label">Session</label>

            <Form.Select aria-label="Session" onChange={(e) => getYear(e)}>
              <option>Select Year</option>
              <option value="2018-22">2018-2022</option>
              <option value="2019-23">2019-2023</option>
              <option value="2020-24">2020-2024</option>
              <option value="2021-25">2021-2025</option>
              <option value="2022-26">2022-2026</option>
            </Form.Select>
          </div>

          <div className="col-sm-3">
            <label className="form-label">Branch</label>

            <Form.Select aria-label="Branch" onChange={(e) => getBranch(e)}>
              <option>Select Branch</option>
              <option value="B.tech">B.tech</option>
              <option value="M.Tech">M.tech</option>
              <option value="Diploma">Diploma</option>
              <option value="B.com">B.com</option>
            </Form.Select>
          </div>
          <div className="col-sm-3">
            <label className="form-label">Stream</label>

            <Form.Select aria-label="Stream" onChange={(e) => getStream(e)}>
              <option value="2018-2022">Select Stream</option>
              <option value="CSE">CSE</option>
              <option value="CIVIL">CIVIL</option>
              <option value="MECHANICAL">Mechanical</option>
              <option value="ELECTRICAL">Electrical</option>
            </Form.Select>
          </div>
          <div className="col-sm-3">
            <label className="form-label">Semester</label>
            <Form.Select aria-label="Semester" onChange={(e) => getSemester(e)}>
              <option>Select Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </Form.Select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={onSubmitHandle}
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {data ? (
        <>
          <div className="container mt-4">
           
            <div className=" border border-dark">     {/* card */}
              <div className="card-body">
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Sl.No</th>
                      <th>Student </th>
                      <th>Registraion no</th>
                      <th>Assign Mentor</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((data, index) => (
                        <tr key={data.registration}>
                          <td>{index + 1}</td>
                          <td> {data.studentName}</td>
                          <td>{data.registration}</td>
                          <input
                            hidden
                            value={data.studentName}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                          <td>
                            <Form.Select
                              onChange={(e) => {
                                setAssignedMentor(e.target.value);
                              }}
                            >
                              <option>{data.assignMentor}</option>
                              <option value="Debendra Maharana Sir">
                              Debendra Maharana Sir
                              </option>
                              <option value="Dhawleshwar Sir">
                                Dhawleshwar Sir
                              </option>
                              <option value="Sandeepan Pine">
                                Sandeepan Pine
                              </option>
                              <option value="Anshuman Sir">Anshuman Sir</option>
                            </Form.Select>
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                handleAssignMentor(data.registration , data.studentName);
                              }}
                              className="btn btn-outline-primary"
                            >
                              Assign ✅
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <span>No Data</span>
      )}
    </div>
  );
}