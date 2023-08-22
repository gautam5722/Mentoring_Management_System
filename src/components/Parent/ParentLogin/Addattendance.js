import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        coursename: "",
        tattendance: "",
        present: "",
        percent: "",
    });

    const { coursename, tattendance, username, present, percent } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Course Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name="username"
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">
                                Course ID
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your username"
                                name="coursename"
                                value={coursename}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Total Attendance
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="tattendance"
                                value={tattendance}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Present
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="present"
                                value={present}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Percent
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="percent"
                                value={percent}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
