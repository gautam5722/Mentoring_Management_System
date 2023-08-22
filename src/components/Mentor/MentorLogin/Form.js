import React from 'react'
import './Form.css';
const Form = () => {
    return (
        <div>
            <form>
                <h1 className='title'>Student Issue</h1>
            </form>
            <div class="Container">
            <label htmlFor="">Student Name &emsp; </label>
                <input tpye="text" placeholder='Students name'></input>
                <br /> <br/>
    <label htmlFor="">Register Number &nbsp;  </label>
                <input tpye="text" placeholder='Register name'></input>
                <br /> <br/>
    <label htmlFor="">&emsp;  &emsp; &emsp; Issue  &emsp;   &emsp;   </label>
                <input tpye="text" placeholder='Issue'></input>


            </div>
        </div>
    )
}

export default Form
