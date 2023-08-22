import React from 'react'
import "./StudentProfile.css";

const StudentProfile = () => {
    return (
        <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
            <div className="row">
                <div className="col-xl-4">
                    {/* <!-- Profile picture card--> */}
                    <div className="card mb-4 mb-xl-0">
                        <div className="card-header">Student Profile</div>
                        <div className="card-body text-center">
                            {/* <!-- Profile picture image--> */}
                            <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            {/* <!-- Profile picture help block--> */}

                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    {/* <!-- Account details card--> */}
                    <div className="card mb-4">
                        <div className="card-header">Student Details</div>
                        <div className="card-body">
                            <form>
                                {/* <!-- Form Group (username)--> */}
                                <div className="mb-3">
                                    <label className='small mb-1' htmlFor='inputName'>
                                        Name - Mentoring System
                                    </label>
                                    <label className='small mb-1' htmlFor='inputRegNo'>
                                        Reg.No- 20010112011265
                                    </label>
                                    <label className='small mb-1' htmlFor='inputEmailAddress'>
                                        Email - 200101120107454@cutm.ac.in
                                    </label>
                                    <label className='small mb-1' htmlFor='inputBranch'>
                                        Branch - B.tech(CSE)
                                    </label>
                                    <div className="col-md-6">
                                        <label className='small mb-1' htmlFor='inputAchievement'>
                                            Achievement -
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile