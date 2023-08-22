
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Student.css";

export default function StudentLeave() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    name: "",
    registration: "",
    hostelName: "",
    roomNo: "",
    messName: "",
    purposeofLeave: "",
    placeofVisit: "",
    parentsNumber: "",
    leaveStarts: "",
    leavingTime: "",
    endLeaveperiod: "",
    email: "",
    numberStudent: "",
  });

  const {
    username,
    name,
    registration,
    hostelName,
    roomNo,
    messName,
    purposeofLeave,
    placeofVisit,
    parentsNumber,
    leaveStarts,
    leavingTime,
    endLeaveperiod,
    email,
    numberStudent,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await axios.post("http://localhost:8081/user", user);
      alert('Sucesss')
    }
    catch(e){
      alert('Error')
      console.log("Error Found");
    }
  
    // navigate("/");
    
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1 style={{ position: "center", color: "blue" }}>Students Leave Form</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="name"
            placeholder="full name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Full Name </label>
        </div>

        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="registration"
            placeholder="reg.no"
            value={registration}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Reg.No </label>
        </div>

        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="hostelName"
            placeholder="hostel name"
            value={hostelName}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Hostel Name </label>
        </div>

        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="roomNo"
            placeholder="Room No"
            value={roomNo}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Room No</label>
        </div>

        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="messName"
            placeholder="Mess Name"
            value={messName}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Mess Name</label>
        </div>

        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="purposeofLeave"
            placeholder="Purpose Of Leave"
            value={purposeofLeave}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Purpose Of Leave</label>
        </div>

        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="placeofVisit"
            placeholder="Place of Visit"
            value={placeofVisit}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Place of Visit</label>
        </div>

        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="parentsNumber"
            placeholder="first name"
            value={parentsNumber}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Parent's Mobile Number </label>
        </div>

        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="leaveStarts"
            placeholder="Leave Period-From/Date"
            value={leaveStarts}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Leave Period-From/Date </label>
        </div>

        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="leavingTime"
            placeholder="Time During Leaving"
            value={leavingTime}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Time During Leaving</label>
        </div>
        <h3
          style={{ color: "green", paddingBottom: "6px", textAlign: "center" }}
        >
          {" "}
          To
        </h3>

        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="endLeaveperiod"
            placeholder="Leave Period-From/Date"
            value={endLeaveperiod}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Leave Period-From/Date </label>
        </div>

        <div class="form-floating mb-3">
          <input class="form-control" 
          name="email" 
          placeholder="first name" 
          value={email}
          onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput">Email Collage </label>
        </div>
        <div class="form-floating mb-3">
          <input
            class="form-control"
            name="numberStudent"
            placeholder="first name"
            value={numberStudent}
            onChange={(e) => onInputChange(e)}
          />
          <label for="floatingInput"> Student's Mobile Number </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

     
    </div>
  );
}






















// ///import React from "react";
// // import "components"
// import "./Student.css";
// import React from "react";

// function StudentLeave() {



//   return (
//     <div className="container" style={{padding:'20px'}}>
//       <h1 style={{ position: "center", color: "blue" }}>Students Leave Form</h1>
//       <form>
//         <div class="form-floating mb-3">
//           <input
//             type="text"
//             class="form-control"
//             id="name"
//             placeholder="full name"
//           />
//           <label for="floatingInput">Full Name </label>
//         </div>

//         <div class="form-floating mb-3">
//           <input
//             type="number"
//             class="form-control"
//             id="registration"
//             placeholder="reg.no"
//           />
//           <label for="floatingInput">Reg.No </label>
//         </div>

//         <div class="form-floating mb-3">
//           <input
//             type="text"
//             class="form-control"
//             id="hostelName"
//             placeholder="hostel name"
//           />
//           <label for="floatingInput">Hostel Name </label>
//         </div>

//         <div class="form-floating mb-3">
//           <input
//             type="text"
//             class="form-control"
//             id="roomNo"
//             placeholder="Room No"
//           />
//           <label for="floatingInput">Room No</label>
//         </div>

//         <div class="form-floating mb-3">
//           <input
//             type="text"
//             class="form-control"
//             id="messName"
//             placeholder="Mess Name"
//           />
//           <label for="floatingInput">Mess Name</label>
//         </div>

//         <div class="form-floating mb-3">
//           <input
//             type="text"
//             class="form-control"
//             id="purposeofLeave"
//             placeholder="Purpose Of Leave"
//           />
//           <label for="floatingInput">Purpose Of Leave</label>
//         </div>

//         <div class="form-floating mb-3">
//           <input
//             type="text"
//             class="form-control"
//             id="placeofVisit"
//             placeholder="Place of Visit"
//           />
//           <label for="floatingInput">Place of Visit</label>
//         </div>

//         <div class="form-floating mb-3">
//           <input
//             type="number"
//             class="form-control"
//             id="parents-number"
//             placeholder="first name"
//           />
//           <label for="floatingInput">Parent's Mobile Number </label>
//         </div>


//         <div class="form-floating mb-3">
//           <input
//             type="date"
//             class="form-control"
//             id="parents-number"
//             placeholder="Leave Period-From/Date"
//           />
//           <label for="floatingInput">Leave Period-From/Date </label>
//         </div>



//         <div class="form-floating mb-3">
//           <input
//             type="time"
//             class="form-control"
//             id="leavingTime"
//             placeholder="Time During Leaving"
//           />
//           <label for="floatingInput">Time During Leaving</label>
//         </div>
//         <h3 style={{color:'green', paddingBottom:'6px', textAlign:'center'}}> To</h3>

//         <div class="form-floating mb-3">
//           <input
//             type="date"
//             class="form-control"
//             id="parents-number"
//             placeholder="Leave Period-From/Date"
//           />
//           <label for="floatingInput">Leave Period-From/Date </label>
//         </div>



//         <div class="form-floating mb-3">
//           <input
//             type="time"
//             class="form-control"
//             id="leavingTime"
//             placeholder="Time During Leaving"
//           />
//           <label for="floatingInput">Time During Leaving</label>
//         </div>

       

//         <div class="form-floating mb-3">
//           <input
//             type="email"
//             class="form-control"
//             id="email"
//             placeholder="first name"
//           />
//           <label for="floatingInput">Email </label>
//         </div>
//         <div class="form-floating mb-3">
//           <input
//             type="number"
//             class="form-control"
//             id="number"
//             placeholder="first name"
//           />
//           <label for="floatingInput"> Student's Mobile Number </label>
//         </div>


//         <button className="submit-btn">Submit</button>
//       </form>


       



//     </div>
//   );
// }

// export default StudentLeave;