//import { Footer } from "mdbreact";
import React, { Component } from "react";
//import { Navbar, Container } from "react-bootstrap";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./StudentLogin/StudentHome.css";
import { Link } from "react-router-dom";

export default class StudentHomePage extends Component {
  render() {
    return (
      <>
        <center>
          <hr />
          <h1>Welcome To Student Module Dashboard</h1>
          <hr />
        </center>
        <br />
        <br />
        <br />
        <br />
        <div className='flex'>
          <div className='cards'>
            <Link to='/StudentLeave'>
            <img
              src='https://icons.veryicon.com/png/o/miscellaneous/online-registration-system/approval-form-for-faculty-leave-others.png'
              className='card-img'
              alt=''
            />
            </Link>
            <h3>Leave Module</h3>
            <p />
            {/* <button onclick='' className='btn'>
              Open
            </button> */}

            <Link to='/StudentLeave'>
              <button className='btn btn-info mt-3  buttonSize'>Open</button>
            </Link>
          </div>
          <div className='cards'>
            <Link to='/StudentChat'>
            <img
              src='https://e7.pngegg.com/pngimages/34/887/png-clipart-online-chat-computer-icons-livechat-conversation-others-logo-online-chat.png'
              className='card-img'
              alt=''
            />
            </Link>
            <h3>Chat With Mentor</h3>
            <p />
            <Link to='/StudentChat'>
              <button className='btn btn-info mt-3  buttonSize'>Open</button>
            </Link>
          </div>

          <div className='cards'>
            <Link to='/EditProfile'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU'
              className='card-img'
              alt=''
            />
            </Link>
            <h3>Update Profile</h3>
            <p />
            <Link to='/EditProfile'>
              <button className='btn btn-info mt-3  buttonSize'>Open</button>
            </Link>
          </div>


          <div className='cards'>
          <Link to='/ViewAssingment'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrUNgMVAFPXrCrtMsN0wqU1JGq9w5WF8z7Q&usqp=CAU'
              className='card-img'
              alt=''
            />
            </Link>
            <h3>Assignment</h3>
            <p />
            <Link to='/ViewAssingment'>
              <button className='btn btn-info mt-3  buttonSize'>Open</button>
            </Link>
          </div>

          
          <div className='cards'>
          <Link to='/StudentAttendance'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEG_FvbCGk8ZGCqtqlHg2BdX0rZgFwzXzY5dNUO4&s'
              className='card-img'
              alt=''
            />
            </Link>
            <h3>Attendence</h3>
            <p />
            <Link to='/StudentAttendance'>
              <button className='btn btn-info mt-3  buttonSize'>Open</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}




// // import React, { Component } from "react";
// // import { Navbar, Container } from "react-bootstrap";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
