import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import CustomFilter from "./components/Admin/AdminLogin/CustomFilter";

import Footer from "./components/Footer/Footer";
import {Header} from "./components/HomePage/Header";
import Home from "./components/HomePage/Home";

import Navbarr from "./components/Admin/AdminLogin/Navbarr";
import AddStudentWithMentor from "./components/Admin/AdminLogin/AddStudentWithMentor";
import Issue from "./components/Admin/AdminLogin/Issue";
import UpdateDelete from "./components/Admin/AdminLogin/UpdateDelete";

import AdminHome from "./components/Admin/AdminHome";
import { UpdateAdmin } from "./components/Admin/AdminLogin/UpdateAdmin";

// student routing 
import StudentHomePage from "./components/Student/StudentHomePage";
import StudentLogin from "./components/Student/StudentLogin/StudentLogin";
import StudentLeave from "./components/Student/StudentLogin/StudentLeave";
import ViewAssingment from "./components/Student/StudentLogin/ViewAssingment";
import StudentAttendance from "./components/Student/StudentLogin/StudentAttendance";
import ShowAttendance from "./components/Student/StudentLogin/StudentAttendance";
import EditProfile from "./components/Student/StudentLogin/EditProfile";


// MENTOR ROUTING

import MentorLogin from "./components/Mentor/MentorLogin/MentorLogin";
import MentorHomePage from "./components/Mentor/MentorHomePage";
import MentorCustomFilter from "./components/Mentor/MentorLogin/MentorCustomFilter";
import Form from "./components/Mentor/MentorLogin/Form";
import MentorLeave from "./components/Mentor/MentorLogin/MentorLeave";
// import ChatAdmin from "./components/Mentor/MentorLogin/ChatAdmin";




// parents module routing

import ParentLogin from "./components/Parent/ParentLogin/ParentLogin";
// import { Form } from "react-bootstrap/lib/navbar";
// import ParentHomePage from "./components/Parent/ParentHomePage";
// // import Caht from "./components/Student/StudentLogin/Chat";
// import Contact from "./components/Parent/ParentLogin/Contact";
// import StudentProfile from "./components/Parent/ParentLogin/StudentProfile";
// import StudentMarks from "./components/Parent/ParentLogin/StudentMarks";
// import StudAttendance from "./components/Parent/ParentLogin/StudAttendance";
// import ShowMarks from "./components/Parent/ParentLogin/ShowMarks";
// import Addat from "./components/Parent/ParentLogin/Addattendance"
// import Marks from "./components/Parent/ParentLogin/MarksForm"
// import ShowAttend from "./components/Parent/ParentLogin/ShowAttend";



function App() {
  return (
    <div>
    {/* for header */}
      <Header/>

      {/* <AdminLogin /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<Footer />}></Route>
          <Route path='/admin' element={<AdminLogin />}></Route>
  
          <Route path='/navbarr' element={<Navbarr/>}></Route>
          <Route path='/customFilter' element={<CustomFilter/>}></Route>
          <Route path='/AddStudentWithMentor' element={<AddStudentWithMentor/>}></Route>
          <Route path='/Issue' element={<Issue/>}></Route>
          <Route path='/UpdateDelete' element={<UpdateDelete/>}></Route>
         
          {/*Admin module routing*/}
          <Route path='/adminHome' element={<AdminHome />}></Route>

          <Route path='/updateadmin/:id' element={<UpdateAdmin />}></Route>

          {/* student module routing */}

          <Route path='/studentHomePage' element={<StudentHomePage/>}></Route>
          <Route path='/studentLogin' element={<StudentLogin/>}></Route>
          <Route path='/StudentLeave' element={<StudentLeave/>}></Route>
          <Route path='/ViewAssingment' element={<ViewAssingment/>}></Route>
          <Route path='/StudentAttendance' element={<StudentAttendance/>}></Route>
          <Route path='/ShowAttendance' element={<ShowAttendance/>}></Route>
          <Route path='/EditProfile' element={<EditProfile/>}></Route>



        {/* MENTOR MODULE ROUTING */}

        <Route path='/mentor' element={<MentorLogin/>}></Route>
        <Route path='/mentorHomePage' element={<MentorHomePage />}></Route>
        <Route path='/mentorcustomfilter' element={<MentorCustomFilter />}></Route>
        <Route path='/Form' element={<Form />}></Route>
        <Route path='/MentorLeave' element={<MentorLeave />}></Route>
        {/* <Route path='/ChatAdmin' element={<ChatAdmin />}></Route> */}







          {/* Parents Module roting */}

          {/* <Route path='/parentHomePage' element={<ParentHomePage />}></Route> */}
          <Route path='/parent' element={<ParentLogin />}></Route>

          {/* <Route path='/Contact' element={<Contact />}></Route> */}

          {/* <Route path='/StudentProfile' element={<StudentProfile />}></Route> */}
          {/* <Route path='/StudentMarks' element={<StudentMarks />}></Route> */}
          {/* <Route path='/StudAttendance' element={<StudAttendance />}></Route> */}
          {/* <Route path='/ShowAttend' element={<ShowAttend />}></Route> */}
          {/* <Route path='/ShowMarks' element={<ShowMarks />}></Route> */}
          {/* <Route path='/Contact' element={<Contact />}></Route> */}
          {/* <Route path='/addat' element={<Addat />}></Route> */}
          {/* <Route path='/marks' element={<Marks />}></Route> */}

         
        </Routes>
      </BrowserRouter>

      {/*  for footer  */}
      <Footer />
    </div>
  );
}

export default App;
