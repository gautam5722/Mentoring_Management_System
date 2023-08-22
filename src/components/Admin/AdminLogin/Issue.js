import React, { useState } from "react";

export default function CustomFilter() {
  // const [count, setCount] = useState(true);
  // function changefunction() {
  //   setCount(!count);
  // }
  const handleAssignMentor = () => {
    alert("Reply Send To Mentor Successfully...!");
  };
  return (
    <div style={{fontFamily: "cursive"}}>
    
      {" "}
      <div className="container bg-warning text-dark mt-4 p-3">
      
        <h1
          className="h1"
          style={{ display: "flex", justifyContent: "center" }}
        >
          See Issue & Problems
        </h1>
        <form className="container mt-4 px-5 mx-5">
          <label>
            Check Employee ID : &emsp;
            <input type="text" placeholder="EMP123456789" />
          </label>
          &emsp;&emsp;&emsp;&emsp;&emsp;
          
          <label>
            Mentor name : &emsp;
            <input type="text" placeholder="Debendra Maharana Sir " />
          </label>
          &emsp; <br /><br /><br />
          <label>
            Mentor Problems : &emsp;
            <textarea placeholder="Here Coming Mentor Problem " />
          </label>
        </form>
        {/* Admin Reply Mentor Querry */}
        <br />
        <br />
       
        <label style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <br />
          Admin Reply To
          <br /> Mentor Problems: &emsp;
          <textarea
            placeholder="Here Admin Send The Reply To Mentor Problems: "
            style={{ height: "88px" }}
          />
        </label>
        <div className="row mt-5">
          <div
            className="col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button onClick={handleAssignMentor} className="btn btn-primary ">Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
}
