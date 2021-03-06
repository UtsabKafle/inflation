import React from 'react'
import './Styles/Expenses.css'
import Rchart from '../Rchart/Rchart'
const Expenses = () => {
  return (
    <div className='cont'>
      <div id='header'>Expenses</div>
      <div className="left">
        <div id="sub-cont">
          <div className="form-cont">
            <form>
              <input type="text" name="amount" id="form-text" placeholder='amount' />
              <input type="text" name="reason" id="form-text" placeholder='reason' />
              <select id='form-text'>
                <option selected disabled>Category</option>
                <option>Home</option>
                <option value="fun">Fun</option>
                <option value="education">Education</option>
              </select>
              <button className='btn'>Add</button>
            </form>
          </div>
        </div>
      </div>

    <div className="right">
    <Rchart/>
    </div>
    </div>
  )
}

export default Expenses