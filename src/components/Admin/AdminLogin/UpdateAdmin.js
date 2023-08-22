import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:9090/student/getbyid/?registration=${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.studentName);
        setRegistration(res.data.registration);
        setAssignedMentor(res.data.assignMentor);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const [deleteId, setDeleteId] = useState();
  const [count, setCount] = useState(true);
  const [data, setData] = useState([]);
  const [year, setYear] = useState();
  const [branch, setBranch] = useState();
  const [semester, setSemester] = useState();
  const [stream, setStream] = useState();
  const [name, setName] = useState();
  const [registration, setRegistration] = useState();
  const [assignedMentor, setAssignedMentor] = useState();

  const handleUpdate = (id) => {
    axios
      .post(
        `http://localhost:9090/student/update?registration=${registration}&studentName=${name}&assignMentor=${assignedMentor}`
      )
      .then((res) => {
        console.log(res.data);
        alert("Data Updated...");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  return (
    <div className="container mt-5 " style={{fontFamily: "cursive"}}>
      {/* <div className="form-row justify-content-center my-5 shadow-lg w-auto d-flex flex-column p-5  mx-5"> */}
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <h1
          class="text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "cursive",
            fontWeight: "900",
            fontSize: "40PX",
          }}
        >
          UpdateAdmin
        </h1>{" "}
        <br />
        <div className="form-group col-md-3 " class="text-center">
          <label for="name">Student Name &emsp;</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="form-control"
            class="text-center"
            id="name"
            value={name}
            placeholder="Student Name "
            
          />
        </div>
        <br />
        <div className="form-group col-md-3" class="text-center">
          <label for="registration">Registration No &emsp; </label>
          <input
            onChange={(e) => {
              setRegistration(e.target.value);
            }}
            type="text"
            className="form-control"
            class="text-center"
            id="registration"
            value={registration}
            placeholder="Registration Number"
          />
        </div>
        <br />
        <div className="form-group col-md-3  " class="text-center">
          <label for="inputEmail4">Assign Mentor &emsp;</label>
          <input
            value={assignedMentor}
            className="form-control"
            class="text-center"
            onChange={(e) => {
              setAssignedMentor(e.target.value);
            }}
          />
        </div>
        <br />
        <div class="col-md-12 text-center">
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
