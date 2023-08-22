import "./Student.css";
import "./MentorLeave.css"
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useEffect, useState } from "react";


import axios from "axios";

function MentorLeave() {
  const [data, setData] = useState();
  const d = new Date();
  let day = d.toLocaleDateString("pt-PT"); // DD/MM/YYYY

  useEffect(() => {
    axios
      .get("http://localhost:8081/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }, []);

  return (
    <div className="container ritesh mt-5 p-7 shadow-lg rounded-3">
      <h1>Students Leave Form Check Approved/Reject</h1>
      <hr />
      <div className=" row row-cols-1 row-cols-md-3 g-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Name</th>
              <th scope="col">Registration</th>
              <th scope="col">Hostel Name</th>
              <th scope="col">Room No</th>
              <th scope="col">Mess Name</th>
              <th scope="col">Purpose of Leave</th>
              <th scope="col">Place of Visit</th>
              <th scope="col">Parents Number</th>
              <th scope="col">Leave Starts</th>
              <th scope="col">Leaving Time</th>
              <th scope="col">End Le Period</th>
              <th scope="col">Student Email</th>
              <th scope="col">Number Student</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((stds) => (
                <tr key={stds.registrationId}>
                  <th scope="row">{stds.id}</th>
                  <td>{stds.name}</td>
                  <td>{stds.registration}</td>
                  <td>{stds.hostelName}</td>
                  <td>{stds.roomNo}</td>
                  <td>{stds.messName}</td>
                  <td>{stds.purposeofLeave}</td>
                  <td>{stds.placeofVisit}</td>
                  <td>{stds.parentsNumber}</td>
                  <td>{stds.leaveStarts}</td>
                  <td>{stds.leavingTime}</td>
                  <td>{stds.endLeaveperiod}</td>
                  <td>{stds.email}</td>
                  <td>{stds.numberStudent}</td>
                  <td>
                    <i
                      title="Accept Leave"
                      className="bi bi-check-lg text-success h4"
                      
                      type="submit"
                      onClick={() => {
                        alert("Leave Accepted.....!");
                      }}
                    ></i>
                    <i
                      title="Reject Leave"
                      className="bi bi-trash-fill px-3 font-weight-bold text-danger h4"
                      type="submit"
                      onClick={() => {
                        alert("Leave Rejected.....!");
                      }}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default MentorLeave;