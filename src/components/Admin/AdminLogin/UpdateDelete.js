import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
export default function UpdateDelete() {
  const [deleteId, setDeleteId] = useState();
  const [count, setCount] = useState(true);
  const [data, setData] = useState([]);
  const [year, setYear] = useState();
  const [branch, setBranch] = useState();
  const [semester, setSemester] = useState();
  const [stream, setStream] = useState();

  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:9090/student/getall?session=${year}&branch=${branch}&stream=${stream}&semester=${semester}`
      )
      .then((response) => {
        setData(response.data);
      });
  };

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

  const handleDelete = (id) => {
    axios
      .get(`http://localhost:9090/student/delete?registration=${id}`)
      .then((res) => {
        console.log(res.data);
        // window.location.reload()
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Student Deleted...!");
  };

  const handleUpdate = (id) => {
    navigate(`/updateadmin/${id}`);
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
            <div className="card border border-dark">
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
                          <td>
                            <Form.Select aria-label="mentorlist">
                              <option value={data.assignMentor}>
                                {data.assignMentor}
                              </option>
                              <option value="1">Debendra Maharana Sir</option>
                              <option value="2">Dhawleshwar Sir</option>
                              <option value="3">Sandeepan Pine</option>
                              <option value="3">Anshuman Sir</option>
                            </Form.Select>
                          </td>
                          <td className="text-center">
                            <button
                              onClick={() => {
                                handleUpdate(data.registration);
                              }}
                              className="btn btn-outline-success"
                            >
                              Update
                            </button>

                            <button
                              onClick={() => {
                                handleDelete(data.registration);
                              }}
                              className="btn btn-outline-danger"
                            >
                              Delete
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
